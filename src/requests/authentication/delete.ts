import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Invalidate authentication token
 *
 * This method invalidates currently used authentication token. If token is not provided then nothing happens
 *
 * https://docs.wildduck.email/api/#operation/deleteauthenticate
 */
export const invalidateAuthenticationToken = async (): Promise<
	AxiosResponse<DefaultResponseModel, any>
> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
