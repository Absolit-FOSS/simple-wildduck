import { LimitUsageModel } from '../../models/index';
export interface DeleteFilterModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface QueryModel {
  /**
   * Partial match for the From: header (case insensitive)
   */
  from?: string;
  /**
   * Partial match for the To:/Cc: headers (case insensitive)
   */
  to?: string;
  /**
   * Partial match for the Subject: header (case insensitive)
   */
  subject?: string;
  /**
   * Partial match for the List-ID: header (case insensitive)
   */
  listId?: string;
  /**
   * Fulltext search against message text
   */
  text?: string;
  /**
   * Does a message have to have an attachment or not
   */
  ha?: boolean;
  /**
   * Message size in bytes. If the value is a positive number then message needs to be larger,
   * if negative then message needs to be smaller than abs(size) value
   */
  size?: number;
}

export interface ActionModel {
  /**
   * If true then mark matching messages as Seen
   */
  seen?: boolean;
  /**
   * If true then mark matching messages as Flagged
   */
  flag?: boolean;
  /**
   * If true then do not store matching messages
   */
  delete?: boolean;
  /**
   * If true then store matching messags to Junk Mail folder
   */
  spam?: boolean;
  /**
   * Mailbox ID to store matching messages to
   */
  mailbox?: string;
  /**
   * An array of forwarding targets. The value could either be an email address
   * relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to
   */
  targets?: string[];
}

export interface CreateNewFilterModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the created Filter
   */
  id: string;
  /**
   * Name of the Filter
   */
  name?: string;
  /**
   * Rules that a message must match
   */
  query: QueryModel;
  /**
   * Action to take with a matching message
   */
  action: ActionModel;
  /**
   * If true then this filter is ignored
   */
  disabled?: boolean;
}

export interface UpdateFilterInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the created Filter
   */
  id: string;
  /**
   * Name of the Filter
   */
  name?: string;
  /**
   * Rules that a message must match
   */
  query?: QueryModel;
  /**
   * Action to take with a matching message
   */
  action?: ActionModel;
  /**
   * If true then this filter is ignored
   */
  disabled: boolean;
}

export interface RequestFilterInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the Filter
   */
  id: string;
  /**
   * Name of the Filter
   */
  name: string;
  /**
   * Rules that a message must match
   */
  query: QueryModel;
  /**
   * Action to take with a matching message
   */
  action: ActionModel;
  /**
   * If true, then this filter is ignored
   */
  disabled: boolean;
}

export interface ListAllFiltersModelResultsModel {
  /**
   * Filter ID
   */
  id: string;
  /**
   * User ID
   */
  user: string;
  /**
   * Name for the filter
   */
  name: string;
  /**
   * Datestring of the time the filter was created <date-time>
   */
  created: string;
  /**
   * Array of Array of strings
   */
  query: [string[]];
  /**
   * Array of Array of strings
   */
  action: [string[]];
  /**
   * If true, then this filter is ignored
   */
  disabled: boolean;
  /**
   * List of forwarding targets
   */
  targets?: string[];
}

export interface ListAllFiltersModel {
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
   * Address listing
   */
  results: ListAllFiltersModelResultsModel[];
}

export interface ListFiltersForUserModelResultsModel {
  /**
   * Filter ID
   */
  id: string;
  /**
   * Name for the filter
   */
  name: string;
  /**
   * Datestring of the time the filter was created <date-time>
   */
  created: string;
  /**
   * Array of Array of strings
   */
  query: [string[]];
  /**
   * Array of Array of strings
   */
  action: [string[]];
  /**
   * If true, then this filter is ignored
   */
  disabled: boolean;
}

export interface ListFiltersForUserModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Filter usage limits for the user account
   */
  limits: LimitUsageModel;
  /**
   * Filter description
   */
  results: ListFiltersForUserModelResultsModel[];
}
