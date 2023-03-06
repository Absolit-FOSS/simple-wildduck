import { CursorResponseModel, PageQueryModel } from "../../models";

export interface CreateOrUpdateDkimKeyForDomainBodyParametersModel {
	/**
	 * Domain name this DKIM key applies to. Use "*" as a special value that will be used for domains
	 * that do not have their own DKIM key set
	 */
	domain: string;
	/**
	 * Selector for the key
	 */
	selector: string;
	/**
	 * Key description
	 */
	description?: string;
	/**
	 * Pem formatted DKIM private key. If not set then a new 2048 bit RSA key is generated,
	 * though that it can take several seconds to complete.
	 */
	privateKey?: string;
}

export interface DnsTxtModel {
	/**
	 * Is the domain name of TXT
	 */
	name: string;
	/**
	 * Is the value of TXT
	 */
	value: string;
}

export interface CreateOrUpdateDkimKeyForDomainResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the DKIM
	 */
	id: string;
	/**
	 * The domain this DKIM key applies to
	 */
	domain: string;
	/**
	 * DKIM selector
	 */
	selector: string;
	/**
	 * Key description
	 */
	description: string;
	/**
	 * Key fingerprint (SHA1)
	 */
	fingerprint: string;
	/**
	 * Public key in DNS format (no prefix/suffix, single line)
	 */
	publicKey: string;
	/**
	 * Value for DNS TXT entry
	 */
	dnsTxt: DnsTxtModel;
}

export interface RequestDkimInformationResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the DKIM
	 */
	id: string;
	/**
	 * The domain this DKIM key applies to
	 */
	domain: string;
	/**
	 * DKIM selector
	 */
	selector: string;
	/**
	 * Key description
	 */
	description: string;
	/**
	 * Key fingerprint (SHA1)
	 */
	fingerprint: string;
	/**
	 * Public key in DNS format (no prefix/suffix, single line)
	 */
	publicKey: string;
	/**
	 * (DnsTxt)
	 * Value for DNS TXT entry
	 */
	dnsTxt: DnsTxtModel;
	/**
	 * Datestring
	 */
	created: string;
}

export interface ListRegisteredDkimKeysQueryParameters extends PageQueryModel {
	/**
	 * Partial match of a Domain name
	 */
	query?: string;
}

interface ResultsModel {
	/**
	 * ID of the DKIM
	 */
	id: string;
	/**
	 * The domain this DKIM key applies to
	 */
	domain: string;
	/**
	 * DKIM selector
	 */
	selector: string;
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
}

export interface ListRegisteredDkimKeysResponseParameters
	extends CursorResponseModel {
	/**
	 * DKIM listing
	 */
	results: ResultsModel[];
}
