import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	AddDomainToAllowlistModel,
	AddDomainToBlocklistModel
} from "./models";

/**
 * If an email is sent from a domain that is listed in the allowlist then it is never marked as spam.
 * Lists apply for tagged users.
 * 
 * Add domain to allowlist
 *
 * https://docs.wildduck.email/api/#operation/createAllowedDomain
 *
 * @param tag Tag to look for
 */
export const addDomainToAllowlist = async (
	tag: string
): Promise<AddDomainToAllowlistModel> => {
	const url = urlQueryBuilder(`${URL}/${tag}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};

/**
 * If an email is sent from a domain that is listed in the blocklist then it is always marked as spam.
 * Lists apply for tagged users.
 * 
 * Add domain to blocklist
 *
 * https://docs.wildduck.email/api/#operation/createBlockedDomain
 *
 * @param tag Tag to look for
 */
export const addDomainToBlocklisted = async (
	tag: string,
): Promise<AddDomainToBlocklistModel> => {
	const url = urlQueryBuilder(`${URL}/${tag}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};
