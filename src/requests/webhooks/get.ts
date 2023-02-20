import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetRegisteredWebhooksQueryParametersModel,
	GetRegisteredWebhooksResponseModel,
} from "./models";

/**
 * Get registered webhooks
 *
 * https://docs.wildduck.email/api/#operation/getWebhooks
 *
 * @param queryData query parameters for additional options
 */
export const getRegisteredWebhooks = async (
	queryData: GetRegisteredWebhooksQueryParametersModel
): Promise<GetRegisteredWebhooksResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
