import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel, FullQueryModel } from "../../models/index";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetAliasInfoResponseModel,
	ListRegisteredDomainAliasesResponseModel,
} from "./models";

/**
 * Request Alias information
 *
 * https://docs.wildduck.email/api/#operation/getDomainAlias
 *
 * @param aliasId ID of the Alias
 */
export const getAliasInformation = async (
	aliasId: string
): Promise<AxiosResponse<GetAliasInfoResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${aliasId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetAliasInfoResponseModel>(url);

	return res;
};

/**
 * List registered Domain Aliases
 *
 * https://docs.wildduck.email/api/#operation/getDomainAliases
 *
 * @param query Partial match of a Domain Alias or Domain name
 */
export const listRegisteredDomainAliases = async (
	queryData?: FullQueryModel
): Promise<AxiosResponse<ListRegisteredDomainAliasesResponseModel, any>> => {
	const url = urlQueryBuilder(URL, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListRegisteredDomainAliasesResponseModel>(
		url
	);

	return res;
};

/**
 * Resolve ID for a domain alias
 *
 * https://docs.wildduck.email/api/#operation/resolveDomainAlias
 *
 * @param aliasId Alias domain
 */
export const resolveIdForDomainAlias = async (
	aliasId: string
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/resolve/${aliasId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<CreationResponseModel>(url);

	return res;
};
