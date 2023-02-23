export interface InvalidateAuthenticationTokenModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface AuthenticateUserModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of authenticated User
   */
  id: string;
  /**
   * Username of authenticated User (response schema)
   * Username or E-mail address (request body schema)
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
   * If access token was requested then this is the value to use as access
   * token when making API requests on behalf of logged in user
   */
  token?: string;
  /**
   * Password
   */
  password: string;
  /**
   * Application identifier for security logs
   */
  protocol?: string;
  /**
   * Session identifier for the logs
   */
  sess?: string;
  /**
   * IP address for the logs
   */
  ip?: string;
}

export interface PreAuthenticationCheckModel {
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
   *
   */
  sess?: string;
  /**
   * IP address for the logs
   */
  ip?: string;
}

export interface ResultsModel {
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
   * Datestring of the Event time
   * <date-time>
   */
  created: string;
}

export interface ListAuthenticationEventsModel {
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
  nextCursor: string;
  /**
   * Event listing
   */
  results: ResultsModel[];
}

export interface RequestEventInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
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
   * Datestring of the Event time <date-time>
   */
  created: string;
}
