import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	ListArchivedMessageQueryParameterModel,
	ListArchivedMessageResponseModel,
} from "./models";

/**
 * List archived messages
 *
 * Archive contains all recently deleted messages besides Drafts etc.
 *
 * https://docs.wildduck.email/api/#operation/getArchivedMessages
 *
 * @param userId ID of the User
 * @param queryData query parameters for additional options
 *
 */
export const listArchivedMessage = async (
	userId: string,
	queryData: ListArchivedMessageQueryParameterModel
): Promise<ListArchivedMessageResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/messages`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
