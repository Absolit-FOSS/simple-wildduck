import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UploadFileToStorageBodyParameterModel } from "./models";

/**
 * This method allows to upload an attachment to be linked from a draft
 *
 * https://docs.wildduck.email/api/#operation/postusersuserstorage
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters to create a user
 */
export const uploadFileToStorage = async (
	userId: string,
	bodyData: UploadFileToStorageBodyParameterModel
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreationResponseModel>(url, bodyData);

	return res;
};
