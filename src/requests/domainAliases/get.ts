import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetDeletedUserInfoResponseModel,
	GetUserIdByUsernameResponseModel,
	GetUserResponseModel,
	GetUsersQueryParametersModel,
	GetUsersResponseModel,
} from "./models";

/**
 * Request Alias information
 *
 * https://docs.wildduck.email/api/#operation/getDomainAlias
 *
 * @param aliasId ID of the Alias
 */
export const requestAliasInformation = async (aliasId: string): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${aliasId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List registered Domain Aliases
 *
 * https://docs.wildduck.email/api/#operation/getDomainAliases
 *
 * @param query Partial match of a Domain Alias or Domain name
 */
export const listRegisteredDomainAliases = async (
	query: string,
	limit: number,
	page: number,
	next: string,
	previous: string
): Promise<GetUsersResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Resolve ID for a domain alias
 *
 * https://docs.wildduck.email/api/#operation/resolveDomainAlias
 *
 * @param alias Alias domain
 */
export const resolveIdForDomainAlias = async (
	alias: string
): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${alias}/updates`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
