import { FromToModel } from "../../models";

export interface GetMessageInfoQueryParametersModel {
	/**
	 * If true then marks message as seen
	 */
	markAsSeen?: boolean;
}

export interface AttachmentModel {
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
	attachments?: AttachmentModel[];
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
