import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateAppPasswordResponseModel,
	CreateNewAppPasswordBodyParametersModel,
} from "./models";

/**
 * Create new Application Password
 *
 * https://docs.wildduck.email/api/#operation/createASP
 *
 * @param userId ID of the User
 * @param bodyData body parameters to reset user password
 */
export const createNewAppPassword = async (
	userId: string,
	bodyData: CreateNewAppPasswordBodyParametersModel
): Promise<CreateAppPasswordResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res: CreateAppPasswordResponseModel = await axiosConf.post(
		url,
		bodyData
	);

	return res;
};
