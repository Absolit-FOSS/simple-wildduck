import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultMailboxModel, DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { GetAddressesInfoResponseModelModel, GetAddressInfoQueryParametersModel, GetAddressInfoResponseModel, GetForwardedAddressInfoResponseModel, ListAddressesFromCommunicationRegisterQueryParametersModel, ListAddressesFromCommunicationRegisterResponseModel, ListRegisteredAddressesForUserQueryParametersModel, ListRegisteredAddressesForUserResponseModel, ListRegisteredAddressesQueryParametersModel, ListRegisteredAddressesResponseModel, UpdateAddressInforBodyParametersModel } from "./models";

/**
 * Request forwarded Addresses information
 *
 * https://docs.wildduck.email/api/#operation/getForwardedAddress
 *
 * @param addressId ID of the Address
 */
export const getForwardedAddressInfo = async (
	addressId: string
): Promise<GetForwardedAddressInfoResponseModel> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Request Addresses information
 *
 * https://docs.wildduck.email/api/#operation/getUserAddress
 *
 * @param userId ID of the User
 * @param addressId ID of the Address
 */
export const getAddressesInfo = async (
	userId: string,
	addressId: string,
	bodyData: UpdateAddressInforBodyParametersModel
): Promise<GetAddressesInfoResponseModelModel> => {
	const url = urlQueryBuilder(`/users/${userId}/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};

/**
 * Get Address info
 *
 * https://docs.wildduck.email/api/#operation/resolveAddress
 *
 * @param addressId ID of the Address or e-mail address string
 * @param queryData query parameters for additional options
 */
export const getAddressInfo = async (
	addressId: string,
	queryData: GetAddressInfoQueryParametersModel
): Promise<GetAddressInfoResponseModel> => {
	const url = urlQueryBuilder(`${URL}/resolve/${addressId}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.put(url);

	return res.data;
};

/**
 * List registered Addresses
 *
 * https://docs.wildduck.email/api/#operation/getAddresses
 *
 * @param queryData query parameters for additional options
 */
export const listRegisteredAddresses = async (
	queryData: ListRegisteredAddressesQueryParametersModel
): Promise<ListRegisteredAddressesResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.put(url);

	return res.data;
};

/**
 * List registered Addresses for a User
 *
 * https://docs.wildduck.email/api/#operation/getUserAddresses
 *
 * @param userId ID of the User
 * @param queryData query parameters for additional options
 */
export const listRegisteredAddressesForUser = async (
	userId: string,
	queryData: ListRegisteredAddressesForUserQueryParametersModel
): Promise<ListRegisteredAddressesForUserResponseModel> => {
	const url = urlQueryBuilder(`/users/${userId}/address`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.put(url);

	return res.data;
};

/**
 * List addresses from communication register
 * Lists addresses from email headers. Includes addresses both from sent and received messages. Sorted by last usage
 *
 * https://docs.wildduck.email/api/#operation/getUserAddressregister
 *
 * @param userId ID of the User, Example: 507f1f77bcf86cd799439011
 * @param queryData query parameters for additional options
 */
export const listAddressesFromCommunicationRegister = async (
	userId: string,
	queryData: ListAddressesFromCommunicationRegisterQueryParametersModel
): Promise<ListAddressesFromCommunicationRegisterResponseModel> => {
	const url = urlQueryBuilder(`/users/${userId}/addressregister`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.put(url);

	return res.data;
};