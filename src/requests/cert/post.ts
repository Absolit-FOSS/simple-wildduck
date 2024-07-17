import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateOrUpdateTlsCertForServerNameBodyParametersModel,
	CreateOrUpdateTlsCertForServerNameResponseModel,
} from "./models";

/**
 * Add a new TLS certificate for a server name or update existing one. You can
 * add a single certificate for each server name but SAN names are supported as
 * well. For example you can add a sertificate for "mydomain.com" that includes
 * "*.mydomain.com" in SAN and the same certificate would be used for requests
 * that do not have it's own server name registered but match the SAN value.
 *
 * NB! you must ensure yourself that the servername value is actually listed in
 * certificate's common name or SAN as WildDuck is going to use this certificate regardless.
 *
 * https://docs.wildduck.email/api/#operation/postcerts
 *
 * @param bodyData body parameters to create a user
 */
export const createOrUpdateTlsCertificateForServerName = async (
	bodyData: CreateOrUpdateTlsCertForServerNameBodyParametersModel
): Promise<
	AxiosResponse<CreateOrUpdateTlsCertForServerNameResponseModel, any>
> => {
	const url = urlQueryBuilder(URL, {
		accessToken: wdData.accessToken,
	});

	const res =
		await axiosConf.post<CreateOrUpdateTlsCertForServerNameResponseModel>(
			url,
			bodyData
		);

	return res;
};
