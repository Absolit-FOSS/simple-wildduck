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
  results: [
    {
      id: string;
      mailbox: string;
      thread: string;
      from: {
        name: string;
        address: string;
      };
      to: [
        {
          name: string;
          address: string;
        }
      ];
      cc: [
        {
          name: string;
          address: string;
        }
      ];
      bcc: [
        {
          name: string;
          address: string;
        }
      ];
      subject: string;
      date: "2019-08-24T14:15:22Z";
      idate: "2019-08-24T14:15:22Z";
      intro: string;
      attachments: boolean;
      seen: boolean;
      deleted: boolean;
      flagged: boolean;
      contentType: {
        value: string;
        params: {};
      };
    }
  ];
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
