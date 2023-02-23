export interface DeleteTlsCertificateModel {
  /**
   * Indicates successful response
   */
  success: boolean;
}

export interface CreateOrUpdateTlsCertificateForServerNameModel {
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
   * Some notes about this certificate
   */
  description?: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * Certificate expiration time <date-time>
   */
  expires?: string;
  /**
   * SAN servernames listed in the certificate
   * E.g. "example.com", "www.example.com"
   */
  altNames?: string[];
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
	"cert"?: "-----BEGIN CERTIFICATE-----\nMIIDEDCCAfg...",
	/**
	 * CA chain certificates. Not needed if cert value is a bundle
	 */
  ca?: string[];
}

export interface RequestTlsCertificateInformationModel {
  /**
   * ID of the certificate
   */
  id: string;
  /**
   * ID of the certificate
   */
  servername: string;
  /**
   * If true then private key and certificate are managed automatically by ACME
   */
  acme?: false;
  /**
   * Key description
   */
  description: string;
  /**
   * Key fingerprint (SHA1)
   */
  fingerprint: string;
  /**
   * Datestring <date-time>
   */
  created: string;
  /**
   * Certificate expiration time <date-time>
   */
  expires?: string;
  /**
   * SAN servernames listed in the certificate
   * E.g. "example.com", "www.example.com"
   */
  altNames?: string[];
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
   * Datestring
   * <date-time>
   */
  created: string;
  /**
   * Certificate expiration time
   */
  expires?: string;
  /**
   * SAN servernames listed in the certificate
   */
  altNames?: string[];
}

export interface ListRegisteredTlsCertificatesModel {
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

export interface ResolveIdForServerNameModel {
  /**
   * Indicates successful response
   */
  success: boolean;
  /**
   * Unique ID (24 byte hex)
   */
  id: string;
}
