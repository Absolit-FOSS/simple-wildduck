import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultMailboxModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetDeletedUserInfoResponseModel,
	GetUserIdByUsernameResponseModel,
	GetUserResponseModel,
	GetUsersQueryParametersModel,
	GetUsersResponseModel,
} from "./models";

/**
 * Request ASP information
 *
 * https://docs.wildduck.email/api/#operation/getASP
 *
 * @param userId the users wildduck ID
 * @param aspId ID of the Application Password
 */
export const getAppPasswordInformation = async (
	userId: string,
	aspId: string
): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${aspId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List Application Passwords
 *
 * https://docs.wildduck.email/api/#operation/getASPs
 *
 * @param userId ID of the User
 * @param showAll If not true then skips entries with a TTL set
 */
export const getUsers = async (
	userId: GetUsersQueryParametersModel,
	showAll: boolean
): Promise<DefaultMailboxModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
