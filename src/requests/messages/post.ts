import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { getMessageInfo } from "./get";
import {
	ForwardStoredMessageBodyParameterModel,
	ForwardStoredMessageResponseModel,
	SearchUpdateMessageBodyParameterModel,
	SearchUpdateMessageResponseModel,
	SubmitDraftMessageBodyParameterModel,
	SubmitDraftMessageResponseModel,
	UploadMessageBodyParameterModel,
	UploadMessageReplyBodyParameterModel,
	UploadMessageResponseModel,
} from "./models";

/**
 * This method allows to upload either an RFC822 formatted
 * message or a message structure to a mailbox. Raw
 * message is stored unmodified, no headers are added or
 * removed. If you want to generate the uploaded message
 * from structured data fields, then do not use the raw
 * property.
 *
 * https://docs.wildduck.email/api/#operation/postusersusermailboxesmailboxmessages
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param bodyData body parameters to update
 */
export const uploadMessage = async (
	userId: string,
	mailboxId: string,
	bodyData: UploadMessageBodyParameterModel
): Promise<AxiosResponse<UploadMessageResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace("{mailboxId}", mailboxId)}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.post<UploadMessageResponseModel>(url, bodyData);

	return res;
};

/**
 * This allows you to email a reply to a thread
 *
 * https://docs.wildduck.email/api/#operation/postusersusermailboxesmailboxmessages
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param replyMessageId ID of the message you are replying to in a thread
 * @param bodyData body parameters to update
 */
export const uploadMessageReply = async (
	userId: string,
	mailboxId: string,
	replyMessageId: number,
	bodyData: UploadMessageReplyBodyParameterModel
): Promise<AxiosResponse<UploadMessageResponseModel, any>> => {
	const messageResponse = await getMessageInfo(
		userId,
		mailboxId,
		replyMessageId,
		{}
	);
	const inReplyTo = messageResponse.data.messageId;
	// todo? add all prior emails to references?
	const references = messageResponse.data.references;

	// const headers = [
	// 	["Content-Type", "application/json"],
	// 	["Authorization", `Bearer ${wdData.accessToken}`],
	// 	// Authorization: `Bearer ${process.env.WILDDUCK_API_TOKEN}`,
	// ];

	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace("{mailboxId}", mailboxId)}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.post<UploadMessageResponseModel>(
		url,
		{
			...bodyData,
			subject: `${bodyData.subject}`,
			headers: [
				{
					key: "In-Reply-To",
					value: String(inReplyTo),
				},
				{
					key: "References",
					value: references?.join(" "),
				},
			],
		},
		{
			headers: {
				Authorization: `Bearer ${wdData.accessToken}`,
				"Content-Type": "application/json",
			},
		}
	);

	return res;
};

/**
 * This method allows either to re-forward a message to an original
 * forward target or forward it to some other address. This is useful
 * if a user had forwarding turned on but the message was not
 * delivered so you can try again. Forwarding does not modify the
 * original message.
 *
 * https://docs.wildduck.email/api/#operation/postusersusermailboxesmailboxmessagesmessageforward
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId the message wildduck ID
 * @param bodyData body parameters to update
 */
export const forwardStoredMessage = async (
	userId: string,
	mailboxId: string,
	messageId: number,
	bodyData: ForwardStoredMessageBodyParameterModel
): Promise<AxiosResponse<ForwardStoredMessageResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}/forward`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.post<ForwardStoredMessageResponseModel>(
		url,
		bodyData
	);

	return res;
};

/**
 * This method allows applying an action to all matching messages.
 * This is an async method so that it will return immediately.
 * Actual modifications are run in the background.
 *
 * https://docs.wildduck.email/api/#operation/searchApply
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters to update
 */
export const searchUpdateMessage = async (
	userId: string,
	bodyData: SearchUpdateMessageBodyParameterModel
): Promise<AxiosResponse<SearchUpdateMessageResponseModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/search`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<SearchUpdateMessageResponseModel>(
		url,
		bodyData
	);

	return res;
};

/**
 * This method allows to submit a draft message for delivery.
 * Draft is moved to Sent mail folder.
 *
 * https://docs.wildduck.email/api/#operation/postusersusermailboxesmailboxmessagesmessagesubmit
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId the message wildduck ID
 * @param bodyData body parameters to update
 */
export const submitDraftMessage = async (
	userId: string,
	mailboxId: string,
	messageId: number,
	bodyData: SubmitDraftMessageBodyParameterModel
): Promise<AxiosResponse<SubmitDraftMessageResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}/submit`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.post<SubmitDraftMessageResponseModel>(
		url,
		bodyData
	);

	return res;
};
