import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { RequestFilterInformationModel, ListAllFiltersModel, ListFiltersForUserModel } from './models';

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
): Promise<RequestFilterInformationModel> => {
	const url = urlQueryBuilder(`/users/${userId}/${filterId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List all Filters
 *
 * https://docs.wildduck.email/api/#operation/getAllFilters
 *
 * @param forward Partial match of a forward email address or URL
 * @param limit How many records to return
 * @param page Current page number. Informational only, page numbers start from 1
 * @param next Cursor value for next page, retrieved from nextCursor response value
 * @param previous Cursor value for previous page, retrieved from previousCursor response value
 */
export const listAllFilters = async (
	forward: string,
	limit: number,
	page: number,
	next: number,
	previous: number
): Promise<ListAllFiltersModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
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
): Promise<ListFiltersForUserModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}/updates`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
