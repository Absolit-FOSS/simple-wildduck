import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	ListAllFiltersQueryParametersModel,
	ListAllFiltersResponseModel,
	ListFiltersForUserResponseModel,
	RequestFilterInfoResponseModel,
} from "./models";

/**
 * Request Filter information
 *
 * https://docs.wildduck.email/api/#operation/getFilter
 *
 * @param userId Users unique ID
 * @param filterId Filters unique ID
 */
export const requestFilterInformation = async (
	userId: string,
	filterId: string
): Promise<AxiosResponse<RequestFilterInfoResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${filterId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get<RequestFilterInfoResponseModel>(url);

	return res;
};

/**
 * List all Filters
 *
 * https://docs.wildduck.email/api/#operation/getAllFilters
 *
 * @param queryData query parameters for additional options
 */
export const listAllFilters = async (
	queryData?: ListAllFiltersQueryParametersModel
): Promise<AxiosResponse<ListAllFiltersResponseModel, any>> => {
	const url = urlQueryBuilder(`/filters`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListAllFiltersResponseModel>(url);

	return res;
};

/**
 * List Filters for a User
 *
 * https://docs.wildduck.email/api/#operation/getFilters
 *
 * @param userId Users unique ID
 */
export const listFiltersForUser = async (
	userId: string
): Promise<AxiosResponse<ListFiltersForUserResponseModel, any>> => {
	const url = urlQueryBuilder(URL.replace("{userId}", userId), {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<ListFiltersForUserResponseModel>(url);

	return res;
};
