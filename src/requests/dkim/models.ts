export interface CreateOrUpdateDkimKeyForDomainBodyParametersModel {
  /**
   * Domain name this DKIM key applies to. Use "*" as a special value that will be used for domains
   * that do not have their own DKIM key set
   */
  domain: string;
  /**
   * Selector for the key
   */
  selector: string;
  /**
   * Key description
   */
  description?: string;
  /**
   * Pem formatted DKIM private key. If not set then a new 2048 bit RSA key is generated,
   * though that it can take several seconds to complete.
   */
  privateKey?: string;
}

export interface DnsTxtModel {
  /**
   * Is the domain name of TXT
   */
  name: string;
  /**
   * Is the value of TXT
   */
  value: string;
}

export interface CreateOrUpdateDkimKeyForDomainResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the DKIM
   */
  id: string;
  /**
   * The domain this DKIM key applies to
   */
  domain: string;
  /**
   * DKIM selector
   */
  selector: string;
  /**
   * Key description
   */
  description: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * Public key in DNS format (no prefix/suffix, single line)
   */
  publicKey: string;
  /**
   * Value for DNS TXT entry
   */
  dnsTxt: DnsTxtModel;
}

export interface RequestDkimInformationResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the DKIM
   */
  id: string;
  /**
   * The domain this DKIM key applies to
   */
  domain: string;
  /**
   * DKIM selector
   */
  selector: string;
  /**
   * Key description
   */
  description: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * Public key in DNS format (no prefix/suffix, single line)
   */
  publicKey: string;
  /**
   * (DnsTxt)
   * Value for DNS TXT entry
   */
  dnsTxt: DnsTxtModel;
  /**
   * <date-time>
   * Datestring
   */
  created: string;
}

export interface ListRegisteredDkimKeysQueryParameters {
  /**
   * Partial match of a Domain name
   */
  query?: string;
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

export interface ResultsModel {
  /**
   * ID of the DKIM
   */
  id: string;
  /**
   * The domain this DKIM key applies to
   */
  domain: string;
  /**
   * DKIM selector
   */
  selector: string;
  /**
   * Key description
   */
  description: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * Datestring
   */
  created: string;
}

export interface ListRegisteredDkimKeysResponseParameters {
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
   * DKIM listing
   */
  results: ResultsModel[];
}
