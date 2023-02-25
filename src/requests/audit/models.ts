export interface GetAuditInformationResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   *Users unique ID
   */
  user: string;
  /**
   * <date-time>
   * Start time as ISO date
   */
  start?: string;
  /**
   * <date-time>
   * End time as ISO date
   */
  end?: string;
  /**
   * Expiration date. Audit data is deleted after this date
   */
  expires: string;
}

export interface CreateNewAuditBodyParametersModel {
  /**
   * Users unique ID
   */
  user: string;
  /**
   * <date-time>
   * Start time as ISO date
   */
  start?: string;
  /**
   * <date-time>
   * End time as ISO date
   */
  end?: string;
  /**
   * Expiration date. Audit data is deleted after this date
   */
  expires: string;
}

export interface CreateNewAuditResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the created Audit
   */
  id: string;
}
