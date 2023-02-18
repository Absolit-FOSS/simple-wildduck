export interface DeleteFilterModel {
  /**
   * Indicates successful response
   */
  success: boolean;
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
  query: {
    from: string;
    to: string;
    subject: string;
    listId: string;
    text: string;
    ha: boolean;
    size: number;
  };
  /**
   * Action to take with a matching message
   */
  action: {
    seen: boolean;
    flag: boolean;
    delete: boolean;
    spam: boolean;
    mailbox: string;
    targets: string[];
  };
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
  query?: {
    from: string;
    to: string;
    subject: string;
    listId: string;
    text: string;
    ha: boolean;
    size: number;
  };
  /**
   * Action to take with a matching message
   */
  action?: {
    seen: boolean;
    flag: boolean;
    delete: boolean;
    spam: boolean;
    mailbox: string;
    targets: string[];
  };
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
  query: {
    from: string;
    to: string;
    subject: string;
    listId: string;
    text: string;
    ha: boolean;
    size: number;
  };
  /**
   * Action to take with a matching message
   */
  action: {
    seen: boolean;
    flag: boolean;
    delete: boolean;
    spam: boolean;
    mailbox: string;
    targets: string[];
  };
  /**
   * If true, then this filter is ignored
   */
  disabled: boolean;
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
  results: [
    {
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
      query: [string[]];
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
  ];
}

export interface ListFiltersForUserModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Filter usage limits for the user account
   */
  limits: {
    /**
     * How many filters are allowed
     */
    allowed?: number;
    /**
     * How many filters have been created
     */
    used?: number;
  };
  /**
   * Filter description
   */
  results: [
    {
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
      query: [string[]];
      action: [string[]];
      /**
       * If true, then this filter is ignored
       */
      disabled: boolean;
    }
  ];
}
