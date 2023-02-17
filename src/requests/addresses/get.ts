import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { GetForwardedAddressesInformationModel } from './models';
import { DefaultResponseModel } from '../../models/index';
import {
	GetDeletedUserInfoResponseModel,
	GetUserIdByUsernameResponseModel,
	GetUserResponseModel,
	GetUsersQueryParametersModel,
	GetUsersResponseModel,
} from "./models";

/**
 * Request forwarded Addresses information
 *
 * https://docs.wildduck.email/api/#operation/getForwardedAddress
 *
 * @param addressId ID of the Address
 */
export const getForwardedAddressesInformation = async (
	addressId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${addressId}`, {
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
export const requestc = async (
	userId: string,
	addressId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
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
): Promise<GetUserResponseModel> => {
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
 * @param username the users wildduck username
 */
export const listRegisteredAddresses = async (
	username: string
): Promise<GetUserIdByUsernameResponseModel> => {
	const url = urlQueryBuilder(`${URL}/resolve/${username}`, {
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
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
