import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete file from storage
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuserstoragefile
 *
 * @param userId Users unique ID
 * @param fileId ID of the File
 */
export const deleteStorageFile = async (
	userId: string,
	fileId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/${fileId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
