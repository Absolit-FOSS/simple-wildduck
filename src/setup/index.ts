import axios, { AxiosInstance } from "axios";
import { WDInitDataModel, WDInitModel } from "./models";

export const wdData: WDInitDataModel = {};

export let axiosConf: AxiosInstance;

export const wdInit = ({ baseUrl, accessToken }: WDInitModel) => {
	wdData.baseUrl = baseUrl;
	wdData.accessToken = accessToken;

	axiosConf = axios.create({
		baseURL: baseUrl,
	});
};
