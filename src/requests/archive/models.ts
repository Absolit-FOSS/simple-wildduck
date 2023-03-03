import { CursorResponseModel, PageQueryModel } from "../../models";

export interface ListArchivedMessageQueryParameterModel extends PageQueryModel {
	/**
	 * Enum: "asc" "desc"
	 * Ordering of the records by insert date
	 */
	order?: string;
}

export interface ContentTypeModel {
	/**
	 * MIME type of the message, eg. "multipart/mixed"
	 */
	value: string;
	/**
	 * An object with Content-Type params as key-value pairs
	 */
	params: any;
}

export interface FromToCcBccModel {
	/**
	 * Name of the sender/recipient
	 */
	name: string;
	/**
	 * Address of the sender/recipient
	 */
	address: string;
}

export interface ResultsModel {
	/**
	 * ID of the Message (24 byte hex)
	 */
	id: string;
	/**
	 * ID of the Mailbox
	 */
	mailbox: string;
	/**
	 * ID of the Thread
	 */
	thread: string;
	/**
	 * Recipients in From: field
	 */
	from: FromToCcBccModel;
	/**
	 * Recipients in To: field
	 */
	to: FromToCcBccModel[];
	/**
	 * Recipients in Cc: field
	 */
	cc: FromToCcBccModel[];
	/**
	 * Recipients in Bcc: field. Usually only available for drafts
	 */
	bcc: FromToCcBccModel[];
	/**
	 * Message subject
	 */
	subject: string;
	/**
	 * <date-time>
	 * Date string from header
	 */
	date: string;
	/**
	 * <date-time>
	 * Date string of receive time
	 */
	idate?: string;
	/**
	 * First 128 bytes of the message
	 */
	intro: string;
	/**
	 * Does the message have attachments
	 */
	attachments: boolean;
	/**
	 * Is this message alread seen or not
	 */
	seen: boolean;
	/**
	 * Does this message have a \Deleted flag (should not have as messages are automatically deleted once this flag is set)
	 */
	deleted: boolean;
	/**
	 * Does this message have a \Flagged flag
	 */
	flagged: boolean;
	/**
	 * Parsed Content-Type header. Usually needed to identify encrypted messages and such
	 */
	contentType: ContentTypeModel;
}

export interface ListArchivedMessageResponseModel extends CursorResponseModel {
	/**
	 * Message listing
	 */
	results: ResultsModel[];
}

export interface RestoreArchivedMessageBodyParametersModel {
	/**
	 * ID of the target Mailbox. If not set then original mailbox is used.
	 */
	mailbox: string;
}

export interface RestoreArchivedMessageResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Mailbox ID the message was moved to
	 */
	mailbox: string;
	/**
	 * New ID for the Message
	 */
	id: number;
}

export interface RestoreArchivedMessagesBodyParametersModel {
	/**
	 * Datestring
	 */
	start: string;
	/**
	 * Datestring
	 */
	end: string;
}
