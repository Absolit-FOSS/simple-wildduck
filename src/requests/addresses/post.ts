import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateNewAddressBodyParameterModel,
	CreateNewForwardedAddressBodyParameterModel,
} from "./models";

/**
 * Create new Address
 *
 * Add a new email address for a User. Addresses can contain unicode characters.
 * Dots in usernames are normalized so no need to create both "firstlast@example.com" and "first.last@example.com"
 * Special addresses *@example.com, *suffix@example.com and username@* catches all emails to these domains
 * or users without a registered destination (requires allowWildcard argument)
 *
 * https://docs.wildduck.email/api/#operation/createUserAddress
 *
 * @param userId ID of the User
 * @param bodyData body parameters to create a user
 */
export const createAddress = async (
	userId: string,
	bodyData: CreateNewAddressBodyParameterModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`/users/${userId}/addresses`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

/**
 * Create new forwarded Address
 *
 * Add a new forwarded email address. Addresses can contain unicode characters
 * Dots in usernames are normalized so no need to create both "firstlast@example.com" and
 * "first.last@example.com" Special addresses *@example.com and username@
 * catches all emails to these domains or users without a registered destination
 * (requires allowWildcard argument)
 *
 * https://docs.wildduck.email/api/#operation/createForwardedAddress
 *
 * @param bodyData body parameters to cancel user deletion
 */
export const createNewForwardedAddress = async (
	bodyData: CreateNewForwardedAddressBodyParameterModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL}/forwarded/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
