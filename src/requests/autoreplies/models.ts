export interface GetAutoreplyResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Is the autoreply enabled (true) or not (false)
   */
  status: boolean;
  /**
   * Name that is used for the From: header in autoreply message
   */
  name: string;
  /**
   * Subject line for the autoreply. If empty then uses subject of the original message
   */
  subject: string;
  /**
   * HTML formatted content of the autoreply message
   */
  html: string;
  /**
   * Plaintext formatted content of the autoreply message
   */
  text: string;
  /**
   * Datestring of the start of the autoreply <date-time>
   */
  start: string;
  /**
   * Datestring of the end of the autoreply <date-time>
   */
  end: string;
}

export interface UpdateAutoreplyBodyParametersModel {
  /**
   * Is the autoreply enabled (true) or not (false)
   */
  "status"?: boolean,
  /**
   * Name that is used for the From: header in autoreply message
   */
  "name"?: string,
  /**
   * Subject line for the autoreply. If empty then uses subject of the original message
   */
  "subject"?: string,
  /**
   * HTML formatted content of the autoreply message
   */
  "html"?: string,
  /**
   * Plaintext formatted content of the autoreply message
   */
  "text"?: string,
  /**
   * <date-time>  
   * Datestring of the start of the autoreply or boolean false to disable start checks
   */
  "start"?: string,
  /**
   * <date-time>
   * Datestring of the end of the autoreply or boolean false to disable end checks
   */
  "end"?: string
}