import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetDeletedUserInfoResponseModel,
	GetUserIdByUsernameResponseModel,
	GetUserResponseModel,
	GetUsersQueryParametersModel,
	GetUsersResponseModel,
	SearchUserMessagesQueryParametersModel,
	SearchUserMessagesResponseModel,
} from "./models";

/**
 * Get a single user
 *
 * http://docs.wildduck.email/api/#operation/getUser
 *
 * @param id the users wildduck ID
 */
export const getUser = async (
	id: string
): Promise<AxiosResponse<GetUserResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetUserResponseModel>(url);

	return res;
};

/**
 * Get all registered users
 *
 * http://docs.wildduck.email/api/#operation/getUsers
 *
 * @param queryData query parameters for additional options
 */
export const getUsers = async (
	queryData?: GetUsersQueryParametersModel
): Promise<AxiosResponse<GetUsersResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<GetUsersResponseModel>(url);

	return res;
};

/**
 * This api call returns an EventSource response. Listen on this stream
 * to get notifications about changes in messages and mailboxes.
 * Returned events are JSON encoded strings
 *
 * https://docs.wildduck.email/api/#operation/getusersuserupdates
 *
 * @param id the users wildduck ID
 */
export const getChangeStream = async (
	id: string
): Promise<AxiosResponse<GetUserResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}/updates`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetUserResponseModel>(url);

	return res;
};

/**
 * Get a users ID via their username
 *
 * https://docs.wildduck.email/api/#operation/getusersresolveusername
 *
 * @param username the users wildduck username
 */
export const getUserIdByUsername = async (
	username: string
): Promise<AxiosResponse<GetUserIdByUsernameResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/resolve/${username}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetUserIdByUsernameResponseModel>(url);

	return res;
};

/**
 * Get the recovery info for a deleted user
 *
 * https://docs.wildduck.email/api/#operation/getusersuserrestore
 *
 * @param id the users wildduck ID
 * @param queryData query parameters for additional options
 */
export const getDeletedUserInfo = async (
	id: string,
	queryData?: UserIdentifierModel
): Promise<AxiosResponse<GetDeletedUserInfoResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}/restore`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<GetDeletedUserInfoResponseModel>(url);

	return res;
};

/**
 * This method allows searching for matching messages.
 *
 * https://docs.wildduck.email/api/#operation/searchMessages
 *
 * @param userId the users wildduck ID
 * @param queryData query parameters for additional options
 */
export const searchUserMessages = async (
	userId: string,
	queryData?: SearchUserMessagesQueryParametersModel
): Promise<AxiosResponse<SearchUserMessagesResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${userId}/search`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<SearchUserMessagesResponseModel>(url);

	return res;
};
