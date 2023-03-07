import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a webhook
 *
 * https://docs.wildduck.email/api/#operation/deleteWebhook
 *
 * @param webhookId the webhook wildduck ID
 */
export const deleteWebhook = async (
	webhookId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${webhookId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
