import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	ListRegisteredTlsCertQueryParametersModel,
	ListRegisteredTlsCertResponseModel,
	RequestTlsCertInfoResponseModel,
} from "./models";

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
	const url = urlQueryBuilder(`${URL}/${certId}`, {
		accessToken: wdData.accessToken,
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
	queryData: ListRegisteredTlsCertQueryParametersModel
): Promise<ListRegisteredTlsCertResponseModel> => {
	const url = urlQueryBuilder(URL, {
		accessToken: wdData.accessToken,
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
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL}/resolve/${servername}}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
