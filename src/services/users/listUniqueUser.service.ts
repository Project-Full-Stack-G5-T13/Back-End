import { prisma } from "../../prisma";
import { userCompleteResponseSerializer } from "../../serializers/users/user.serializer";

const listUniqueUserService = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: {
			id: id,
		},
		include: {
			address: true,
			cars: {
				include: {
					images: true,
				},
			},
		},
	});

	const validatedData = await userCompleteResponseSerializer.validate(user, {
		stripUnknown: true,
	});

	return validatedData;
};

export default listUniqueUserService;
