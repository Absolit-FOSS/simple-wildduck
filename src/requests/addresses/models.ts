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
  autoreply: {
    status: boolean;
    name: string;
    subject: string;
    text: string;
    html: string;
  };
  /**
   * Datestring of the time the address was created
   */
  created: "2019-08-24T14:15:22Z";
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
  metaData?: {};
  internalData?: {};
  /**
   * Indicates if this is the default address for the User
   */
  main: boolean;
  /**
   * Datestring of the time the address was created
   */
  created: "2019-08-24T14:15:22Z";
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
  autoreply: {
    status: boolean;
    name: string;
    subject: string;
    text: string;
    html: string;
  };
  /**
   * List of tags associated with the Address
   */
  tags: string[];
  /**
   * Datestring of the time the address was created
   */
  created: "2019-08-24T14:15:22Z";
}

export interface ListRegisteredAddressesModel {
  /**
   * Partial match of an address
   */
  query?: string;
  /**
   * Partial match of a forward email address or URL
   */
  forward?: string;
  /**
   * Comma separated list of tags. The Address must have at least one to be set
   */
  tags?: string;
  /**
   * Comma separated list of tags. The Address must have all listed tags to be set
   */
  requiredTags?: string;
  /**
   * If true, then includes metaData in the response
   */
  metaData?: boolean;
  /**
   * If true, then includes internalData in the response. Not shown for user-role tokens
   */
  internalData?: boolean;
  /**
   * How many records to return
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

export interface ListRegisteredAddressesForUserModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Address listing
   */
  results: [
    {
      id: string;
      name: string;
      address: string;
      main: boolean;
      created: "2019-08-24T14:15:22Z";
      tags: string[];
      metaData: {};
      internalData: {};
    }
  ];
}

export interface ListAddressFromCommunicationRegisterModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Address listing
   */
  results: [
    {
      id: "507f1f77bcf86cd799439011";
      name: "John Doe";
      address: "john@example.com";
    }
  ];
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
  forwards?: 0;
  /**
   * A list of tags associated with this address
   */
  tags?: string[];
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  metaData?: {};
  /**
   * Optional metadata for internal use, must be an object
   * or JSON formatted string of an object.
   * Not available for user-role tokens
   */
  internalData?: {};
  /**
   * If true then disables forwarded address (stops forwarding messages)
   */
  forwardedDisabled?: true;
  /**
   * Autoreply information
   */
  autoreply?: {
    status: true;
    start: "2019-08-24T14:15:22Z";
    end: "2019-08-24T14:15:22Z";
    name: string;
    subject: string;
    text: string;
    html: string;
  };
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
  metaData?: {};
  /**
   * Optional metadata for internal use, must be an object
   * or JSON formatted string of an object.
   * Not available for user-role tokens
   */
  internalData?: {};
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
  metaData?: {};
  /**
   * Optional metadata for internal use, must be an object or JSON
   * formatted string of an object. Not available for user-role tokens
   */
  internalData?: {};
}
