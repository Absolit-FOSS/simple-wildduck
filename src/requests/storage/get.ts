import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetStoredFilesQueryParametersModel,
	GetStoredFilesResponseModel,
} from "./models";

/**
 * This method returns stored file contents in binary form
 *
 * https://docs.wildduck.email/api/#operation/getFile
 *
 * @param userId the users wildduck ID
 * @param fileId the file wildduck ID
 */
export const downloadFile = async (
	userId: string,
	fileId: string
): Promise<AxiosResponse<any, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/${fileId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<any>(url);

	return res;
};

/**
 * Get a list of all the stored files
 *
 * https://docs.wildduck.email/api/#operation/getFiles
 *
 * @param userId the users wildduck ID
 * @param queryData query parameters for additional options
 */
export const getStoredFiles = async (
	userId: string,
	queryData?: GetStoredFilesQueryParametersModel
): Promise<AxiosResponse<GetStoredFilesResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<GetStoredFilesResponseModel>(url);

	return res;
};
