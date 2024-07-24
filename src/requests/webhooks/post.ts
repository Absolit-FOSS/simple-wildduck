import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateWebhookBodyParametersModel } from "./models";

/**
 * Create a new webhook
 *
 * https://docs.wildduck.email/api/#operation/postwebhooks
 *
 * @param bodyData body parameters to create a webhook
 */
export const createWebhook = async (
	bodyData: CreateWebhookBodyParametersModel
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreationResponseModel>(url, bodyData);

	return res;
};
