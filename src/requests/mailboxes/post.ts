import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateMailboxBodyParameterModel } from "./models";

/**
 * Create a new mailbox
 *
 * https://docs.wildduck.email/api/#operation/createMailbox
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters to create a user
 */
export const createMailbox = async (
	userId: string,
	bodyData: CreateMailboxBodyParameterModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
