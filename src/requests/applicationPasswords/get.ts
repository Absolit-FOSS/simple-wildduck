import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetAppPasswordInformationResponseModel,
	ListAppPasswordsQueryParametersModel,
	ListAppPasswordsResponseModel,
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
): Promise<AxiosResponse<GetAppPasswordInformationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/${aspId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetAppPasswordInformationResponseModel>(url);

	return res;
};

/**
 * List Application Passwords
 *
 * https://docs.wildduck.email/api/#operation/getASPs
 *
 * @param userId ID of the User
 * @param queryData query parameters for additional options
 */
export const listApplicationPasswords = async (
	userId: string,
	queryData?: ListAppPasswordsQueryParametersModel
): Promise<AxiosResponse<ListAppPasswordsResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListAppPasswordsResponseModel>(url);

	return res;
};
