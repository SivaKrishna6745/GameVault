export type Platform = {
	id: number;
	name: string;
	slug: string;
	image_background: string;
};

type PlatformWrapper = {
	platform: Platform;
};

type ParentPlatform = {
	id: number;
	name: string;
	slug: string;
};

type ParentPlatformWrapper = {
	parent_platform: ParentPlatform;
};

export type Genre = {
	name: string;
	slug: string;
	image_background: string;
};

type Store = {
	name: string;
	slug: string;
	image_background: string;
};

type StoreWrapper = {
	id: number;
	store: Store;
};

type Tag = {
	id: number;
	name: string;
	slug: string;
	image_background: string;
};

export type Game = {
	id: number;
	slug: string;
	name: string;
	background_image: string;
	rating: number;
	platforms: PlatformWrapper[];
	parent_platforms: ParentPlatformWrapper[];
	genres: Genre[];
	stores: StoreWrapper[];
	tags: Tag[];
	user_rating?: number;
};
