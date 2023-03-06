import { CursorResponseModel, PageQueryModel } from "../../models";

export interface AuthenticateUserBodyParametersModel {
	/**
	 * Username or E-mail address
	 */
	username: string;
	/**
	 * Password
	 */
	password: string;
	/**
	 * Application identifier for security logs
	 */
	protocol?: string;
	/**
	 * Required scope. One of master, imap, smtp, pop3
	 */
	scope?: string;
	/**
	 * If true then generates a temporary access token that is valid for this user. Only available if scope is "master"
	 * When using user tokens then you can replace user ID in URLs with "me".
	 */
	token?: number;
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface AuthenticateUserResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of authenticated User
	 */
	id: string;
	/**
	 * Username of authenticated User
	 */
	username: string;
	/**
	 * The scope this authentication is valid for
	 */
	scope: string;
	/**
	 * List of enabled 2FA mechanisms
	 */
	require2fa: string[];
	/**
	 * Indicates if account hassword has been reset and should be replaced
	 */
	requirePasswordChange: boolean;
	/**
	 * If access token was requested then this is the value to use as access token
	 * when making API requests on behalf of logged in user.
	 */
	token?: string;
}

export interface PreAuthCheckBodyParametersModel {
	/**
	 * Username or E-mail address
	 */
	username: string;
	/**
	 * Required scope. One of master, imap, smtp, pop3
	 */
	scope?: string;
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface PreAuthCheckResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of authenticated User
	 */
	id: string;
	/**
	 * Username of authenticated User
	 */
	username: string;
	/**
	 * The scope this authentication is valid for
	 */
	scope: string;
	/**
	 * List of enabled 2FA mechanisms
	 */
	require2fa: string[];
}

export interface ListAuthenticationEventsQueryParametersModel
	extends PageQueryModel {
	/**
	 * Limit listing only to values with specific action value
	 */
	action?: string;
	/**
	 * Limit listing only to values with specific IP address
	 */
	filterIp?: string;
}

interface ResultsModel {
	/**
	 * ID of the Event
	 */
	id: string;
	/**
	 * Action identifier
	 */
	action: string;
	/**
	 * Did the action succeed
	 */
	result: string;
	/**
	 * Session identifier
	 */
	sess?: string;
	/**
	 * IP address of the Event
	 */
	ip?: string;
	/**
	 * <date-time>
	 * Datestring of the Event time
	 */
	created: string;
}

export interface ListAuthenticationEventsResponseModel
	extends CursorResponseModel {
	/**
	 * Event listing
	 */
	results: ResultsModel[];
}

export interface RequestEventInformationResponseModel extends ResultsModel {
	/**
	 * Indicates successful response
	 */
	success: string;
}
