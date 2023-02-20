import { CursorResponseModel, PageQueryModel } from "../../models";

export interface GetRegisteredWebhooksQueryParametersModel
	extends PageQueryModel {
	/**
	 * Prefix or exact match. Prefix match must end with
	 * ".*", eg "channel.*". Use "*" for all types
	 */
	type: string;
	/**
	 * User ID
	 */
	user?: string;
}

export interface GetRegisteredWebhooksResponseModel
	extends CursorResponseModel {
	/**
	 * Webhook listing
	 */
	results: {
		/**
		 * Webhooks unique ID (24 byte hex)
		 */
		id: string;
		/**
		 * An array of event types this webhook matches
		 */
		type: string[];
		/**
		 * User ID or null
		 */
		user: string | null;
		/**
		 * Webhook URL
		 */
		url: string;
	}[];
}

export interface CreateWebhookBodyParametersModel {
	/**
	 * An array of event types to match. For prefix match
	 * use ".*" at the end (eg. "user.*") or "*" for all
	 * types
	 */
	type: string[];
	/**
	 * User ID to match (only makes sense for user
	 * specific resources)
	 */
	user?: string;
	/**
	 * URL to POST data to
	 */
	url: string;
}
