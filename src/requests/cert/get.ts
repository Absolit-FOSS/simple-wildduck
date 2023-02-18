import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetDeletedUserInfoResponseModel,
	GetUserIdByUsernameResponseModel,
	GetUserResponseModel,
	GetUsersQueryParametersModel,
	GetUsersResponseModel,
} from "./models";

/**
 * Request TLS certificate information
 *
 * https://docs.wildduck.email/api/#operation/getTLSCerticate
 *
 * @param certId ID of the TLS certificate
 */
export const requestTlsCertificateInformation = async (certId: string): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${certId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List registered TLS certificates
 *
 * https://docs.wildduck.email/api/#operation/getTLSCerticates
 *
 * @param queryData query parameters for additional options
 * @param query Partial match of a server name (e.g. query=example.com)
 * @param altNames Match query value against SAN as well (including wildcard names)
 * @param limit How many records to return
 * @param page Current page number. Informational only, page numbers start from 1
 * @param next Cursor value for next page, retrieved from nextCursor response value
 * @param previous Cursor value for previous page, retrieved from previousCursor response value
 */
export const listRegisteredTlsCertificates = async (
	queryData: GetUsersQueryParametersModel
): Promise<GetUsersResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Resolve ID for a server name
 *
 * https://docs.wildduck.email/api/#operation/resolveTLSCertificate
 *
 * @param servername Server name
 */
export const resolveIdForServerName = async (
	servername: string
): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${servername}/updates`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
