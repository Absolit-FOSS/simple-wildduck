import { LimitUsageTTLModel } from "../../models/index";

export interface DeleteForwardedAddressModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface DeleteAddressModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface AutoReplyModel {
  /**
   * If true, then autoreply is enabled for this address
   */
  status: boolean;
  /**
   * Name that is used for the From: header in autoreply message
   */
  name: string;
  /**
   * Autoreply subject line
   */
  subject: string;
  /**
   * Autoreply plaintext content
   */
  text: string;
  /**
   * Autoreply HTML content
   */
  html: string;
};

export interface GetForwardedAddressesInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Address
   */
  id: string;
  /**
   * E-mail address string
   */
  address: string;
  /**
   * Identity name
   */
  name: string;
  /**
   * List of forwarding targets
   */
  targets: string[];
  /**
   * Account limits and usage
   */
  limits: {
    forwards: LimitUsageTTLModel;
  };
  /**
   * Autoreply information
   */
  autoreply: AutoReplyModel;
  /**
   * Datestring of the time the address was created
   */
  created: string;
  /**
   * List of tags associated with the Address
   */
  tags: string[];
  /**
   * If true then the forwarded address is disabled
   */
  forwardedDisabled: boolean;
}

export interface RequestAddressesInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Address
   */
  id: string;
  /**
   * Identity name
   */
  name: string;
  /**
   * E-mail address string
   */
  address: string;
  /**
   * List of tags associated with the Address
   */
  tags: string[];
  /**
   * Metadata object (if available)
   */
  metaData?: object;
  /**
   * Internal metadata object (if available), not included for user-role requests
   */
  internalData?: object;
  /**
   * Indicates if this is the default address for the User
   */
  main: boolean;
  /**
   * Datestring of the time the address was created
   */
  created: string;
}

export interface GetAddressInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Address
   */
  id: string;
  /**
   * E-mail address string
   */
  address: string;
  /**
   * Identity name
   */
  name: string;
  /**
   * ID of the user if the address belongs to a User
   */
  user: string;
  /**
   * List of forwarding targets if this is a Forwarded address
   */
  targets: string[];
  /**
   * Account limits and usage
   */
  limits: {
    forwards: LimitUsageTTLModel;
  };
  /**
   * Autoreply information
   */
  autoreply: AutoReplyModel;
  /**
   * List of tags associated with the Address
   */
  tags: string[];
  /**
   * Datestring of the time the address was created
   */
  created: string;
}

export interface ListRegisteredAddressesResultsModel {
  /**
   * ID of the Address
   */
  id: string;
  /**
   * Identity name
   */
  name: string;
  /**
   * E-mail address string
   */
  address: string;
  /**
   * User ID this address belongs to if this is a User address
   */
  user: string;
  /**
   * If true then it is a forwarded address
   */
  forwarded: boolean;
  /**
   * If true then the forwarded address is disabled
   */
  forwardedDisabled: boolean;
  /**
   * List of forwarding targets
   */
  target?: string[];
}

export interface ListRegisteredAddressesModel {
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
  results: ListRegisteredAddressesResultsModel[];
}

export interface ListRegisteredAddressesForUserResultsModel {
  /**
   * ID of the Address
   */
  id: string;
  /**
   * Identity name
   */
  name: string;
  /**
   * E-mail address string
   */
  address: string;
  /**
   * Indicates if this is the default address for the User
   */
  main: boolean;
  /**
   * Datestring of the time the address was created <date-time>
   */
  created: string;
  /**
   * List of tags associated with the Address
   */
  tags: string[];
  /**
   * Metadata object (if available)
   */
  metaData?: object;
  /**
   * Internal metadata object (if available), not included for user-role requests
   */
  internalData?: object;
}

export interface ListRegisteredAddressesForUserModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Address listing
   */
  results: ListRegisteredAddressesForUserResultsModel[];
}

export interface ListAddressFromCommunicationRegisterResultsModel {
  /**
   * ID of the Address
   */
  id: string;
  /**
   * Name from address header
   */
  name?: string;
  /**
   * E-mail address string
   */
  address: string;
}

export interface ListAddressFromCommunicationRegisterModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Address listing
   */
  results: ListAddressFromCommunicationRegisterResultsModel[];
}

export interface UpdateForwardedAddressInformationAutoreplyModel {
  /**
   * If true, then autoreply is enabled for this address
   */
  status?: true;
  /**
   * Either a date string or boolean false to disable start time checks
   */
  start?: string;
  /**
   * Either a date string or boolean false to disable end time checks
   */
  end?: string;
  /**
   * Name that is used for the From: header in autoreply message
   */
  name?: string;
  /**
   * Autoreply subject line
   */
  subject?: string;
  /**
   * Autoreply plaintext content
   */
  text?: string;
  /**
   * Autoreply HTML content
   */
  html?: string;
}

export interface UpdateForwardedAddressInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * New address. Only affects normal addresses,
   * special addresses that include * can not be changed
   */
  address?: string;
  /**
   * Identity name
   */
  name?: string;
  /**
   * An array of forwarding targets.
   * The value could either be an email address or a relay
   * url to next MX server ("smtp://mx2.zone.eu:25")
   * or an URL where mail contents are POSTed to.
   * If set then overwrites previous targets array
   */
  targets?: string[];
  /**
   * Daily allowed forwarding count for this address
   */
  forwards?: number;
  /**
   * A list of tags associated with this address
   */
  tags?: string[];
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  metaData?: object;
  /**
   * Optional metadata for internal use, must be an object
   * or JSON formatted string of an object.
   * Not available for user-role tokens
   */
  internalData?: object;
  /**
   * If true then disables forwarded address (stops forwarding messages)
   */
  forwardedDisabled?: true;
  /**
   * Autoreply information
   */
  autoreply?: UpdateForwardedAddressInformationAutoreplyModel;
}

export interface UpdateAddressInformationModel {
  /**
   * Indicates successful response
   */
  success?: boolean;
  /**
   * Identity name
   */
  name?: string;
  /**
   * New address if you want to rename existing address.
   * Only affects normal addresses, special addresses that
   * include * can not be changed
   */
  address?: string;
  /**
   * Indicates if this is the default address for the User
   */
  main: boolean;
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  metaData?: object;
  /**
   * Optional metadata for internal use, must be an object
   * or JSON formatted string of an object.
   * Not available for user-role tokens
   */
  internalData?: object;
  /**
   * A list of tags associated with this address
   */
  tags?: string[];
}

export interface RenameDomainInAddressModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Old Domain Name
   */
  oldDomain: string;
  /**
   * New Domain Name
   */
  newDomain: string;
}

export interface CreateNewAddressModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Address
   */
  id: string;
  /**
   * E-mail Address
   */
  address: string;
  /**
   * Identity name
   */
  name?: string;
  /**
   * A list of tags associated with this address
   */
  tags?: string[];
  /**
   * Indicates if this is the default address for the User
   */
  main?: boolean;
  /**
   * If true then address value can be in the form
   * of *@example.com, *suffix@example.com and username@*,
   * otherwise using * is not allowed.
   * Static suffix can be up to 32 characters long.
   */
  allowWildcard?: boolean;
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  metaData?: object;
  /**
   * Optional metadata for internal use, must be an object or JSON
   * formatted string of an object. Not available for user-role tokens
   */
  internalData?: object;
}

export interface CreateNewForwardedAddressModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Address
   */
  id: number;
}