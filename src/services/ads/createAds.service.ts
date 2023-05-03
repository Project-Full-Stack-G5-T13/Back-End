import { IAdsCreateData, IAdsCreateRequest } from "../../interfaces/ads/ads.interface";
import { prisma } from "../../prisma";
import { adsResponseSerializer } from "../../serializers/ads/ads.serializer";

export const createAdsService = async ({
	brand,
	car_color,
	description,
	fuel_type,
	images,
	km,
	launch_year,
	model,
	price,
	user_id,
}: IAdsCreateData) => {
	const newAds = await prisma.car.create({
		data: {
			brand,
			model,
			launch_year,
			car_color,
			fuel_type,
			km,
			price,
			description,
			user_id,
		},
	});

	const newImages = await prisma.image.create({
		data: {
			main_image: images.main_image,
			image_one: images.image_one,
			image_two: images.image_two ? images.image_three : "",
			image_three: images.image_three ? images.image_three : "",
			image_four: images.image_four ? images.image_four : "",
			image_five: images.image_five ? images.image_five : "",
			car_id: newAds.id,
		},
	});

	const result = {
		...newAds,
		images: newImages,
	};

	return result;
};
