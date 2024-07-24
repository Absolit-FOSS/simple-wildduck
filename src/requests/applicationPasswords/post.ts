import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateAppPasswordResponseModel,
	CreateNewAppPasswordBodyParametersModel,
} from "./models";

/**
 * Create new Application Password
 *
 * https://docs.wildduck.email/api/#operation/postusersuserasps
 *
 * @param userId ID of the User
 * @param bodyData body parameters to reset user password
 */
export const createNewAppPassword = async (
	userId: string,
	bodyData: CreateNewAppPasswordBodyParametersModel
): Promise<AxiosResponse<CreateAppPasswordResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreateAppPasswordResponseModel>(
		url,
		bodyData
	);

	return res;
};
