export interface DeleteDomainFromListingModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface ListAllowedlistedDomainsModel {
  /**
   * Indicates successful response
   */
  success: true;
  /**
   * Domain list
   */
  results: [
    {
      id: "string";
      bodyatadomain: "string";
    }
  ];
}

export interface AddDomainToAllowlistModel {
  /**
   * Indicates successful response
   */
  success: true;
  /**
   * ID for the created record
   */
  id: "string";
  /**
   * Domain name to allowlist for users/addresses that include this tag
   */
  domain: string;
}

export interface AddDomainToAllowlistModel {
  /**
   * Indicates successful response
   */
  success: true;
  /**
   * ID for the created record
   */
  id: "string";
  /**
   * Domain name to blacklist for users/addresses that include this tag
   */
  domain: string;
}
