import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { AddDomainToAllowOrBlocklistBodyParametersModel } from "./models";

/**
 * Add domain to allowlist
 *
 * If an email is sent from a domain that is listed in the allowlist then it is never marked as spam.
 * Lists apply for tagged users.
 *
 * https://docs.wildduck.email/api/#operation/postdomainaccesstagallow
 *
 * @param tag Tag to look for
 * @param bodyData body parameters to reset user password
 */
export const addDomainToAllowlist = async (
	tag: string,
	bodyData: AddDomainToAllowOrBlocklistBodyParametersModel
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${tag}/allow`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreationResponseModel>(url, bodyData);

	return res;
};

/**
 * Add domain to blocklist
 *
 * If an email is sent from a domain that is listed in the blocklist then it is always marked as spam.
 * Lists apply for tagged users.
 *
 * https://docs.wildduck.email/api/#operation/postdomainaccesstagblock
 *
 * @param tag Tag to look for
 * @param bodyData body parameters to reset user password
 */
export const addDomainToBlocklisted = async (
	tag: string,
	bodyData: AddDomainToAllowOrBlocklistBodyParametersModel
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${tag}/block`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreationResponseModel>(url, bodyData);

	return res;
};
