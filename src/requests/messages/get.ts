import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetMessageInfoQueryParametersModel,
	GetMessageInfoResponseModel,
	GetMessagesInMailboxQueryParametersModel,
	GetMessagesInMailboxResponseModel,
} from "./models";

/**
 * Get a message
 *
 * https://docs.wildduck.email/api/#operation/getMessage
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId Message unique ID.
 * @param queryData query parameters for additional options
 */
export const getMessageInfo = async (
	userId: string,
	mailboxId: string,
	messageId: string,
	queryData: GetMessageInfoQueryParametersModel
): Promise<GetMessageInfoResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}`,
		{
			accessToken: wdData.accessToken,
			...queryData,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Get all messages in a mailbox
 *
 * https://docs.wildduck.email/api/#operation/getMessages
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param queryData query parameters for additional options
 */
export const getMessagesInMailbox = async (
	userId: string,
	mailboxId: string,
	queryData: GetMessagesInMailboxQueryParametersModel
): Promise<GetMessagesInMailboxResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace("{mailboxId}", mailboxId)}`,
		{
			accessToken: wdData.accessToken,
			...queryData,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Download a message attachment
 *
 * https://docs.wildduck.email/api/#operation/getMessageAttachment
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId the message wildduck ID
 * @param attachmentId the attachment wildduck ID
 */
export const getMessageAttachment = async (
	userId: string,
	mailboxId: string,
	messageId: string,
	attachmentId: string
): Promise<any> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}/attachments/${attachmentId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * This method returns the full RFC822 formatted source of the stored
 * message
 *
 * https://docs.wildduck.email/api/#operation/getMessageSource
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId the message wildduck ID
 */
export const getMessageSource = async (
	userId: string,
	mailboxId: string,
	messageId: string
): Promise<any> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}/message.eml`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};
