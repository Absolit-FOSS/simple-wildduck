import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	ExportUserDataBodyParameterModel,
	ImportUserDataResponseModel,
} from "./models";

/**
 * Export data for matching users. Export dump does not
 * include emails, only account structure (user data,
 * password hashes, mailboxes, filters, etc.). A special
 * "export"-role access token is required for exporting
 * and importing.
 *
 * https://docs.wildduck.email/api/#operation/postdataexport
 *
 * @param bodyData body parameters to export user data
 *
 * @returns a binary
 */
export const exportUserData = async (
	bodyData: ExportUserDataBodyParameterModel
): Promise<AxiosResponse<any, any>> => {
	const url = urlQueryBuilder(`${URL}/export`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<any>(url, bodyData);

	return res;
};

/**
 * Import data from an export dump. If a database entry
 * already exists, it is not modified. A special
 * "export"-role access token is required for exporting
 * and importing.
 *
 * https://docs.wildduck.email/api/#operation/postdataimport
 *
 * @param bodyData body parameters (binary) containing data to import
 */
export const importUserData = async (
	bodyData: any
): Promise<AxiosResponse<ImportUserDataResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/import`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<ImportUserDataResponseModel>(url, bodyData);

	return res;
};
