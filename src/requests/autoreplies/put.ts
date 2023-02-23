import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateAutoreplyInformationModel } from "./models";
import { UpdateUserBodyParametersModel } from "../users";

/**
 * Update Autoreply information
 *
 * http://docs.wildduck.email/api/#operation/updateUser
 *
 * @param userId the users wildduck ID
 * @param bodyData data to update on the user
 */
export const updateAutoreplyInformation = async (
	userId: string,
	bodyData: UpdateUserBodyParametersModel
): Promise<UpdateAutoreplyInformationModel> => {
	const url = urlQueryBuilder(`/${URL}/users/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};
