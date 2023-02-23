export interface FromToCcBccModelModel {
  /**
   * Name of the sender/recipient
   */
  name: string;
  /**
   * Address of the sender/recipient
   */
  address: string;
}

// export interface ToModel {
//   name: string;
//   address: string;
// }

// export interface CcModel {
//   name: string;
//   address: string;
// }

// export interface BccModel {
//   name: string;
//   address: string;
// }

export interface ResultsModel {
  /**
   * ID of the Message (24 byte hex)
   */
  id: string;
  /**
   * ID of the Mailbox
   */
  mailbox: string;
  /**
   * ID of the Thread
   */
  thread: string;
  /**
   * E-mail of the sender
   */
  from: FromToCcBccModelModel;
  /**
   * Recipients in To: field
   */
  to: FromToCcBccModelModel[];
  /**
   * Recipients in Cc: field
   */
  cc: FromToCcBccModelModel[];
  /**
   * Recipients in Bcc: field. Usually only available for drafts
   */
  bcc: FromToCcBccModelModel[];
  /**
   * Message subject
   */
  subject:string;
  /**
   * Date string from header
   * <date-time>
   */
  date: string;
  /**
   * Date string of receive time
   * <date-time>
   */
  idate?: string;
  /**
   * First 128 bytes of the message
   */
  intro:string;
  /**
   * Does the message have attachments
   */
  attachments: true;
  /**
   * Is this message alread seen or not
   */
  seen: true;
  /**
   * Does this message have a \Deleted flag
   * (should not have as messages are automatically deleted once this flag is set)
   */
  deleted: true;
  /**
   * Does this message have a \Flagged flag
   */
  flagged: true;
  /**
   * Parsed Content-Type header
   * Usually needed to identify encrypted messages and such
   */
  contentType: {
    /**
     * MIME type of the message, eg. "multipart/mixed"
     */
    value:string;
    /**
     * An object with Content-Type params as key-value pairs
     */
    params: {};
  };
}

export interface ListArchivedMessageModel {
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
   * Message listing
   */
  results: ResultsModel[];
}

export interface RestoreArchivedMessageModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Maibox ID the message was moved to
   */
  id: number;
  /**
   * New ID for the Message
   */
  mailbox: string;
}

export interface RestoreArchivedMessagesModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Datestring <date-time>
   */
  start: string;
  /**
   * Datestring <date-time>
   */
  end: string;
}
