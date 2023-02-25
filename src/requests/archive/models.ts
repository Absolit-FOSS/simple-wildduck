export interface ListArchivedMessageQueryParameterModel {
  /**
   * How many records to return
   */
  limit?: number;
  /**
   * Current page number. Informational only, page numbers start from 1
   */
  page?: number;
  /**
   * Enum: "asc" "desc" 
   * Ordering of the records by insert date
   */
  order?: string;
  /**
   * Cursor value for next page, retrieved from nextCursor response value
   */
  next?: string;
  /**
   * Cursor value for previous page, retrieved from previousCursor response value
   */
  previous?: string;
}

export interface ContentTypeModel {
  /**
   * MIME type of the message, eg. "multipart/mixed"
   */
  value: string;
  /**
   * An object with Content-Type params as key-value pairs
   */
  params: any;
}

export interface FromToCcBccModel {
  /**
   * Name of the sender/recipient
   */
  "name": string,
  /**
   * Address of the sender/recipient
   */
  "address": string
}

export interface ResultsModel {
  /**
   * ID of the Message (24 byte hex)
   */
  "id": string,
  /**
   * ID of the Mailbox
   */
  "mailbox": string,
  /**
   * ID of the Thread
   */
  "thread": string,
  /**
   * Recipients in From: field
   */
  "from": FromToCcBccModel,
  /**
   * Recipients in To: field
   */
  "to": FromToCcBccModel[],
  /**
   * Recipients in Cc: field
   */
  "cc": FromToCcBccModel[],
  /**
   * Recipients in Bcc: field. Usually only available for drafts
   */
  "bcc": FromToCcBccModel[],
  /**
   * Message subject
   */
  "subject": string,
  /**
   * <date-time>
   * Date string from header
   */
  "date": string,
  /**
   * <date-time>
   * Date string of receive time
   */
  "idate"?: string,
  /**
   * First 128 bytes of the message
   */
  "intro": string,
  /**
   * Does the message have attachments
   */
  "attachments": boolean,
  /**
   * Is this message alread seen or not
   */
  "seen": boolean,
  /**
   * Does this message have a \Deleted flag (should not have as messages are automatically deleted once this flag is set)
   */
  "deleted": boolean,
  /**
   * Does this message have a \Flagged flag
   */
  "flagged": boolean,
  /**
   * Parsed Content-Type header. Usually needed to identify encrypted messages and such
   */
  "contentType": ContentTypeModel;
}

export interface ListArchivedMessageResponseModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * How many results were found
   */
  "total": number,
  /**
   * Current page number. Derived from page query argument
   */
  "page": number,
  /**
   * Either a cursor string or false if there are not any previous results
   */
  "previousCursor": string,
  /**
   * Either a cursor string or false if there are not any next results
   */
  "nextCursor": string,
  /**
   * Message listing
   */
  "results": ResultsModel[];
}

export interface RestoreArchivedMessageBodyParametersModel {
  /**
   * ID of the target Mailbox. If not set then original mailbox is used.
   */
  mailbox: string;
}

export interface RestoreArchivedMessageResponseModel {
  /**
   * Indicates successful response
   */
  "success": boolean,
  /**
   * Maibox ID the message was moved to
   */
  "mailbox": string,
  /**
   * New ID for the Message
   */
  "id": number,
}

export interface RestoreArchivedMessagesBodyParametersModel {
  /**
   * <date-time>
   * Datestring
   */
  start: string;
  /**
   * <date-time>
   * Datestring
   */
  end: string;
}
