import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListAllowAndBlocklistedDomainsResponseModel } from "./models";

/**
 * List allowlisted domains
 *
 * https://docs.wildduck.email/api/#operation/getAllowedDomain
 *
 * @param tag Tag to look for
 */
export const listAllowlistedDomains = async (
	tag: string
): Promise<ListAllowAndBlocklistedDomainsResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${tag}/allow`, {
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
export const listBlocklistedDomains = async (
	tag: string
): Promise<ListAllowAndBlocklistedDomainsResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${tag}/block`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
