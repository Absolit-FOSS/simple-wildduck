import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateMailboxBodyParameterModel,
	CreateMailboxResponseModel,
} from "./models";

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
): Promise<CreateMailboxResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
