export interface DeleteAppPasswordModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface CreateAppPasswordModel {
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
   * so it could be displayed to the client as "abcd efgh ijkl mnop"
   * instead of "abcdefghijklmnop"
   */
  password: string;
  /**
   * Base64 encoded mobileconfig file. Generated profile file should be sent
   * to the client with Content-Type value of application/x-apple-aspen-config
   */
  mobileconfig: string;
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
  // password?: string;
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

export interface LastUseModel {
  /**
   * Datestring of last use or false if password has not been used
   * <date-time>
   */
  time: string;
  /**
   * Event ID of the security log for the last authentication
   * <date-time>
   */
  event: string;
}

export interface RequestAppPasswordInformationModel {
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

export interface ResultsModel {
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
   * <date-time>
   */
  created: string;
}

export interface ListApplicationPasswordsModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Event listing
   */
  results: ResultsModel[];
}
