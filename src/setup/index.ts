import axios, { AxiosInstance } from "axios";
import { WDInitDataModel, WDInitModel } from "./models";

export const wdData: WDInitDataModel = {};

export let axiosConf: AxiosInstance;

export const wdInit = ({ baseUrl, accessToken, xAccessToken }: WDInitModel) => {
	wdData.baseUrl = baseUrl;
	wdData.accessToken = accessToken;
	wdData.xAccessToken = xAccessToken;

	axiosConf = axios.create({
		baseURL: baseUrl,
	});
};
