import * as yup from "yup";
import { SchemaOf } from "yup";
import {
	IAdsCreateRequest,
	IAdsQueries,
	IAdsResponse,
	IAdsUpdateRequest,
	IUniqueAds,
} from "../../interfaces/ads/ads.interface";

export const adsCreateRequestSerializer: SchemaOf<IAdsCreateRequest> = yup.object().shape({
	brand: yup.string().required(),
	car_color: yup.string().required(),
	fuel_type: yup.string().required(),
	description: yup.string().required(),
	km: yup.number().required(),
	launch_year: yup.number().required(),
	model: yup.string().required(),
	price: yup.number().required(),
	images: yup.object().shape({
		main_image: yup.string().required(),
		image_one: yup.string().required(),
		image_two: yup.string().notRequired(),
		image_three: yup.string().notRequired(),
		image_four: yup.string().notRequired(),
		image_five: yup.string().notRequired(),
	}),
});

export const adsUpdateRequestSerializer: SchemaOf<IAdsUpdateRequest> = yup.object().shape({
	brand: yup.string(),
	car_color: yup.string(),
	fuel_type: yup.string(),
	description: yup.string(),
	km: yup.number().required(),
	launch_year: yup.number(),
	model: yup.string(),
	price: yup.number(),
	images: yup
		.object()
		.shape({
			main_image: yup.string(),
			image_one: yup.string(),
			image_two: yup.string(),
			image_three: yup.string(),
			image_four: yup.string(),
			image_five: yup.string(),
		})
		.nullable(),
});

export const adsResponseSerializer: SchemaOf<IAdsResponse> = yup.object().shape({
	id: yup.string().required(),
	brand: yup.string().required(),
	car_color: yup.string().required(),
	fuel_type: yup.string().required(),
	description: yup.string().required(),
	km: yup.number().required(),
	launch_year: yup.number().required(),
	model: yup.string().required(),
	price: yup.number().required(),
	is_active: yup.boolean().required(),
	sold: yup.boolean().required(),
	images: yup.object().shape({
		id: yup.string().required(),
		main_image: yup.string().required(),
		image_one: yup.string().required(),
		image_two: yup.string().nullable(),
		image_three: yup.string().nullable(),
		image_four: yup.string().nullable(),
		image_five: yup.string().nullable(),
		car_id: yup.string().required(),
	}),
	user_id: yup.string().required(),
	user: yup.object().shape({
		name: yup.string().required(),
		image_url: yup.string().required(),
	}),
});

export const listUniqueAdSerializer: SchemaOf<IUniqueAds> = yup.object().shape({
	id: yup.string().required(),
	brand: yup.string().required(),
	car_color: yup.string().required(),
	fuel_type: yup.string().required(),
	description: yup.string().required(),
	km: yup.number().required(),
	launch_year: yup.number().required(),
	model: yup.string().required(),
	price: yup.number().required(),
	is_active: yup.boolean().required(),
	sold: yup.boolean().required(),
	images: yup.object().shape({
		id: yup.string().required(),
		main_image: yup.string().required(),
		image_one: yup.string().required(),
		image_two: yup.string().nullable(),
		image_three: yup.string().nullable(),
		image_four: yup.string().nullable(),
		image_five: yup.string().nullable(),
		car_id: yup.string().required(),
	}),
	user_id: yup.string().required(),
	user: yup.object().shape({
		name: yup.string().required(),
		image_url: yup.string().required(),
		description: yup.string().required(),
	}),
	comments: yup.array(
		yup.object().shape({
			id: yup.string().required(),
			description: yup.string().required(),
			user_id: yup.string().required(),
			car_id: yup.string().required(),
			created_at: yup.date().required(),
		})
	),
});

export const listAdsResponseSerializer: SchemaOf<IAdsResponse[]> = yup.array(adsResponseSerializer);

export const adsQueriesSerializer: SchemaOf<IAdsQueries> = yup
	.object()
	.shape({
		brand: yup.string(),
		model: yup.string(),
		car_color: yup.string(),
		launch_year: yup.number(),
		fuel_type: yup.string(),
		min_km: yup.number(),
		max_km: yup.number(),
		min_price: yup.number(),
		max_price: yup.number(),
		page: yup.number(),
		limit: yup.number(),
	})
	.notRequired();
