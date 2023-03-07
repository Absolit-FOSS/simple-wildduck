import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateWebhookBodyParametersModel } from "./models";

/**
 * Create a new webhook
 *
 * https://docs.wildduck.email/api/#operation/createWebhook
 *
 * @param bodyData body parameters to create a webhook
 */
export const createWebhook = async (
	bodyData: CreateWebhookBodyParametersModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
