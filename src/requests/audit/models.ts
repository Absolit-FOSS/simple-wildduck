export interface RequestAuditInformationModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Users unique ID
   */
  user: string;
  /**
   * Start time as ISO date
   */
  start?: string;
  /**
   * End time as ISO date
   */
  end?: string;
  /**
   * Expiration date. Audit data is deleted after this date
   */
  expires: string;
}

export interface CreateNewAuditModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID for the created Audit
   */
  id: string;
}
