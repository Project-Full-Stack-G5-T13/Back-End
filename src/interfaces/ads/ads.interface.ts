import { IComment } from "../comments/comments.interface";

export interface IAdsCreateRequest {
	brand: string;
	model: string;
	launch_year: number;
	car_color: string;
	fuel_type: string;
	km: number;
	price: number;
	description: string;
	images: {
		main_image: string;
		image_one: string;
		image_two?: string;
		image_three?: string;
		image_four?: string;
		image_five?: string;
	};
}

export interface IAdsCreateData extends IAdsCreateRequest {
	user_id: string;
}

export interface IAdsUpdateRequest {
	brand?: string;
	model?: string;
	launch_year?: number;
	car_color?: string;
	fuel_type?: string;
	km?: number;
	price?: number;
	description?: string;
	images?: {
		main_image?: string;
		image_one?: string;
		image_two?: string;
		image_three?: string;
		image_four?: string;
		image_five?: string;
	};
}

export interface IAdsResponse {
	id: string;
	brand: string;
	model: string;
	launch_year: number;
	car_color: string;
	fuel_type: string;
	km: number;
	price: number;
	description: string;
	is_active: boolean;
	sold: boolean;
	images: {
		id: string;
		main_image: string;
		image_one: string;
		image_two?: string | null;
		image_three?: string | null;
		image_four?: string | null;
		image_five?: string | null;
		car_id: string;
	};
	user_id: string;
	user: {
		name: string;
		image_url: string;
	};
}

export interface IUniqueAds {
	id: string;
	brand: string;
	model: string;
	launch_year: number;
	car_color: string;
	fuel_type: string;
	km: number;
	price: number;
	description: string;
	is_active: boolean;
	sold: boolean;
	images: {
		id: string;
		main_image: string;
		image_one: string;
		image_two?: string | null;
		image_three?: string | null;
		image_four?: string | null;
		image_five?: string | null;
		car_id: string;
	};
	user_id: string;
	user: {
		name: string;
		image_url: string;
		description: string;
	};
	comments: IComment[];
}

export interface IAdsQueries {
	brand?: string;
	model?: string;
	car_color?: string;
	launch_year?: number;
	fuel_type?: string;
	min_km?: number;
	max_km?: number;
	min_price?: number;
	max_price?: number;
	page?: number;
	limit?: number;
}

export interface IAdsLocals {
	queries: IAdsQueries;
	outherQueries: IAdsQueries;
}
