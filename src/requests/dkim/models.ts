export interface DeleteDkimKeyModel {
	"success": boolean
  }

export interface CreateOrUpdateDkimKeyForDomainModel {
	/**
	 * Indicates successful response
	 */
	"success": boolean,
	/**
	 * ID of the DKIM
	 */
	"id": string,
	/**
	 * The domain this DKIM key applies to
	 */
	"domain": string,
	/**
	 * DKIM selector
	 */
	"selector": string,
	/**
	 * Key description
	 */
	"description": string,
	/**
	 * Key fingerprint (SHA1)
	 */
	"fingerprint": string,
	/**
	 * Public key in DNS format (no prefix/suffix, single line)
	 */
	"publicKey": string,
	/**
	 * Value for DNS TXT entry
	 */
	"dnsTxt": {
	  "name": string,
	  "value": string
	}
	/**
	 * Pem formatted DKIM private key. If not set then a new 2048 bit RSA key is generated,
	 * beware though that it can take several seconds to complete
	 */
	"privateKey"?: string
}

export interface RequestDkimInformationModel {
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
	 * DKIM listing
	 */
	"results": [
	  {
		"id": string,
		"domain": string,
		"selector": string,
		"description": string,
		"fingerprint": string,
		"created": string
	  }
	]
	/**
	 * Partial match of a Domain name
	 */
	query?: string
	/**
	 * How many records to return
	 */
	limit?: number
	/**
	 * Cursor value for next page, retrieved from nextCursor response value
	 */
	next?: string
	/**
	 * Cursor value for previous page, retrieved from previousCursor response value
	 */
	previous?: string
  }

  export interface ResolveIdForDkimDomainModel {
	/**
	 * Indicates successful response
	 */
	"success": boolean,
	/**
	 * Unique ID (24 byte hex)
	 */
	"id": string
  }