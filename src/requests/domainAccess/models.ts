export interface DeleteDomainFromListingModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface ResultsModel {
  /**
   * Entry ID
   */
  id: string;
  /**
   * blocklisted/allowlisted domain name
   */
  domain: string;
}

export interface ListBlockedlistedDomainsModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Domain list
   */
  results: ResultsModel[];
}

export interface ListAllowedlistedDomainsModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Domain list
   */
  results: ResultsModel[];
}

export interface AddDomainToAllowlistModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the created record
   */
  id: string;
  /**
   * Domain name to allowlist for users/addresses that include this tag
   */
  domain: string;
}

export interface AddDomainToBlocklistModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the created record
   */
  id: string;
  /**
   * Domain name to blacklist for users/addresses that include this tag
   */
  domain: string;
}
