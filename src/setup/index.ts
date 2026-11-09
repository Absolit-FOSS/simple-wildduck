import axios, { AxiosInstance } from "axios";
import { WDInitDataModel, WDInitModel } from "./models";

export const wdData: WDInitDataModel = {};

export let axiosConf: AxiosInstance;

export const wdInit = ({
	baseUrl,
	accessToken,
	xAccessToken,
	enableFetchAdaptor,
}: WDInitModel) => {
	wdData.baseUrl = baseUrl;
	wdData.accessToken = accessToken;
	wdData.xAccessToken = xAccessToken;

	axiosConf = axios.create(
		enableFetchAdaptor
			? {
					baseURL: baseUrl,
					adapter: "fetch",
					fetchOptions: {
						cache: "no-store",
					},
				}
			: {
					baseURL: baseUrl,
				},
	);
};
