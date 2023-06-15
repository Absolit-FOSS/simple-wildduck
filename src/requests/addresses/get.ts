import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetAddressInfoQueryParametersModel,
	GetAddressInfoResponseModel,
	GetAddressesInfoResponseModelModel,
	GetForwardedAddressInfoResponseModel,
	ListAddressesFromCommunicationRegisterQueryParametersModel,
	ListAddressesFromCommunicationRegisterResponseModel,
	ListRegisteredAddressesForUserQueryParametersModel,
	ListRegisteredAddressesForUserResponseModel,
	ListRegisteredAddressesQueryParametersModel,
	ListRegisteredAddressesResponseModel,
} from "./models";

/**
 * Request forwarded Addresses information
 *
 * https://docs.wildduck.email/api/#operation/getForwardedAddress
 *
 * @param addressId ID of the Address
 */
export const getForwardedAddressInfo = async (
	addressId: string
): Promise<AxiosResponse<GetForwardedAddressInfoResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetForwardedAddressInfoResponseModel>(url);

	return res;
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
	addressId: string
): Promise<AxiosResponse<GetAddressesInfoResponseModelModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/addresses/${addressId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetAddressesInfoResponseModelModel>(url);

	return res;
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
	queryData?: GetAddressInfoQueryParametersModel
): Promise<AxiosResponse<GetAddressInfoResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/resolve/${addressId}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<GetAddressInfoResponseModel>(url);

	return res;
};

/**
 * List registered Addresses
 *
 * https://docs.wildduck.email/api/#operation/getAddresses
 *
 * @param userId ID of the User
 * @param queryData query parameters for additional options
 */
export const listRegisteredAddresses = async (
	queryData?: ListRegisteredAddressesQueryParametersModel
): Promise<AxiosResponse<ListRegisteredAddressesResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListRegisteredAddressesResponseModel>(url);

	return res;
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
	queryData?: ListRegisteredAddressesForUserQueryParametersModel
): Promise<AxiosResponse<ListRegisteredAddressesForUserResponseModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/addresses`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListRegisteredAddressesForUserResponseModel>(
		url
	);

	return res;
};

/**
 * Lists addresses from email headers. Includes addresses both from sent and received messages. Sorted by last usage
 *
 * https://docs.wildduck.email/api/#operation/getUserAddressregister
 *
 * @param userId ID of the User, Example: 507f1f77bcf86cd799439011
 * @param queryData query parameters for additional options
 */
export const listAddressesFromCommunicationRegister = async (
	userId: string,
	queryData?: ListAddressesFromCommunicationRegisterQueryParametersModel
): Promise<
	AxiosResponse<ListAddressesFromCommunicationRegisterResponseModel, any>
> => {
	const url = urlQueryBuilder(`/users/${userId}/addressregister`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res =
		await axiosConf.get<ListAddressesFromCommunicationRegisterResponseModel>(
			url
		);

	return res;
};
