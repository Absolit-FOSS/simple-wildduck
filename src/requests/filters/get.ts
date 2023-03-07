import { urlQueryBuilder } from "@netsu/js-utils";
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
): Promise<RequestFilterInfoResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${filterId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List all Filters
 *
 * https://docs.wildduck.email/api/#operation/getAllFilters
 *
 * @param queryData query parameters for additional options
 */
export const listAllFilters = async (
	queryData: ListAllFiltersQueryParametersModel
): Promise<ListAllFiltersResponseModel> => {
	const url = urlQueryBuilder(`/filters`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
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
): Promise<ListFiltersForUserResponseModel> => {
	const url = urlQueryBuilder(URL.replace("{userId}", userId), {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
