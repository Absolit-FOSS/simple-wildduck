import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListRegisteredDkimKeysQueryParameters, ListRegisteredDkimKeysResponseParameters, RequestDkimInformationResponseModel } from "./models";
import { GetUsersQueryParametersModel } from "../users";

/**
 * Request DKIM information
 *
 * https://docs.wildduck.email/api/#operation/getDkimKey
 *
 * @param dkimId ID of the DKIM
 */
export const requestDkimInformation = async (
	dkimId: string
): Promise<RequestDkimInformationResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${dkimId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List registered DKIM keys
 *
 * https://docs.wildduck.email/api/#operation/getDkimKeys
 *
 * @param queryData query parameters for additional options
 */
export const listRegisteredDkimKeys = async (
	queryData: ListRegisteredDkimKeysQueryParameters,
): Promise<ListRegisteredDkimKeysResponseParameters> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
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
): Promise<CreationResponseModel > => {
	const url = urlQueryBuilder(`${URL}/${domain}/resolve`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
