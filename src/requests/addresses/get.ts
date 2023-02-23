import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { 
	GetAddressInformationModel, 
	GetForwardedAddressesInformationModel, 
	ListAddressFromCommunicationRegisterResultsModel, 
	ListRegisteredAddressesForUserModel, 
	ListRegisteredAddressesModel, 
	RequestAddressesInformationModel 
} from './models';
import { DefaultResponseModel } from '../../models/index';
import {} from "./models";

/**
 * Request forwarded Addresses information
 *
 * https://docs.wildduck.email/api/#operation/getForwardedAddress
 *
 * @param addressId ID of the Address
 */
export const getForwardedAddressesInformation = async (
	addressId: string
): Promise<GetForwardedAddressesInformationModel> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Request Addresses information
 *
 * https://docs.wildduck.email/api/#operation/getForwardedAddress
 *
 * @param userId ID of the User
 * @param addressId ID of the Address
 */
export const requestAddressesInformation = async (
	userId: string,
	addressId: string
): Promise<RequestAddressesInformationModel> => {
	const url = urlQueryBuilder(`/user/${userId}/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Get Address info
 *
 * https://docs.wildduck.email/api/#operation/resolveAddress
 *
 * @param addressId ID of the Address or e-mail address string
 * @param allowWildcard If true then resolves also wildcard addresses
 */
export const getAddressInformation = async (
	addressId: string,
	allowWildcard: boolean
): Promise<GetAddressInformationModel> => {
	const url = urlQueryBuilder(`${URL}/${addressId}/updates`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List registered Addresses
 *
 * https://docs.wildduck.email/api/#operation/getAddresses
 *
 * @param query Partial match of an address
 * @param forward Partial match of a forward email address or URL
 * @param tags Comma separated list of tags. The Address must have at least one to be set
 * @param requiredTags Comma separated list of tags. The Address must have all listed tags to be set
 * @param metaData If true, then includes metaData in the response
 * @param internalData If true, then includes internalData in the response. Not shown for user-role tokens
 * @param limit How many records to return
 * @param page Current page number. Informational only, page numbers start from 1
 * @param next Cursor value for next page, retrieved from nextCursor response value
 * @param previous Cursor value for previous page, retrieved from previousCursor response value
 */
export const listRegisteredAddresses = async (
	query: string,
	forward: string,
	tags: string,
	requiredTags: string,
	metaData: boolean,
	internalData: boolean,
	limit: number,
	page: number,
	next: string,
	previous: string
): Promise<ListRegisteredAddressesModel> => {
	const url = urlQueryBuilder(`${URL}/resolve/${query}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
/**
 * List addresses from communication register
 *
 * https://docs.wildduck.email/api/#operation/getUserAddressregister
 *
 * @param userId ID of the User
 */
export const listAddressesFromCommunicationRegister = async (
	userId: string
): Promise<ListAddressFromCommunicationRegisterResultsModel> => {
	const url = urlQueryBuilder(`/user/${userId}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * List registered Addresses for a User
 *
 * https://docs.wildduck.email/api/#operation/getUserAddresses
 * 
 * @param userId ID of the User
 * @param metaData If true, then includes metaData in the response
 * @param internalData If true, then includes internalData in the response. Not shown for user-role tokens
 */
export const listRegisteredAddressesForUser = async (
	userId: string,
	internalData: boolean,
	metaData?: boolean
): Promise<ListRegisteredAddressesForUserModel> => {
	const url = urlQueryBuilder(`/user/${userId}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};