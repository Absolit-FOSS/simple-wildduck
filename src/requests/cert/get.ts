import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListRegisteredTlsCertQueryParametersModel, ListRegisteredTlsCertResponseModel, RequestTlsCertInfoResponseModel, ResolveIdForServerNameResponseModel } from "./models";
import { GetUsersQueryParametersModel } from "../users";

/**
 * Request TLS certificate information
 *
 * https://docs.wildduck.email/api/#operation/getTLSCerticate
 *
 * @param certId ID of the TLS certificate
 */
export const requestTlsCertificateInformation = async (
	certId: string
): Promise<RequestTlsCertInfoResponseModel> => {
	const url = urlQueryBuilder(`${URL}/certs/${certId}`, {
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
 */
export const listRegisteredTlsCertificates = async (
	queryData: ListRegisteredTlsCertQueryParametersModel,
): Promise<ListRegisteredTlsCertResponseModel> => {
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
): Promise<ResolveIdForServerNameResponseModel> => {
	const url = urlQueryBuilder(`${URL}/updates/${servername}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
