import {
	IUserUpdateRequest,
	IUserWithAddressResponse,
} from "../../interfaces/users/user.interface";
import { prisma } from "../../prisma";
import {
	userCompleteResponseSerializer,
	userResponseSerializer,
	userWithAddressResponseSerializer,
} from "../../serializers/users/user.serializer";
console.log("teste");

export const updateUserService = async (
	userId: string,
	{
		address,
		birth_date,
		cpf,
		description,
		email,
		image_url,
		is_seller,
		name,
		phone_number,
	}: IUserUpdateRequest
): Promise<IUserWithAddressResponse> => {
	if (!address) {
		const updatedUser = await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				name,
				birth_date,
				cpf,
				email,
				description,
				image_url,
				is_seller,
				phone_number,
			},
			include: {
				address: true,
			},
		});

		const validatedData = userWithAddressResponseSerializer.validate(updatedUser, {
			stripUnknown: true,
		});

		return validatedData;
	}

	await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			name,
			birth_date,
			cpf,
			email,
			description,
			image_url,
			is_seller,
			phone_number,
		},
	});
	const { city, complement, number, state, street, zip_code } = address;

	await prisma.address.update({
		where: {
			user_id: userId,
		},
		data: {
			city,
			complement,
			number,
			state,
			street,
			zip_code,
		},
	});

	const updatedUser = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		include: {
			address: true,
		},
	});

	const validatedData = userWithAddressResponseSerializer.validate(updatedUser, {
		stripUnknown: true,
	});

	return validatedData;
};
