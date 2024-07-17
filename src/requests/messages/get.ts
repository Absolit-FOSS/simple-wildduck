import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
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
 * https://docs.wildduck.email/api/#operation/raw
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId Message unique ID.
 * @param queryData query parameters for additional options
 */
export const getMessageInfo = async (
	userId: string,
	mailboxId: string,
	messageId: number,
	queryData?: GetMessageInfoQueryParametersModel
): Promise<AxiosResponse<GetMessageInfoResponseModel, any>> => {
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

	const res = await axiosConf.get<GetMessageInfoResponseModel>(url);

	return res;
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
	queryData?: GetMessagesInMailboxQueryParametersModel
): Promise<AxiosResponse<GetMessagesInMailboxResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace("{mailboxId}", mailboxId)}`,
		{
			accessToken: wdData.accessToken,
			...queryData,
		}
	);

	const res = await axiosConf.get<GetMessagesInMailboxResponseModel>(url);

	return res;
};

/**
 * Download a message attachment, return buffer string.
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
	messageId: number,
	attachmentId: string
): Promise<AxiosResponse<string, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}/attachments/${attachmentId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get<string>(url, { responseType: "arraybuffer" });
	const data = Buffer.from(res.data, "binary").toString("base64");

	return { ...res, data };
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
	messageId: number
): Promise<AxiosResponse<any, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}/message.eml`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get<any>(url);

	return res;
};
