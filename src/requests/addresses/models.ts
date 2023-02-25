import { LimitUsageTTLModel } from "../../models";

export interface AutoreplyModel {
  /**
   * If true, then autoreply is enabled for this address
   */
  "status": boolean,
  /**
   * Name that is used for the From: header in autoreply message
   */
  "name": string,
  /**
   * Autoreply subject line
   */
  "subject": string,
  /**
   * Autoreply plaintext content
   */
  "text": string,
  /**
   * Autoreply HTML content
   */
  "html": string
}

export interface DateStringAutoreplyModel extends AutoreplyModel {
  /**
   * <date-time>
   * Either a date string or boolean false to disable start time checks
   */
  "start": string,
  /**
   * <date-time>
   * Either a date string or boolean false to disable end time checks
   */
  "end": string,
}

export interface GetForwardedAddressInfoResponseModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * ID of the Address
   */
  "id": string,
  /**
   * E-mail address string
   */
  "address": string,
  /**
   * Identity name
   */
  "name": string,
  /**
   * List of forwarding targets
   */
  "targets": string[],
  /**
   * Account limits and usage
   */
  "limits": {
    /**
     * Forwarding quota
     */
    "forwards": LimitUsageTTLModel;
  }
  /**
   * Autoreply information
   */
  "autoreply": AutoreplyModel,
  /**
   * Datestring of the time the address was created
   */
  "created": string,
  /**
   * List of tags associated with the Address
   */
  "tags": string[],
  /**
   * If true then the forwarded address is disabled
   */
  "forwardedDisabled": boolean
}

export interface UpdateForwardedAddressInforBodyParametersModel {
  /**
   * New address. Only affects normal addresses, special addresses that include * can not be changed
   */
  "address"?: string,
  /**
   * Identity name
   */
  "name"?: string,
  /**
   * An array of forwarding targets. The value could either be an email address or a relay
   * url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are
   * POSTed to. If set then overwrites previous targets array
   */
  "targets"?: string[],
  /**
   * Daily allowed forwarding count for this address
   */
  "forwards"?: number,
  /**
   * A list of tags associated with this address
   */
  "tags"?: string[],
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  "metaData"?: any,
  /**
   * Optional metadata for internal use, must be an object or JSON formatted string of an
   * object. Not available for user-role tokens
   */
  "internalData"?: any,
  /**
   * If true then disables forwarded address (stops forwarding messages)
   */
  "forwardedDisabled"?: boolean,
  /**
   * Autoreply information
   */
  "autoreply"?: DateStringAutoreplyModel;
}

export interface UpdateAddressInforBodyParametersModel {
  /**
   * Identity name
   */
  "name"?: string,
  /**
   * New address if you want to rename existing address
   * Only affects normal addresses, special addresses that include * can not be changed
   */
  "address"?: string,
  /**
   * Indicates if this is the default address for the User
   */
  "main": boolean,
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  "metaData"?: any,
  /**
   * Optional metadata for internal use, must be an object or JSON formatted string of an object
   * Not available for user-role tokens
   */
  "internalData"?: any,
  /**
   * A list of tags associated with this address
   */
  "tags"?: string[]
}

export interface GetAddressesInfoResponseModelModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * ID of the Address
   */
  "id": string,
  /**
   * Identity name
   */
  "name": string,
  /**
   * E-mail address string
   */
  "address": string,
  /**
   * List of tags associated with the Address
   */
  "tags": string[],
  /**
   * Metadata object (if available)
   */
  "metaData"?: any,
  /**
   * Internal metadata object (if available), not included for user-role requests
   */
  "internalData"?: any,
  /**
   * Indicates if this is the default address for the User
   */
  "main": boolean,
  /**
   * <date-time>
   * Datestring of the time the address was created
   */
  "created": string
}

export interface GetAddressInfoQueryParametersModel {
  /**
   * If true then resolves also wildcard addresses
   */
  allowWildcard: boolean;
}

export interface GetAddressInfoResponseModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * ID of the Address
   */
  "id": string,
  /**
   * E-mail address string
   */
  "address": string,
  /**
   * Identity name
   */
  "name": string,
  /**
   * ID of the user if the address belongs to a User
   */
  "user": string,
  /**
   * List of forwarding targets if this is a Forwarded address
   */
  "targets": string[],
  /**
   * Account limits and usage
   */
  "limits": {
    /**
     * Forwarding quota
     */
    "forwards": LimitUsageTTLModel
  },
  /**
   * Autoreply information
   */
  "autoreply": AutoreplyModel,
  /**
   * List of tags associated with the Address
   */
  "tags": string[],
  /**
   * Datestring of the time the address was created
   */
  "created": string
}

export interface ListRegisteredAddressesQueryParametersModel {
  /**
   * Partial match of an address
   */
  query?: string,
  /**
   * Partial match of a forward email address or URL
   */
  forward?: string
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
   * If true, then includes internalData in the response. Not shown for user-role tokens.
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

export interface ListRegisteredAddressesResultsModel {
  /**
   * ID of the Address
   */
  "id": string,
  /**
   * Identity name
   */
  "name": string,
  /**
   * E-mail address string
   */
  "address": string,
  /**
   * User ID this address belongs to if this is a User address
   */
  "user": string,
  /**
   * If true then it is a forwarded address
   */
  "forwarded": boolean,
  /**
   * If true then the forwarded address is disabled
   */
  "forwardedDisabled": boolean,
  /**
   * List of forwarding targets
   */
  "target"?: string[]
}

export interface ListRegisteredAddressesResponseModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * How many results were found
   */
  "total": number,
  /**
   * Current page number. Derived from page query argument
   */
  "page": number,
  /**
   * Either a cursor string or false if there are not any previous results
   */
  "previousCursor": string,
  /**
   * Either a cursor string or false if there are not any next results
   */
  "nextCursor": string,
  /**
   * Address listing
   */
  "results": ListRegisteredAddressesResultsModel[]
}

export interface ListRegisteredAddressesForUserQueryParametersModel {
  /**
   * If true, then includes metaData in the response
   */
  metaData?: boolean;
  /**
   * If true, then includes internalData in the response. Not shown for user-role tokens
   */
  internalData?: boolean;
}

export interface ListRegisteredAddressesForUserResultsModel {
  /**
   * ID of the Address
   */
  "id": string,
  /**
   * Identity name
   */
  "name": string,
  /**
   * E-mail address string
   */
  "address": string,
  /**
   * Indicates if this is the default address for the User
   */
  "main": boolean,
  /**
   * Datestring of the time the address was created
   */
  "created": string,
  /**
   * List of tags associated with the Address
   */
  "tags": string[],
  /**
   * Metadata object (if available)
   */
  "metaData"?: any,
  /**
   * Internal metadata object (if available), not included for user-role requests
   */
  "internalData"?: any
}

export interface ListRegisteredAddressesForUserResponseModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * Address listing
   */
  "results": ListRegisteredAddressesForUserResultsModel[]
}

export interface ListAddressesFromCommunicationRegisterQueryParametersModel {
  /**
   * Prefix of an address or a name
   * Example: query=john
   */
  query: string;
  /**
   * How many records to return
   * Example: limit=25
   */
  limit?: number;
}

export interface ListAddressesFromCommunicationRegisterResultsModel {
  /**
   * ID of the Address
   */
  "id": string,
  /**
   * Name from address header
   */
  "name"?: string,
  /**
   * E-mail address string
   */
  "address": string;
}

export interface ListAddressesFromCommunicationRegisterResponseModel {
  /**
   * Indicates successful response
   */
  "success": true,
  /**
   * Address listing
   */
  "results": ListAddressesFromCommunicationRegisterResultsModel[]
}

export interface RenameDomainInAddressesBodyParametersModel {
  /**
   * Old Domain Name
   */
  "oldDomain": string,
  /**
   * New Domain Name
   */
  "newDomain": string
}

export interface CreateAddressBodyParameterModel {
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
   * If true then address value can be in the form of *@example.com, *suffix@example.com and username@*,
   * otherwise using * is not allowed. Static suffix can be up to 32 characters long
   */
  allowWildcard?: boolean;
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  metaData?: any;
  /**
   * Optional metadata for internal use, must be an object or JSON formatted string of an object.
   * Not available for user-role tokens
   */
  internalData?: any;
}

export interface CreateNewForwardedAddressBodyParameterModel {
  /**
   * E-mail Address
   */
  "address": string,
  /**
   * Identity name
   */
  "name"?: string,
  /**
   * An array of forwarding targets. The value could either be an email address
   * or a relay url to next MX server ("smtp://mx2.zone.eu:25")
   * or an URL where mail contents are POSTed to
   */
  "targets"?: string,
  /**
   * Daily allowed forwarding count for this address
   */
  "forwards"?: number,
  /**
   * If true then address value can be in the form of *@example.com, otherwise using * is not allowed
   */
  "allowWildcard"?: boolean,
  /**
   * A list of tags associated with this address
   */
  "tags"?: string[]
  /**
   * Optional metadata, must be an object or JSON formatted string
   */
  "metaData"?: any,
  /**
   * Optional metadata for internal use, must be an object or JSON formatted string of an object.
   * Not available for user-role tokens
   */
  "internalData"?: any,
  /**
   * Autoreply information
   */
  "autoreply"?: DateStringAutoreplyModel;
}