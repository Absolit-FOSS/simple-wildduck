export interface LastUseModel {
	/**
	 * <date-time>
	 * Datestring of last use or false if password has not been used
	 */
	time: string;
	/**
	 * Event ID of the security log for the last authentication
	 */
	event: string;
}

export interface GetAppPasswordInformationResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the Application Password
	 */
	id: string;
	/**
	 * Description
	 */
	description: string;
	/**
	 * Items Enum: "imap" "pop3" "smtp" "*"
	 * Allowed scopes for the Application Password
	 */
	scopes: string[];
	/**
	 * Information about last use
	 */
	lastUse: LastUseModel;
	/**
	 * Datestring
	 */
	created: string;
}

export interface ListAppPasswordsQueryParametersModel {
	/**
	 * If not true then skips entries with a TTL set
	 */
	showAll: boolean;
}

interface ResultsModel {
	/**
	 * ID of the Application Password
	 */
	id: string;
	/**
	 * Description
	 */
	description: string;
	/**
	 * Items Enum: "imap" "pop3" "smtp" "*"
	 * Allowed scopes for the Application Password
	 */
	scopes: string[];
	/**
	 * Information about last use
	 */
	lastUse: LastUseModel;
	/**
	 * <date-time>
	 * Datestring
	 */
	created: string;
}

export interface ListAppPasswordsResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * Event listing
	 */
	results: ResultsModel[];
}

export interface CreateNewAppPasswordBodyParametersModel {
	/**
	 * Description
	 */
	description: string;
	/**
	 * Items Enum: "imap" "pop3" "smtp" "*"
	 * List of scopes this Password applies to. Special scope "*" indicates
	 * that this password can be used for any scope except "master"
	 */
	scopes: string[];
	/**
	 * If true then result contains a mobileconfig formatted file with account config
	 */
	generateMobileconfig?: boolean;
	/**
	 * E-mail address to be used as the account address in mobileconfig file.
	 * Must be one of the listed identity addresses of the user.
	 * Defaults to the main address of the user
	 */
	address?: string;
	/**
	 * Optional pregenerated password. Must be 16 characters, latin letters only
	 */
	password?: string;
	/**
	 * TTL in seconds for this password. Every time password is used, TTL is reset to this value
	 */
	ttl?: number;
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface CreateAppPasswordResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the Application Password
	 */
	id: string;
	/**
	 * Application Specific Password. Generated password is whitespace agnostic,
	 * so it could be displayed to the client as "abcd efgh ijkl mnop" instead of "abcdefghijklmnop"
	 */
	password: string;
	/**
	 * Base64 encoded mobileconfig "string" file. Generated profile file should be sent
	 * to the client with Content-Type value of application/x-apple-aspen-config
	 */
	mobileconfig: string;
}
