import { CursorResponseModel } from "../../models";

export interface CreateNewDomainAliasBodyParameterModel {
	/**
	 * Domain Alias
	 */
	alias: string;
	/**
	 * Domain name this Alias applies to
	 */
	domain: string;
}

export interface GetAliasInfoResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * ID of the Alias
	 */
	id: string;
	/**
	 * Alias domain
	 */
	alias: string;
	/**
	 * Alias target
	 */
	domain: string;
	/**
	 * <date-time>
	 * Datestring of the time the alias was created
	 */
	created: string;
}

export interface ListRegisteredDomainAliasesQueryParametersModel {
	/**
	 * Partial match of a Domain Alias or Domain name
	 */
	query?: string;
	/**
	 * How many records to return
	 *
	 * @max 250
	 */
	limit?: number;
	/**
	 * Current page number. Informational only, page numbers start from 1
	 */
	page?: number;
	/**
	 * Cursor value for next page, retrieved from nextCursor response value
	 */
	next?: string;
	/**
	 * Cursor value for previous page, retrieved from previousCursor response value
	 */
	previous?: string;
}

interface ResultsModel {
	/**
	 * ID of the Domain Alias
	 */
	id: string;
	/**
	 * Domain Alias
	 */
	alias: string;
	/**
	 * The domain this alias applies to
	 */
	domain: string;
}

export interface ListRegisteredDomainAliasesResponseModel
	extends CursorResponseModel {
	/**
	 * Aliases listing
	 */
	results: ResultsModel[];
}
