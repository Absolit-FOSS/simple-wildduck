import { urlQueryBuilder } from "@netsu/js-utils";
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
): Promise<GetAliasInfoResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${aliasId}`, {
		accessToken: wdData.accessToken,
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
	queryData: FullQueryModel
): Promise<ListRegisteredDomainAliasesResponseModel> => {
	const url = urlQueryBuilder(URL, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
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
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL}/resolve/${aliasId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
