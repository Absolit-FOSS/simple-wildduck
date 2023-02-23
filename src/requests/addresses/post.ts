import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewAddressModel, CreateNewForwardedAddressModel } from "./models";

/**
 * Create new Address
 *
 * https://docs.wildduck.email/api/#operation/createUserAddress
 *
 * @param userId ID of the User
 */
export const createNewAddress = async (
	userId: string
): Promise<CreateNewAddressModel> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};

/**
 * Create new forwarded Address
 *
 * https://docs.wildduck.email/api/#operation/createForwardedAddress
 *
 * @param address E-mail Address
 * @param name Identity name
 * @param targetsAn array of forwarding targets. The value could either be an email address or a relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to
 * @param forwards Daily allowed forwarding count for this address
 * @param allowWildcard If true then address value can be in the form of *@example.com,
 * 						otherwise using * is not allowed
 * @param tags A list of tags associated with this address
 * @param metaData Optional metadata, must be an object or JSON formatted string
 * @param internalData Optional metadata for internal use, must be an object or JSON formatted string of an object
 * 				       Not available for user-role tokens
 * @param autoreply Autoreply information
 */
export const createNewForwardedAddress = async (
	address: string,
	name?: string,
	targets?: string[],
	forwards?: number,
	allowWildcard?: boolean,
	tags?: string[],
	metaData?: object | string,
	internalData?: object | string,
	autoreply?: object
): Promise<CreateNewForwardedAddressModel> => {
	const url = urlQueryBuilder(`/user/${address}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};

// all parameters were left unchange because there were no
// path parameters in POST