import {
	AttachmentModel,
	CursorResponseModel,
	FromToModel,
	HeaderModel,
	PageQueryModel,
	UserIdentifierModel,
} from "../../models";

export interface GetMessageInfoQueryParametersModel {
	/**
	 * If true then marks message as seen
	 */
	markAsSeen?: boolean;
}

export interface MessageInfoAttachmentModel {
	/**
	 * Attachment ID
	 */
	id: string;
	/**
	 * SHA-256 hash of the contents of the attachment
	 */
	hash?: string;
	/**
	 * Filename of the attachment
	 */
	filename: string;
	/**
	 * MIME type
	 */
	contentType: string;
	/**
	 * Attachment disposition
	 */
	disposition: string;
	/**
	 * Which transfer encoding was used (actual content when fetching
	 * attachments is not encoded)
	 */
	transferEncoding: string;
	/**
	 * Was this attachment found from a multipart/related node.
	 * This usually means that this is an embedded image
	 */
	related: boolean;
	/**
	 * Approximate size of the attachment in kilobytes
	 */
	sizeKb: number;
}

export interface OutboundQueryModel {
	/**
	 * Queue target ID
	 */
	seq: string;
	/**
	 * Target recipient
	 */
	recipient: string;
	/**
	 * Zone ID in ZoneMTA
	 */
	sendingZone?: string;
	/**
	 * ISO Date of the expected delivery time
	 */
	queued?: string;
}

export interface EnvelopeModel {
	/**
	 * Address from MAIL FROM
	 */
	from: string;
	/**
	 * Array of addresses from RCPT TO (should have just one normally)
	 */
	rcpt: {
		/**
		 * RCPT TO address as provided by SMTP client
		 */
		value: string;
		/**
		 * Normalized RCPT address
		 */
		formatted: string;
	};
}

export interface VerificationResultModel {
	/**
	 * TLS information. Value is false if TLS was not used
	 */
	tls: {
		/**
		 * Cipher name, eg "ECDHE-RSA-AES128-GCM-SHA256"
		 */
		name: any;
		/**
		 * TLS version, eg "TLSv1/SSLv3"
		 */
		version: any;
	};
	/**
	 * Domain name (either MFROM or HELO) of verified SPF or false
	 * if no SPF match was found
	 */
	spf: any;
	/**
	 * Domain name of verified DKIM signature or false if no valid
	 * signature was found
	 */
	dkim: any;
}

export interface BimiModel {
	/**
	 * If true, then this logo is from a VMC file
	 */
	certified?: boolean;
	/**
	 * URL of the resource the logo was retrieved from
	 */
	url?: string;
	/**
	 * Data URL for the SVG image
	 */
	image?: string;
}

export interface FileModel {
	/**
	 * File ID
	 */
	id: string;
	/**
	 * Filename of the attached file
	 */
	filename: string;
	/**
	 * MIME type
	 */
	contentType: string;
	/**
	 * File size
	 */
	size: number;
}

export interface GetMessageInfoResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the Message
	 */
	id: number;
	/**
	 * ID of the Mailbox
	 */
	mailbox: string;
	/**
	 * ID of the User
	 */
	user: string;
	/**
	 * SMTP envelope (if available)
	 */
	envelope: EnvelopeModel;
	/**
	 * ID of the Thread
	 */
	thread: string;
	from: FromToModel;
	to?: FromToModel;
	cc?: FromToModel;
	bcc?: FromToModel;
	/**
	 * Message subject
	 */
	subject: string;
	/**
	 * Message-ID header
	 */
	messageId: string;
	/**
	 * Date string from header
	 */
	date: string;
	/**
	 * Date string of receive time
	 */
	idate?: string;
	/**
	 * If set then this message is from a mailing list
	 */
	list?: {
		/**
		 * Value from List-ID header
		 */
		id: string;
		/**
		 * Value from List-Unsubscribe header
		 */
		unsubscribe: string;
	};
	/**
	 * Datestring, if set then indicates the time
	 * after this message is automatically deleted
	 */
	expires?: string;
	/**
	 * Does this message have a \Seen flag
	 */
	seen: boolean;
	/**
	 * Does this message have a \Deleted flag
	 */
	deleted: boolean;
	/**
	 * Does this message have a \Flagged flag
	 */
	flagged: boolean;
	/**
	 * Does this message have a \Draft flag
	 */
	draft: boolean;
	/**
	 * An array of HTML string. Every array
	 * element is from a separate mime node,
	 * usually you would just join these to a
	 * single string
	 */
	html?: string[];
	/**
	 * Plaintext content of the message
	 */
	text?: string;
	/**
	 * Attachments for the message
	 */
	attachments?: MessageInfoAttachmentModel[];
	/**
	 * Security verification info if message was received from MX.
	 * If this property is missing then do not automatically assume
	 * invalid TLS, SPF or DKIM.
	 */
	verificationResults?: VerificationResultModel;
	/**
	 * BIMI logo info. If logo validation failed in any way, then
	 * this property is not set
	 */
	bimi?: BimiModel;
	/**
	 * Parsed Content-Type header. Usually needed to identify
	 * encrypted messages and such
	 */
	contentType: {
		/**
		 * MIME type of the message, eg. "multipart/mixed"
		 */
		value: string;
		/**
		 * An object with Content-Type params as key-value pairs
		 */
		params: any;
	};
	/**
	 * Custom metadata object set for this message
	 */
	metaData: any;
	/**
	 * Referenced message info
	 */
	reference?: any;
	/**
	 * List of files added to this message as attachments. Applies to
	 * Drafts, normal messages do not have this property. Needed to
	 * prevent uploading the same attachment every time a draft is
	 * updated
	 */
	files?: FileModel;
	/**
	 * Outbound queue entries
	 */
	outbound?: {
		/**
		 * Queue ID
		 */
		queueId: string;
		/**
		 * Queued recipients
		 */
		entries: OutboundQueryModel[];
	}[];
}

export interface DeleteAllMessagesQueryParametersModel {
	/**
	 * Schedule deletion task
	 */
	async?: boolean;
}

export interface DeleteAllMessagesResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Indicates count of deleted messages
	 */
	deleted: number;
}

export interface GetMessagesInMailboxQueryParametersModel
	extends PageQueryModel {
	/**
	 * If true, then returns only unseen messages
	 */
	unseen?: boolean;
	/**
	 * If true, then includes metaData in the response
	 */
	metaData?: boolean;
	/**
	 * If true, then includes threadMessageCount in the response.
	 * Counters come with some overhead
	 */
	threadCounters?: boolean;
	/**
	 * Ordering of the records by insert date
	 */
	order?: "asc" | "desc";
}

export interface GetMessagesInMailboxResponseModel extends CursorResponseModel {
	results: {
		/**
		 * ID of the Message
		 */
		id: number;
		/**
		 * ID of the Mailbox
		 */
		mailbox: string;
		/**
		 * ID of the Thread
		 */
		thread: string;
		/**
		 * Amount of messages in the Thread. Included if threadCounters query
		 * argument was true
		 */
		threadMessageCount?: number;
		from: FromToModel;
		/**
		 * Recipients in To: field
		 */
		to: FromToModel[];
		/**
		 * Recipients in Cc: field
		 */
		cc: FromToModel[];
		/**
		 * Recipients in Bcc: field
		 */
		bcc: FromToModel[];
		/**
		 * Message subject
		 */
		subject: string;
		/**
		 * Date string from header
		 */
		date: string;
		/**
		 * Date string of receive time
		 */
		idate?: string;
		/**
		 * Message size in bytes
		 */
		size: number;
		/**
		 * First 128 bytes of the message
		 */
		intro: string;
		/**
		 * Does the message have attachments
		 */
		attachments: boolean;
		/**
		 * Is this message already seen or not
		 */
		seen: boolean;
		/**
		 * Does this message have a \Deleted flag (should not have as messages
		 * are automatically deleted once this flag is set)
		 */
		deleted: boolean;
		/**
		 * Does this message have a \Flagged flag
		 */
		flagged: boolean;
		/**
		 * Does this message have a \Answered flag
		 */
		answered: boolean;
		/**
		 * Does this message have a $Forwarded flag
		 */
		forwarded: boolean;
		/**
		 * Parsed Content-Type header. Usually needed to identify encrypted
		 * messages and such
		 */
		contentType: {
			/**
			 * MIME type of the message, eg. "multipart/mixed"
			 */
			value: string;
			/**
			 * An object with Content-Type params as key-value pairs
			 */
			params: any;
		};
		/**
		 * Custom metadata value. Included if metaData query argument was true
		 */
		metaData?: any;
	}[];
}

export interface UpdateMessagesBodyParameterModel {
	/**
	 * Message ID values. Either comma separated numbers (1,2,3) or colon
	 * separated range (3:15), or a range from UID to end (3:*)
	 */
	message?: string;
	/**
	 * ID of the target Mailbox if you want to move messages
	 */
	moveTo?: string;
	/**
	 * State of the \Seen flag
	 */
	seen?: boolean;
	/**
	 * State of the \Flagged flag
	 */
	flagged?: boolean;
	/**
	 * State of the \Draft flag
	 */
	draft?: boolean;
	/**
	 * Either expiration date or false to turn of auto-expiration
	 */
	expires?: string | false;
	/**
	 * Optional metadata, must be an object or JSON formatted string
	 */
	metaData?: any;
}

export interface UploadMessageRefModel {
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
	/**
	 * If true, then includes all attachments from the original message.
	 * If it is an array of attachment ID's includes attachments from the
	 * list
	 */
	attachments: string[];
}

interface SearchUpdateMessageOrModel {
	/**
	 * Search string, uses MongoDB fulltext index. Covers data from
	 * message body and also common headers like from, to, subject etc.
	 */
	query?: string;
	/**
	 * Partial match for the From: header line
	 */
	from?: string;
	/**
	 * Partial match for the To: and Cc: header lines
	 */
	to?: string;
	/**
	 * Partial match for the Subject: header line
	 */
	subject?: string;
}

interface SearchUpdateMessageActionModel {
	/**
	 * ID of the target Mailbox if you want to move messages
	 */
	moveTo?: string;
	/**
	 * State of the \Seen flag
	 */
	seen?: boolean;
	/**
	 * State of the \Flagged flag
	 */
	flagged?: boolean;
}

export interface SearchUpdateMessageBodyParameterModel {
	/**
	 * ID of the Mailbox
	 */
	mailbox?: string;
	/**
	 * Thread ID
	 */
	thread?: string;
	/**
	 * Search string, uses MongoDB fulltext index. Covers data from mesage body
	 * and also common headers like from, to, subject etc.
	 */
	query?: string;
	/**
	 * Datestring for the earliest message storing time
	 */
	datestart?: string;
	/**
	 * Datestring for the latest message storing time
	 */
	dateend?: string;
	/**
	 * Partial match for the From: header line
	 */
	from?: string;
	/**
	 * Partial match for the To: and Cc: header lines
	 */
	to?: string;
	/**
	 * Partial match for the Subject: header line
	 */
	subject?: string;
	/**
	 * If true, then matches only messages with attachments
	 */
	attachments?: boolean;
	/**
	 * If true, then matches only messages with \Flagged flags
	 */
	flagged?: boolean;
	/**
	 * If true, then matches only messages without \Seen flags
	 */
	unseen?: boolean;
	/**
	 * If true, then matches messages not in Junk or Trash
	 */
	searchable?: boolean;
	/**
	 * At least onOne of the included terms must match
	 */
	or?: SearchUpdateMessageOrModel;
	/**
	 * Minimal message size in bytes
	 */
	minSize?: number;
	/**
	 * Maximal message size in bytes
	 */
	maxSize?: number;
	/**
	 * Maximal message size in bytes
	 */
	action?: SearchUpdateMessageActionModel;
}

export interface SearchUpdateMessageResponseModel {
	/**
	 * Indicates if the action succeeded or not
	 */
	success: boolean;
	/**
	 * ID of the scheduled operation
	 */
	scheduled: string;
}

export interface UploadMessageBodyParameterModel extends UserIdentifierModel {
	/**
	 * Is the message unseen or not
	 */
	unseen?: boolean;
	/**
	 * Is the message a draft or not
	 */
	draft?: boolean;
	/**
	 * Is the message flagged or not
	 */
	flagged?: boolean;
	/**
	 * base64 encoded message source. Alternatively, you can provide
	 * this value as POST body by using message/rfc822 MIME type. If
	 * raw message is provided then it overrides any other mail
	 * configuration
	 */
	raw?: string;
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
	 * Message subject. If not then resolved from Reference message
	 */
	subject?: string;
	/**
	 * Plaintext message
	 */
	text?: string;
	/**
	 * HTML formatted message
	 */
	html?: string;
	/**
	 * Custom headers for the message. If reference message is set
	 * then In-Reply-To and References headers are set automatically
	 */
	headers?: HeaderModel[];
	/**
	 * Attachments as storage file IDs.
	 *
	 * **NB! When retrieving message info then an array of objects is
	 * returned. When uploading a message then an array of IDs is
	 * used.**
	 */
	files?: string[];
	/**
	 * Attachments for the message
	 */
	attachments?: AttachmentModel[];
	/**
	 * Optional metadata, must be an object or JSON formatted string
	 */
	metaData?: any;
	/**
	 * Optional referenced email. If uploaded message is a reply
	 * draft and relevant fields are not provided then these are
	 * resolved from the message to be replied to
	 */
	reference?: UploadMessageRefModel;
	/**
	 * Marks BIMI verification as passed for a domain. NB! BIMI
	 * record and logo files for the domain must be valid.
	 */
	bimi?: {
		/**
		 * Domain name for the BIMI record. It does not have to be
		 * the same as the From address.
		 */
		domain: string;
		/**
		 * Optional BIMI selector
		 */
		selector?: string;
	};
	/**
	 * If set, then deletes a previous message when storing the new
	 * one. Useful when uploading a new Draft message.
	 */
	replacePrevious?: {
		/**
		 * Mailbox ID. Defaults to the mailbox of the uploaded
		 * message.
		 */
		mailbox?: string;
		/**
		 * Message ID in Mailbox
		 */
		id: number;
	};
}

export interface UploadMessageResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Message information
	 */
	message: {
		/**
		 * Message ID in mailbox
		 */
		id: number;
		/**
		 * Mailbox ID the message was stored into
		 */
		mailbox: string;
		/**
		 * Size of the RFC822 formatted email
		 */
		size?: number;
	};
	/**
	 * Set if replacing a previous message was requested
	 */
	previousDeleted?: boolean;
}

export interface ForwardStoredMessageBodyParameterModel {
	/**
	 * Number of original forwarding target
	 */
	target?: number;
	/**
	 * An array of additional forward targets
	 */
	addresses?: string[];
}

export interface ForwardStoredMessageResponseModel {
	success: boolean;
	queueId: string;
	forwarded: {
		seq: string;
		type: string;
		value: string;
	}[];
}

export interface SubmitDraftMessageBodyParameterModel {
	/**
	 * If true then deletes attachment files listed in metaData.files array
	 */
	deleteFiles?: boolean;
	/**
	 * Datestring for delivery if message should be sent some later time
	 */
	sendTime?: string;
}

export interface SubmitDraftMessageResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Message ID in outbound queue
	 */
	queueId: string;
	/**
	 * Message information
	 */
	message?: {
		/**
		 * Message ID in mailbox
		 */
		id: number;
		/**
		 * Mailbox ID the message was stored into
		 */
		mailbox: string;
		/**
		 * Size of the RFC822 formatted email
		 */
		size?: number;
	};
}
