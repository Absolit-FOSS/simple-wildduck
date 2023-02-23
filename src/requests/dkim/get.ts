import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { RequestDkimInformationModel, ResolveIdForDkimDomainModel } from "./models";
import { GetUsersQueryParametersModel } from "../users";

/**
 * Request DKIM information
 *
 * https://docs.wildduck.email/api/#operation/getDkimKey
 *
 * @param dkimId ID of the DKIM
 */
export const requestDkimInformation = async (dkimId: string): Promise<RequestDkimInformationModel> => {
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
 * @param query Partial match of a Domain name
 * @param limit How many records to return
 * @param page Current page number. Informational only, page numbers start from 1
 * @param next Cursor value for next page, retrieved from nextCursor response value
 * @param previous Cursor value for previous page, retrieved from previousCursor response value
 * 
 */
export const listRegisteredDkimKeys = async (
	queryData: GetUsersQueryParametersModel,
	query: string,
	limit: number,
	page: number,
	next: string,
	previous: string
): Promise<ResolveIdForDkimDomainModel> => {
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
): Promise<ResolveIdForDkimDomainModel> => {
	const url = urlQueryBuilder(`${URL}/${domain}/resolve`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
