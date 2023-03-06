import { CursorResponseModel, PageQueryModel } from "../../models";

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
	 * Datestring
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

export interface ListRegisteredTlsCertQueryParametersModel
	extends PageQueryModel {
	/**
	 * Partial match of a server name
	 *
	 * @example query=example.com
	 */
	query?: string;
	/**
	 * Match query value against SAN as well (including wildcard names)
	 *
	 * @example altNames=true
	 * @default false
	 */
	altNames?: boolean;
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

export interface ListRegisteredTlsCertResponseModel
	extends CursorResponseModel {
	/**
	 * Certificate listing
	 */
	results: ResultsModel[];
}
