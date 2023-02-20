import { urlQueryBuilder } from "@netsu/js-utils";
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
 * https://docs.wildduck.email/api/#operation/createExport
 *
 * @param bodyData body parameters to export user data
 *
 * @returns a binary
 */
export const exportUserData = async (
	bodyData: ExportUserDataBodyParameterModel
): Promise<any> => {
	const url = urlQueryBuilder(`${URL}/export`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

/**
 * Import data from an export dump. If a database entry
 * already exists, it is not modified. A special
 * "export"-role access token is required for exporting
 * and importing.
 *
 * https://docs.wildduck.email/api/#operation/createImport
 *
 * @param bodyData body parameters (binary) containing data to import
 */
export const importUserData = async (
	bodyData: any
): Promise<ImportUserDataResponseModel> => {
	const url = urlQueryBuilder(`${URL}/import`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
