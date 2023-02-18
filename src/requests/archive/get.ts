import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultMailboxModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetDeletedUserInfoResponseModel,
	GetUserIdByUsernameResponseModel,
	GetUserResponseModel,
	GetUsersQueryParametersModel,
	GetUsersResponseModel,
} from "./models";

/**
 * List archived messages
 *
 * https://docs.wildduck.email/api/#operation/getArchivedMessages
 *
 * @param userId ID of the User
 * @param limit How many records to return
 * @param page Current page number. Informational only, page numbers start from 1
 * @param order  Enum: "asc" "desc". Ordering of the records by insert date
 * @param next Cursor value for next page, retrieved from nextCursor response value
 * @param previous Cursor value for previous page, retrieved from previousCursor response value
 */
export const listArchivedMessage = async (
	userId: string,
	limit: number,
	page: number,
	order: string,
	next: string,
	previous: string
): Promise<DefaultMailboxModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};