import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	DeleteAllMessagesQueryParametersModel,
	DeleteAllMessagesResponseModel,
} from "./models";

/**
 * Delete a message
 *
 * https://docs.wildduck.email/api/#operation/deleteMessage
 *
 * @param userId Users unique ID
 * @param mailboxId Mailbox unique ID.
 * @param messageId Message unique ID.
 */
export const deleteMessage = async (
	userId: string,
	mailboxId: string,
	messageId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.delete(url);

	return res.data;
};

/**
 * Delete all messages from a mailbox
 *
 * https://docs.wildduck.email/api/#operation/deleteMessagesInMailbox
 *
 * @param userId Users unique ID
 * @param mailboxId Mailbox unique ID.
 * @param queryData query parameters for additional options
 */
export const deleteAllMessages = async (
	userId: string,
	mailboxId: string,
	queryData: DeleteAllMessagesQueryParametersModel
): Promise<DeleteAllMessagesResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace("{mailboxId}", mailboxId)}`,
		{
			accessToken: wdData.accessToken,
			...queryData,
		}
	);

	const res = await axiosConf.delete(url);

	return res.data;
};

/**
 * You can delete outbound emails that are still in queue. Queue ID
 * can be found from the outbound property of a stored email.
 *
 * https://docs.wildduck.email/api/#operation/deleteOutboundMessage
 *
 * @param userId Users unique ID
 * @param queueId Queue unique ID.
 */
export const deleteOutboundMessage = async (
	userId: string,
	queueId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`/users/${userId}/outbound/${queueId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
