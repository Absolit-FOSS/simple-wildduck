import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetRegisteredWebhooksQueryParametersModel,
	GetRegisteredWebhooksResponseModel,
} from "./models";

/**
 * Get registered webhooks
 *
 * https://docs.wildduck.email/api/#operation/webhooks
 *
 * @param queryData query parameters for additional options
 */
export const getRegisteredWebhooks = async (
	queryData?: GetRegisteredWebhooksQueryParametersModel
): Promise<AxiosResponse<GetRegisteredWebhooksResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<GetRegisteredWebhooksResponseModel>(url);

	return res;
};
