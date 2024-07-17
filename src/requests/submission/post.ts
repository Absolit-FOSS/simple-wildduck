import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	SubmitMessageForDeliveryBodyParameterModel,
	SubmitMessageForDeliveryResponseModel,
} from "./models";

/**
 * Submit a message for delivery
 *
 * https://docs.wildduck.email/api/#operation/send
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters to submit
 */
export const submitMessageForDelivery = async (
	userId: string,
	bodyData: SubmitMessageForDeliveryBodyParameterModel
): Promise<AxiosResponse<SubmitMessageForDeliveryResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<SubmitMessageForDeliveryResponseModel>(
		url,
		bodyData
	);

	return res;
};
