import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
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
 * Get a single user
 *
 * http://docs.wildduck.email/api/#operation/getUser
 *
 * @param id the users wildduck ID
 */
export const getUser = async (id: string): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Get all registered users
 *
 * http://docs.wildduck.email/api/#operation/getUsers
 *
 * @param queryData query parameters for additional options
 */
export const getUsers = async (
	queryData: GetUsersQueryParametersModel
): Promise<GetUsersResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * This api call returns an EventSource response. Listen on this stream
 * to get notifications about changes in messages and mailboxes.
 * Returned events are JSON encoded strings
 *
 * http://docs.wildduck.email/api/#operation/getUpdates
 *
 * @param id the users wildduck ID
 */
export const getChangeStream = async (
	id: string
): Promise<GetUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}/updates`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Get a users ID via their username
 *
 * http://docs.wildduck.email/api/#operation/resolveUser
 *
 * @param username the users wildduck username
 */
export const getUserIdByUsername = async (
	username: string
): Promise<GetUserIdByUsernameResponseModel> => {
	const url = urlQueryBuilder(`${URL}/resolve/${username}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Get the recovery info for a deleted user
 *
 * http://docs.wildduck.email/api/#operation/restoreUserInfo
 *
 * @param id the users wildduck ID
 * @param queryData query parameters for additional options
 */
export const getDeletedUserInfo = async (
	id: string,
	queryData: UserIdentifierModel
): Promise<GetDeletedUserInfoResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}/restore`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
