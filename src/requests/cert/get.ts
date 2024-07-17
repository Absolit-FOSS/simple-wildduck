import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
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
 * https://docs.wildduck.email/api/#operation/getcertscert
 *
 * @param certId ID of the TLS certificate
 */
export const requestTlsCertificateInformation = async (
	certId: string
): Promise<AxiosResponse<RequestTlsCertInfoResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${certId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<RequestTlsCertInfoResponseModel>(url);

	return res;
};

/**
 * List registered TLS certificates
 *
 * https://docs.wildduck.email/api/#operation/cert
 *
 * @param queryData query parameters for additional options
 */
export const listRegisteredTlsCertificates = async (
	queryData?: ListRegisteredTlsCertQueryParametersModel
): Promise<AxiosResponse<ListRegisteredTlsCertResponseModel, any>> => {
	const url = urlQueryBuilder(URL, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListRegisteredTlsCertResponseModel>(url);

	return res;
};

/**
 * Resolve ID for a server name
 *
 * https://docs.wildduck.email/api/#operation/getcertsresolveservername
 *
 * @param servername Server name
 */
export const resolveIdForServerName = async (
	servername: string
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/resolve/${servername}}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<CreationResponseModel>(url);

	return res;
};
