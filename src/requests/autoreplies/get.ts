import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { GetAutoreplyResponseModel } from "./models";

/**
 * Request Autoreply information
 *
 * https://docs.wildduck.email/api/#operation/getAutoreply
 *
 * @param userId ID of the User
 */
export const requestAutoreplyInformation = async (
	userId: string
): Promise<GetAutoreplyResponseModel> => {
	const url = urlQueryBuilder(`${URL}/users/${userId}/autoreply`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};