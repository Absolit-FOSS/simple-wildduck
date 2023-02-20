import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	SubmitMessageForDeliveryBodyParameterModel,
	SubmitMessageForDeliveryResponseModel,
} from "./models";

/**
 * Submit a message for delivery
 *
 * https://docs.wildduck.email/api/#operation/submitMessage
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters to submit
 */
export const submitMessageForDelivery = async (
	userId: string,
	bodyData: SubmitMessageForDeliveryBodyParameterModel
): Promise<SubmitMessageForDeliveryResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
