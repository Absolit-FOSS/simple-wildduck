import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateAppPasswordModel } from "./models";

/**
 * Create new Application Password
 *
 * https://docs.wildduck.email/api/#operation/createASP
 *
 * @param userId ID of the User
 */
export const createNewAppPassword = async (
	userId: string
): Promise<CreateAppPasswordModel> => {
	const url = urlQueryBuilder(`/user/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};
