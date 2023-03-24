import {
	AttachmentModel,
	FromToModel,
	HeaderModel,
	UserIdentifierModel,
} from "../../models";

export interface ReferenceModel {
	/**
	 * Mailbox ID
	 */
	mailbox: string;
	/**
	 * Message ID in Mailbox
	 */
	id: number;
	/**
	 * Either reply, replyAll or forward
	 */
	action: string;
}

export interface SubmitMessageEnvelopeModel {
	from?: FromToModel;
	/**
	 * Recipients information
	 */
	to?: FromToModel[];
}

export interface SubmitMessageForDeliveryBodyParameterModel
	extends UserIdentifierModel {
	/**
	 * Optional referenced email. If submitted message is
	 * a reply and relevant fields are not provided then
	 * these are resolved from the message to be replied to
	 */
	reference?: ReferenceModel;
	/**
	 * Mailbox ID where to upload the message. If not set
	 * then message is uploaded to Sent Mail folder.
	 */
	mailbox?: string;
	/**
	 * If true then generated message is not added to the sending queue
	 */
	uploadOnly?: boolean;
	/**
	 * If true then treats this message as draft
	 * (should be used with uploadOnly=true)
	 */
	isDraft?: boolean;
	/**
	 * Datestring for delivery if message should be sent
	 * some later time
	 */
	sendTime?: string;
	/**
	 * SMTP envelope. If not provided then resolved either
	 * from message headers or from referenced message
	 */
	envelope?: SubmitMessageEnvelopeModel;
	/**
	 * Addresses for the From: header
	 */
	from?: FromToModel;
	/**
	 * Addresses for the To: header
	 */
	to?: FromToModel[];
	/**
	 * Addresses for the Cc: header
	 */
	cc?: FromToModel[];
	/**
	 * Addresses for the Bcc: header
	 */
	bcc?: FromToModel[];
	/**
	 * Message subject. If not then resolved from
	 * Reference message
	 */
	subject: string;
	/**
	 * Plaintext message
	 */
	text: string;
	/**
	 * HTML formatted message
	 */
	html: string;
	/**
	 * Custom headers for the message. If reference
	 * message is set then In-Reply-To and References
	 * headers are set automatically
	 */
	headers?: HeaderModel[];
	/**
	 * Attachments for the message
	 */
	attachments?: AttachmentModel[];
	/**
	 * Custom metainfo for the message
	 */
	meta?: any;
}

export interface SubmitMessageForDeliveryResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	message: {
		/**
		 * Mailbox ID the message was stored to
		 */
		mailbox: string;
		/**
		 * Message ID in Mailbox
		 */
		id: number;
		/**
		 * Queue ID in MTA
		 */
		queueId: string;
	};
}
