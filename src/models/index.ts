export interface LimitUsageModel {
	allowed: number;
	used: number;
}

export interface LimitUsageTTLModel extends LimitUsageModel {
	ttl: number;
}

export enum AvailableEmailScopes {
	IMAP = "imap",
	POP3 = "pop3",
	SMTP = "smtp",
}

export interface DefaultResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
}

export interface CreationResponseModel extends DefaultResponseModel {
	/**
	 * Id of the created item
	 */
	id: string;
}

export interface UpdateResponseModel extends CreationResponseModel {
	/**
	 * Number of items updated
	 */
	updated: number;
}

export interface UserIdentifierModel {
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface DefaultMailboxModel {
	sent: string;
	junk: string;
	drafts: string;
	trash: string;
}

export enum AvailableSpecialFolders {
	DRAFTS = "\\Drafts",
	JUNK = "\\Junk",
	SENT = "\\Sent",
	TRASH = "\\Trash",
}

export interface CursorResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * How many results were found
	 */
	total: number;
	/**
	 * Current page number. Derived from page query argument
	 */
	page: number;
	/**
	 * Either a cursor string or false if there are not any previous results
	 */
	previousCursor: string;
	/**
	 * Either a cursor string or false if there are not any next results
	 */
	nextCursor: string | false;
}

export interface PageQueryModel {
	/**
	 * How many records to return
	 *
	 * @max 250
	 */
	limit?: number;
	/**
	 * Current page number. **Informational only**, page
	 * numbers start from 1
	 */
	page?: number;
	/**
	 * Cursor value for next page, retrieved from
	 * nextCursor response value
	 */
	next?: string;
	/**
	 * Cursor value for previous page, retrieved from
	 * previousCursor response value
	 */
	previous?: string;
}

export interface FullQueryModel extends PageQueryModel {
	/**
	 * Partial match of a Domain Alias or Domain name
	 */
	query?: string;
}

export interface FromToModel {
	/**
	 * Name of the sender/receiver
	 */
	name?: string;
	/**
	 * Address of the sender/receiver
	 */
	address: string;
}

export interface HeaderModel {
	/**
	 * Header key ('X-Mailer')
	 */
	key: string;
	/**
	 * Header value ('My Awesome Mailing Service')
	 */
	value: string;
}

export interface AttachmentModel {
	/**
	 * Base64 encoded attachment content
	 */
	content: string;
	/**
	 * Attachment filename
	 */
	filename?: string;
	/**
	 * MIME type for the attachment file
	 */
	contentType?: string;
	/**
	 * Content-ID value if you want to reference to this
	 * attachment from HTML formatted message
	 */
	cid?: string;
}
