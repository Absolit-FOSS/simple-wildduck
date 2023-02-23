export interface DeleteAliasModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface RequestAliasInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Alias
   */
  id: string;
  /**
   * Alias domain
   */
  alias: string;
  /**
   * Alias target
   */
  domain: string;
  /**
   * Datestring of the time the alias was created <date-time>
   */
  created: string;
}

export interface CreatNewDomainAliasModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the Domain Alias
   */
  id: string;
  /**
   * Domain Alias
   */
  alias: string;
  /**
   * Domain name this Alias applies to
   */
  domain: string;
}

export interface ResultsModel {
  /**
   * ID of the Domain Alias
   */
  id: string;
  /**
   * Domain Alias
   */
  alias: string;
  /**
   * The domain this alias applies to
   */
  domain: string;
}

export interface ListRegisteredDomainAliasesModel {
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
   * Aliases listing
   */
  results: ResultsModel[];
}

export interface ResolveIdForDomainModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Unique ID (24 byte hex)
   */
  id: string;
}
