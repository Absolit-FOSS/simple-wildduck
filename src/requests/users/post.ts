import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import {
	CreationResponseModel,
	DefaultResponseModel,
	UserIdentifierModel,
} from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateUserBodyParameterModel,
	RecalculateUserQuotaResponseModel,
	ResetUserPasswordBodyParametersModel,
	ResetUserPasswordResponseModel,
} from "./models";

/**
 * Create a new user
 *
 * http://docs.wildduck.email/api/#operation/createUser
 *
 * @param bodyData body parameters to create a user
 */
export const createUser = async (
	bodyData: CreateUserBodyParameterModel
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreationResponseModel>(url, bodyData);

	return res;
};

/**
 * Use this endpoint to cancel a timed deletion task scheduled by
 * DELETE /user/{id}. If user data is not yet deleted then the account
 * is fully recovered, except any email addresses that might have been
 * already recycled
 *
 * http://docs.wildduck.email/api/#operation/restoreUser
 *
 * @param id the users wildduck ID
 * @param bodyData body parameters to cancel user deletion
 */
export const cancelUserDeletion = async (
	id: string,
	bodyData: UserIdentifierModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}/restore`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<DefaultResponseModel>(url, bodyData);

	return res;
};

/**
 * This method recalculates quota usage for a User. Normally not needed,
 * only use it if quota numbers are way off. This method is not
 * transactional, so if the user is currently receiving new messages
 * then the resulting value is not exact.
 *
 * http://docs.wildduck.email/api/#operation/recalculateQuota
 *
 * @param id the users wildduck ID
 */
export const recalculateUserQuota = async (
	id: string
): Promise<AxiosResponse<RecalculateUserQuotaResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}/quota/reset`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<RecalculateUserQuotaResponseModel>(url);

	return res;
};

/**
 * This method recalculates quota usage for all Users. Normally not
 * needed, only use it if quota numbers are way off. This method is not
 * transactional, so if the user is currently receiving new messages
 * then the resulting value is not exact.
 *
 * http://docs.wildduck.email/api/#operation/recalculateQuotaAllUsers
 *
 */
export const recalculateQuotaForAllUsers = async (): Promise<
	AxiosResponse<DefaultResponseModel, any>
> => {
	const url = urlQueryBuilder(`${URL}/quota/reset`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<DefaultResponseModel>(url);

	return res;
};

/**
 * This method generates a new temporary password for a User. Additionally it removes all two-factor authentication settings
 *
 * http://docs.wildduck.email/api/#operation/resetUserPassword
 *
 * @param id the users wildduck ID
 * @param bodyData body parameters to reset user password
 */
export const resetUserPassword = async (
	id: string,
	bodyData: ResetUserPasswordBodyParametersModel
): Promise<AxiosResponse<ResetUserPasswordResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}/password/reset`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<ResetUserPasswordResponseModel>(
		url,
		bodyData
	);

	return res;
};
