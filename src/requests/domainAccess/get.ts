import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListAllowAndBlocklistedDomainsResponseModel } from "./models";

/**
 * List allowlisted domains
 *
 * https://docs.wildduck.email/api/#operation/getdomainaccesstagallow
 *
 * @param tag Tag to look for
 */
export const listAllowlistedDomains = async (
	tag: string
): Promise<AxiosResponse<ListAllowAndBlocklistedDomainsResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${tag}/allow`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<ListAllowAndBlocklistedDomainsResponseModel>(
		url
	);

	return res;
};

/**
 * List blocklisted domains
 *
 * https://docs.wildduck.email/api/#operation/getdomainaccesstagblock
 *
 * @param tag Tag to look for
 */
export const listBlocklistedDomains = async (
	tag: string
): Promise<AxiosResponse<ListAllowAndBlocklistedDomainsResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${tag}/block`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<ListAllowAndBlocklistedDomainsResponseModel>(
		url
	);

	return res;
};
