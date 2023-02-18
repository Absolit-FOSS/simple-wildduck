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
   *
   */
  id: "60b91b5cc419d97445f8e57d";
  /**
   * ID of the Application Password
   * "password" was in "Request Body schema" and "Response Schema"
   */
  // password: "aaaaaaaaaaaaaaaa";
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
  scopes: ["imap", "smtp"];
  /**
   * If true then result contains a mobileconfig formatted file with account config
   */
  generateMobileconfig?: boolean;
  /**
   * E-mail address to be used as the account address in mobileconfig file.
   * Must be one of the listed identity addresses of the user.
   * Defaults to the main address of the user
   */
  address?: "user@example.com";
  /**
   * Optional pregenerated password. Must be 16 characters, latin letters only
   */
  password?: "aaaaaaaaaaaaaaaa";
  /**
   * TTL in seconds for this password. Every time password is used, TTL is reset to this value
   */
  ttl?: 3600000;
  /**
   * Session identifier for the logs
   */
  sess?: string;
  /**
   * IP address for the logs
   */
  ip?: "127.0.0.1";
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
  scopes: ["imap"];
  /**
   * Information about last use
   */
  lastUse: {
    time: "2019-08-24T14:15:22Z";
    event: string;
  };
  /**
   * Datestring
   */
  created: "2019-08-24T14:15:22Z";
}

export interface ListApplicationPasswords {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Event listing
   */
  results: [
    {
      id: string;
      description: string;
      scopes: ["imap"];
      lastUse: {
        time: "2019-08-24T14:15:22Z";
        event: string;
      };
      created: "2019-08-24T14:15:22Z";
    }
  ];
}
