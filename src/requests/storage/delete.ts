import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete file from storage
 *
 * https://docs.wildduck.email/api/#operation/deleteFile
 *
 * @param userId Users unique ID
 * @param fileId ID of the File
 */
export const deleteStorageFile = async (
	userId: string,
	fileId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/${fileId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
