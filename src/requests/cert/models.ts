export interface CreateOrUpdateTlsCertForServerNameBodyParametersModel {
  /**
   * Server name this TLS certificate applies to
   */
  servername: string;
  /**
   * If true then private key and certificate are managed automatically by ACME
   */
  acme?: boolean;
  /**
   * PEM formatted TLS private key. Optional if certificate is managed by ACME
   */
  privateKey?: string;
  /**
   * PEM formatted TLS certificate or a certificate bundle with concatenated certificate and CA chain.
   * Optional if certificate is managed by ACME
   */
  cert?: string;
  /**
   * CA chain certificates. Not needed if cert value is a bundle
   */
  ca?: string[];
  /**
   * Certificate description
   */
  description?: string;
}

export interface CreateOrUpdateTlsCertForServerNameResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * ID of the certificate
   */
  id: string;
  /**
   * The server name this certificate applies to
   */
  servername: string;
  /**
   * Key description
   */
  description?: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * Certificate expiration time
   */
  expires?: string;
  /**
   * SAN servernames listed in the certificate
   */
  altNames?: string[];
}

export interface RequestTlsCertInfoResponseModel {
  /**
   * ID of the certificate
   */
  id: string;
  /**
   * The server name this certificate applies to
   */
  servername: string;
  /**
   * If true then private key and certificate are managed automatically by ACME
   */
  acme?: boolean;
  /**
   * Key description
   */
  description: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * <date-time>
   * Datestring
   */
  created: string;
  /**
   * <date-time>
   * Certificate expiration time
   */
  expires?: string;
  /**
   * SAN servernames listed in the certificate
   */
  altNames?: string[];
}

export interface ListRegisteredTlsCertQueryParametersModel {
  /**
   * Example: query=example.com
   * Partial match of a server name
   */
  query?: string;
  /**
   * Default: false
   * Example: altNames=true
   * Match query value against SAN as well (including wildcard names)
   */
  altNames?: boolean;
  /**
   * How many records to return
   */
  limit?: number;
  /**
   * Current page number. Informational only, page numbers start from 1
   */
  page?: number;
  /**
   * Example: next=eyIkb2lkIjoiNWRmMWZkMmQ3NzkyNTExOGI2MDdjNjg0In0
   * Cursor value for next page, retrieved from nextCursor response value
   */
  next?: string;
  /**
   * Cursor value for previous page, retrieved from previousCursor response value
   */
  previous?: string;
}

export interface ResultsModel {
  /**
   * ID of the certificate
   */
  id: string;
  /**
   * The server name this certificate applies to
   */
  servername: string;
  /**
   * If true then private key and certificate are managed automatically by ACME
   */
  acme?: boolean;
  /**
   * Key description
   */
  description: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * <date-time>
   * Datestring
   */
  created: string;
  /**
   * <date-time>
   * Certificate expiration time
   */
  expires?: string;
  /**
   * SAN servernames listed in the certificate
   */
  altNames?: string[];
}

export interface ListRegisteredTlsCertResponseModel {
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
  previousCursor: boolean;
  /**
   * Either a cursor string or false if there are not any next results
   */
  nextCursor: string;
  /**
   * Certificate listing
   */
  results: ResultsModel[];
}

export interface ResolveIdForServerNameResponseModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Unique ID (24 byte hex)
   */
  id: string;
}
