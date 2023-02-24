import { AvailableSpecialFolders } from "../../models";

export interface MailboxModel {
	/**
	 * Mailbox ID
	 */
	id: string;
	/**
	 * Name for the mailbox (unicode string)
	 */
	name: string;
	/**
	 * Full path of the mailbox, folders are separated by
	 * slashes, ends with the mailbox name (unicode string)
	 */
	path: string;
	/**
	 * Either special use identifier or null.
	 * One of \Drafts, \Junk, \Sent or \Trash
	 */
	specialUse: AvailableSpecialFolders;
	/**
	 * Modification sequence number.
	 * Incremented on every change in the mailbox.
	 */
	modifyIndex: number;
	/**
	 * Mailbox subscription status.
	 * IMAP clients may unsubscribe from a folder.
	 */
	subscribed: boolean;
	/**
	 * Default retention policy for this mailbox (in ms).
	 * If set then messages added to this mailbox will be
	 * automatically deleted after retention time.
	 */
	retention?: number;
	/**
	 * Is the folder hidden or not
	 */
	hidden: boolean;
	/**
	 * How many messages are stored in this mailbox
	 */
	total: number;
	/**
	 * How many unseen messages are stored in this mailbox
	 */
	unseen: number;
}

export interface GetMailboxInfoResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Mailbox ID
	 */
	id: string;
	/**
	 * Name for the mailbox (unicode string)
	 */
	name: string;
	/**
	 * Full path of the mailbox, folders are separated by
	 * slashes, ends with the mailbox name (unicode string)
	 */
	path: string;
	/**
	 * Either special use identifier or null.
	 * One of \Drafts, \Junk, \Sent or \Trash
	 */
	specialUse: AvailableSpecialFolders;
	/**
	 * Modification sequence number.
	 * Incremented on every change in the mailbox.
	 */
	modifyIndex: number;
	/**
	 * Mailbox subscription status.
	 * IMAP clients may unsubscribe from a folder.
	 */
	subscribed: boolean;
	/**
	 * Is the folder hidden or not
	 */
	hidden: boolean;
	/**
	 * How many messages are stored in this mailbox
	 */
	total: number;
	/**
	 * How many unseen messages are stored in this mailbox
	 */
	unseen: number;
}

export interface UpdateMailboxInfoBodyParametersModel {
	/**
	 * Full path of the mailbox, use this to rename
	 * an existing Mailbox
	 */
	path?: string;
	/**
	 * Is the folder hidden or not. Hidden folders can
	 * not be opened in IMAP.
	 */
	hidden?: boolean;
	/**
	 * Retention policy for the Mailbox (in ms).
	 * Changing retention value only affects messages
	 * added to this folder after the change
	 */
	retention?: number;
	/**
	 * Change Mailbox subscription state
	 */
	subscribed?: boolean;
}

export interface GetUserMailboxesResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * List of user mailboxes
	 */
	results: MailboxModel[];
}

export interface GetUserMailboxesQueryParametersModel {
	/**
	 * Should the response include only folders with
	 * specialUse flag set.
	 */
	specialUse?: boolean;
	/**
	 * Hidden folders are not included in the listing by
	 * default.
	 */
	showHidden?: boolean;
	/**
	 * Should the response include counters
	 * (total + unseen). Counters come with some overhead.
	 */
	counters?: boolean;
	/**
	 * Should the response include mailbox size in bytes.
	 * Size numbers come with a lot of overhead as an
	 * aggregated query is ran.
	 */
	sizes?: boolean;
}

export interface CreateMailboxBodyParameterModel {
	/**
	 * Full path of the mailbox, folders are separated
	 * by slashes, ends with the mailbox name
	 * (unicode string)
	 */
	path: string;
	/**
	 * Is the folder hidden or not.
	 * Hidden folders can not be opened in IMAP.
	 */
	hidden?: boolean;
	/**
	 * Retention policy for the created Mailbox.
	 * Milliseconds after a message added to mailbox
	 * expires. Set to 0 to disable.
	 */
	retention?: number;
}
