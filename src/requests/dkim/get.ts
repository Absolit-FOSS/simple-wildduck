import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	ListRegisteredDkimKeysQueryParameters,
	ListRegisteredDkimKeysResponseParameters,
	RequestDkimInformationResponseModel,
} from "./models";

/**
 * Request DKIM information
 *
 * https://docs.wildduck.email/api/#operation/getDkimKey
 *
 * @param dkimId ID of the DKIM
 */
export const requestDkimInformation = async (
	dkimId: string
): Promise<AxiosResponse<RequestDkimInformationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${dkimId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<RequestDkimInformationResponseModel>(url);

	return res;
};

/**
 * List registered DKIM keys
 *
 * https://docs.wildduck.email/api/#operation/getDkimKeys
 *
 * @param queryData query parameters for additional options
 */
export const listRegisteredDkimKeys = async (
	queryData?: ListRegisteredDkimKeysQueryParameters
): Promise<AxiosResponse<ListRegisteredDkimKeysResponseParameters, any>> => {
	const url = urlQueryBuilder(URL, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListRegisteredDkimKeysResponseParameters>(
		url
	);

	return res;
};

/**
 * Resolve ID for a DKIM domain
 *
 * https://docs.wildduck.email/api/#operation/resolveDkim
 *
 * @param domain DKIM domain
 */
export const resolveIdForDkimDomain = async (
	domain: string
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/resolve/${domain}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<CreationResponseModel>(url);

	return res;
};
