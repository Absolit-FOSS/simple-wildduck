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
	success: boolean;
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
