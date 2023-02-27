export interface ResultsModel {
  /**
   * Entry ID
   */
  id: string;
  /**
   * allowlisted domain name
   */
  domain: string;
}

export interface ListAllowAndBlocklistedDomainsResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Domain list
   */
  results: ResultsModel[];
}

export interface AddDomainToAllowOrBlocklistBodyParametersModel {
  /**
   * Domain name to allowlist for users/addresses that include this tag
   */
  domain: string;
}