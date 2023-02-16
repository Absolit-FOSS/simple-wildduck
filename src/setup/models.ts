export interface WDInitDataModel {
	baseUrl?: string;
	accessToken?: string;
	xAccessToken?: string;
}

export interface WDInitModel extends WDInitDataModel {
	// baseurl is required for app to work
	baseUrl: string;
}
