import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UploadFileToStorageBodyParameterModel } from "./models";

/**
 * This method allows to upload an attachment to be linked from a draft
 *
 * https://docs.wildduck.email/api/#operation/uploadFile
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters to create a user
 */
export const uploadFileToStorage = async (
	userId: string,
	bodyData: UploadFileToStorageBodyParameterModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
