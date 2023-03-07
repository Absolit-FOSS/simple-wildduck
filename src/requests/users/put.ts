import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	LogoutUserBodyParametersModel,
	UpdateUserBodyParametersModel,
} from "./models";

/**
 * Update a user
 *
 * http://docs.wildduck.email/api/#operation/updateUser
 *
 * @param id the users wildduck ID
 * @param bodyData data to update on the user
 */
export const updateUser = async (
	id: string,
	bodyData: UpdateUserBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};

/**
 * Log out all users sessions in IMAP
 *
 * http://docs.wildduck.email/api/#operation/logoutUser
 *
 * @param id the users wildduck ID
 * @param bodyData data to logout on the user
 */
export const logoutUser = async (
	id: string,
	bodyData: LogoutUserBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}/logout`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};
