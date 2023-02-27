import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { InvalidateAuthenticationTokenModel } from "./models";

/**
 * Invalidate authentication token
 * This method invalidates currently used authentication token. If token is not provided then nothing happens
 * 
 * https://docs.wildduck.email/api/#operation/invalidateAccessToken
 * 
 * no parameters
 */
export const invalidateAuthenticationToken = async (): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
