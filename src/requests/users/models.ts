import {
	AvailableEmailScopes,
	CursorResponseModel,
	DefaultMailboxModel,
	FromToModel,
	LimitUsageModel,
	LimitUsageTTLModel,
	PageQueryModel,
} from "../../models";

export interface GetUserResponseLimitUsageModel {
	quota: LimitUsageModel;
	recipients: LimitUsageTTLModel;
	filters: LimitUsageModel;
	forwards: LimitUsageTTLModel;
	received: LimitUsageTTLModel;
	imapUpload: LimitUsageTTLModel;
	imapDownload: LimitUsageTTLModel;
	pop3Download: LimitUsageTTLModel;
	imapMaxConnections: LimitUsageModel;
}

export interface GetUserResponseKeyInfoModel {
	name: string;
	address: string;
	fingerprint: string;
}

export interface UserModel {
	id: string;
	username: string;
	name: string;
	address: string;
	enabled2fa: string[];
	autoreply: boolean;
	encryptMessages: boolean;
	encryptForwarded: boolean;
	metaData?: any;
	internalData?: any;
	targets: string[];
	tags: string[];
	hasPasswordSet: boolean;
	activated: boolean;
	disabled: boolean;
	suspended: boolean;
	quota: LimitUsageModel;
}

export interface GetUserResponseModel extends Omit<UserModel, "quota"> {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Default retention time (in ms). false if not enabled
	 */
	retention: number | false;
	/**
	 * Public PGP key for the User that is used for encryption
	 */
	pubKey: string;
	/**
	 * Information about public key or false if key is not available
	 */
	keyInfo: GetUserResponseKeyInfoModel;
	/**
	 * Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam
	 */
	spamLevel: number;
	/**
	 * Account limits and usage
	 */
	limits: GetUserResponseLimitUsageModel;
	/**
	 * A list of additional email addresses this user can send mail from. Wildcard is allowed.
	 */
	fromWhitelist?: string[];
	/**
	 * Disabled scopes for this user
	 */
	disabledScopes: AvailableEmailScopes[];
}

export interface DeleteUserQueryParametersModel {
	/**
	 * Delete user entry from registry but keep all user data until
	 * provided date. User account is fully recoverable up to that date.
	 */
	deleteAfter?: string;
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface UpdateUserBodyParametersModel {
	/**
	 * Name of the User
	 */
	name?: string;
	/**
	 * If provided then validates against account password before applying any changes
	 */
	existingPassword?: string;
	/**
	 * New password for the account. Set to boolean false to disable
	 * password usage for the master scope, Application Specific
	 * Passwords would still be allowed
	 */
	password?: string;
	/**
	 * If true then password is already hashed, so store as is.
	 * Supported hashes: pbkdf2, bcrypt ($2a, $2y, $2b), md5 ($1),
	 * sha512 ($6), sha256 ($5), argon2 ($argon2d, $argon2i, $argon2id).
	 * Stored hashes are rehashed to pbkdf2 on first successful password
	 * check
	 */
	hashedPassword?: boolean;
	/**
	 * If false then validates provided passwords against Have I Been
	 * Pwned API. Experimental, so validation is disabled by default but
	 * will be enabled automatically in some future version of WildDuck
	 */
	allowUnsafe?: boolean;
	/**
	 * A list of tags associated with this user
	 */
	tags?: string[];
	/**
	 * Default retention time (in ms). Set to 0 to disable
	 */
	retention?: number;
	/**
	 * If true then all messages sent through MSA are also uploaded to
	 * the Sent Mail folder. Might cause duplicates with some email
	 * clients, so disabled by default.
	 */
	uploadSentMessages?: boolean;
	/**
	 * If true then received messages are encrypted
	 */
	encryptMessages?: boolean;
	/**
	 * If true then forwarded messages are encrypted
	 */
	encryptForwarded?: boolean;
	/**
	 * Public PGP key for the User that is used for encryption.
	 * Use empty string to remove the key
	 */
	pubKey?: string;
	/**
	 * Optional metadata, must be an object or JSON formatted string
	 */
	metaData?: any;
	/**
	 * Optional internal metadata, must be an object or JSON formatted
	 * string of an object. Not available for user-role tokens
	 */
	internalData?: any;
	/**
	 * Language code for the User
	 */
	language?: string;
	/**
	 * An array of forwarding targets. The value could either be an
	 * email address or a relay url to next MX server
	 * ("smtp://mx2.zone.eu:25") or an URL where mail contents are
	 * POSTed to
	 */
	targets?: string[];
	/**
	 * Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam
	 */
	spamLevel?: number;
	/**
	 * Allowed quota of the user in bytes
	 */
	quota?: number;
	/**
	 * How many messages per 24 hour can be sent
	 */
	recipients?: number;
	/**
	 * How many messages per 24 hour can be forwarded
	 */
	forwards?: number;
	/**
	 * How many filters are allowed for this account
	 */
	filters?: number;
	/**
	 * How many bytes can be uploaded via IMAP during 24 hour
	 */
	imapMaxUpload?: number;
	/**
	 * How many bytes can be downloaded via IMAP during 24 hour
	 */
	imapMaxDownload?: number;
	/**
	 * How many bytes can be downloaded via POP3 during 24 hour
	 */
	pop3MaxDownload?: number;
	/**
	 * How many latest messages to list in POP3 session
	 */
	pop3MaxMessages?: number;
	/**
	 * How many parallel IMAP connections are allowed
	 */
	imapMaxConnections?: number;
	/**
	 * How many messages can be received from MX during 60 seconds
	 */
	receivedMax?: number;
	/**
	 * If true, then disables 2FA for this user
	 */
	disable2fa?: boolean;
	/**
	 * List of scopes that are disabled for this user ("imap", "pop3", "smtp")
	 */
	disabledScopes?: AvailableEmailScopes[];
	/**
	 * If true then disables user account (can not login, can
	 * not receive messages)
	 */
	disabled?: boolean;
	/**
	 * A list of additional email addresses this user can send
	 * mail from. Wildcard is allowed.
	 */
	fromWhitelist?: string[];
	/**
	 * If true then disables authentication
	 */
	suspended?: boolean;
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface LogoutUserBodyParametersModel {
	/**
	 * Message to be shown to connected IMAP client
	 */
	reason?: string;
}

export interface ResetUserPasswordBodyParametersModel {
	/**
	 * Allow using the generated password not earlier than provided time
	 */
	validAfter?: string;
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface ResetUserPasswordResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Temporary password
	 */
	password: string;
}

export interface GetUserIdByUsernameResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Users unique ID (24 byte hex)
	 */
	id: string;
}

export interface CreateUserBodyParameterModel {
	/**
	 * Username of the User. Dots are allowed but informational only
	 * ("user.name" is the same as "username").
	 */
	username: string;
	/**
	 * Name of the User
	 */
	name?: string;
	/**
	 * Password for the account. Set to boolean false to disable
	 * password usage for the master scope, Application Specific
	 * Passwords would still be allowed
	 */
	password: string | false;
	/**
	 * If true then password is already hashed, so store as is.
	 * Supported hashes: pbkdf2, bcrypt ($2a, $2y, $2b), md5 ($1),
	 * sha512 ($6), sha256 ($5), argon2 ($argon2d, $argon2i, $argon2id).
	 * Stored hashes are rehashed to pbkdf2 on first successful password
	 * check.
	 */
	hashedPassword?: boolean;
	/**
	 * If false then validates provided passwords against Have I Been
	 * Pwned API. Experimental, so validation is disabled by default but
	 * will be enabled automatically in some future version of WildDuck.
	 */
	allowUnsafe?: boolean;
	/**
	 * Default email address for the User (autogenerated if not set)
	 */
	address?: string;
	/**
	 * If true then do not autogenerate missing email address for the
	 * User. Only needed if you want to create a user account that does
	 * not have any email address associated
	 */
	emptyAddress?: boolean;
	/**
	 * If true then requires the user to change password, useful if
	 * password for the account was autogenerated
	 */
	requirePasswordChange?: boolean;
	/**
	 * A list of tags associated with this user
	 */
	tags?: string[];
	/**
	 * If true then autogenerated address gets the same tags as the user
	 */
	addTagsToAddress?: boolean;
	/**
	 * Default retention time (in ms). Set to 0 to disable
	 */
	retention?: number;
	/**
	 * If true then all messages sent through MSA are also uploaded to
	 * the Sent Mail folder. Might cause duplicates with some email
	 * clients, so disabled by default.
	 */
	uploadSentMessages?: boolean;
	/**
	 * If true then received messages are encrypted
	 */
	encryptMessages?: boolean;
	/**
	 * If true then forwarded messages are encrypted
	 */
	encryptForwarded?: boolean;
	/**
	 * Public PGP key for the User that is used for encryption.
	 * Use empty string to remove the key
	 */
	pubKey?: string;
	/**
	 * Optional metadata, must be an object or JSON formatted string
	 */
	metaData?: any;
	/**
	 * Optional metadata for internal use, must be an object or JSON
	 * formatted string of an object. Not available for user-role tokens
	 */
	internalData?: any;
	/**
	 * Language code for the User
	 */
	language?: string;
	/**
	 * An array of forwarding targets. The value could either be an
	 * email address or a relay url to next MX server ("smtp://mx2.zone
	 * eu:25") or an URL where mail contents are POSTed to
	 */
	targets?: string[];
	/**
	 * Relative scale for detecting spam. 0 means that everything is
	 * spam, 100 means that nothing is spam
	 */
	spamLevel?: number;
	/**
	 * Allowed quota of the user in bytes
	 */
	quota?: number;
	/**
	 * How many messages per 24 hour can be sent
	 */
	recipients?: number;
	/**
	 * How many messages per 24 hour can be forwarded
	 */
	forwards?: number;
	/**
	 * How many filters are allowed for this account
	 */
	filters?: number;
	/**
	 * How many bytes can be uploaded via IMAP during 24 hour
	 */
	imapMaxUpload?: number;
	/**
	 * How many bytes can be downloaded via IMAP during 24 hour
	 */
	imapMaxDownload?: number;
	/**
	 * How many bytes can be downloaded via POP3 during 24 hour
	 */
	pop3MaxDownload?: number;
	/**
	 * How many latest messages to list in POP3 session
	 */
	pop3MaxMessages?: number;
	/**
	 * How many parallel IMAP connections are alowed
	 */
	imapMaxConnections?: number;
	/**
	 * How many messages can be received from MX during 60 seconds
	 */
	receivedMax?: number;
	/**
	 * Optional names for special mailboxes
	 */
	mailboxes?: DefaultMailboxModel;
	/**
	 * List of scopes that are disabled for this user ("imap", "pop3", "smtp")
	 */
	disabledScopes?: AvailableEmailScopes[];
	/**
	 * A list of additional email addresses this user can send mail from. Wildcard is allowed.
	 */
	fromWhitelist?: string[];
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface GetDeletedUserInfoResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the deleted User
	 */
	user: string;
	/**
	 * Username of the User
	 */
	username: string;
	/**
	 * Calculated quota usage for the user
	 */
	storageUsed: number;
	/**
	 * List of tags associated with the User
	 */
	tags: string[];
	/**
	 * Datestring of the time the user was deleted
	 */
	deleted: string;
	/**
	 * List of email addresses that can be restored
	 */
	recoverableAddresses: string[];
}

export interface GetUsersQueryParametersModel {
	/**
	 * Partial match of username or default email address
	 */
	query?: string;
	/**
	 * Partial match of a forward email address or URL
	 */
	forward?: string;
	/**
	 * Comma separated list of tags. The User must have at least one to be set
	 */
	tags?: string;
	/**
	 * Comma separated list of tags. The User must have all listed tags to be set
	 */
	requiredTags?: string;
	/**
	 * If true, then includes metaData in the response
	 */
	metaData?: boolean;
	/**
	 * If true, then includes internalData in the response. Not shown for user-role tokens.
	 */
	internalData?: boolean;
	/**
	 * How many records to return
	 *
	 * @max 250
	 */
	limit?: number;
	/**
	 * Current page number. Informational only, page numbers start from 1
	 */
	page?: number;
	/**
	 * Cursor value for next page, retrieved from nextCursor response value
	 */
	next?: string;
	/**
	 * Cursor value for previous page, retrieved from previousCursor response value
	 */
	previous?: string;
}

export interface GetUsersResponseModel extends CursorResponseModel {
	/**
	 * User listing
	 */
	results: UserModel[];
}

export interface RecalculateUserQuotaResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Calculated quota usage for the user
	 */
	storageUsed: number;
}

export interface SearchUserMessagesQueryParametersModel extends PageQueryModel {
	/**
	 * ID of the Mailbox
	 */
	mailbox?: string;
	/**
	 * Thread ID
	 */
	thread?: string;
	/**
	 * Search string, uses MongoDB fulltext index. Covers data from message body and also common headers like from, to, subject etc.
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
	 * Search string, uses MongoDB fulltext index. Covers data from message body and also common headers like from, to, subject etc.
	 */
	"or.query"?: string;
	/**
	 * Partial match for the From: header line
	 */
	"or.from"?: string;
	/**
	 * Partial match for the To: and Cc: header lines
	 */
	"or.to"?: string;
	/**
	 * Partial match for the Subject: header line
	 */
	"or.subject"?: string;
	/**
	 * Minimal message size in bytes
	 */
	minSize?: number;
	/**
	 * Maximal message size in bytes
	 */
	maxSize?: number;
	/**
	 * If true, then includes threadMessageCount in the response. Counters come with some overhead
	 */
	threadCounters?: boolean;
	/**
	 * Ordering of the records by insert date. If no order is supplied, results are sorted by heir mongoDB ObjectId.
	 */
	order?: "asc" | "desc";
}

export interface SearchUserMessagesResponseModel extends CursorResponseModel {
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
		 * Amount of messages in the Thread. Included if threadCounters query argument was true
		 */
		threadMessageCount: number;
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
		 * Recipients in Bcc: field. Usually only available for drafts
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
		idate: string;
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
		 * Does this message have a \Deleted flag (should not have as messages are automatically deleted once this flag is set)
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
		 * Parsed Content-Type header. Usually needed to identify encrypted messages and such
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
		metaData: any;
	}[];
}
