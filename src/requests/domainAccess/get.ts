import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListAllowedlistedDomainsModel, ListBlockedlistedDomainsModel } from "./models";

/**
 * List allowlisted domains
 *
 * https://docs.wildduck.email/api/#operation/getAllowedDomain
 *
 * @param tag Tag to look for
 */
export const listAllowedlistedDomains = async (
	tag: string
): Promise<ListAllowedlistedDomainsModel> => {
	const url = urlQueryBuilder(`${URL}/${tag}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List blocklisted domains
 *
 * https://docs.wildduck.email/api/#operation/getBlockedDomain
 * 
 * @param tag Tag to look for
 */
export const listBlockedlistedDomains = async (
	tag: string
): Promise<ListBlockedlistedDomainsModel> => {
	const url = urlQueryBuilder(`${URL}/${tag}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
