import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	RenameDomainInAddressesBodyParametersModel,
	UpdateAddressInforBodyParametersModel,
	UpdateForwardedAddressInforBodyParametersModel
} from "./models";

/**
 * Update forwarded Address information
 *
 * https://docs.wildduck.email/api/#operation/updateForwardedAddress
 *
 * @param addressId ID of the Address
 * @param bodyData data to update on the user
 */
export const updateUser = async (
	addressId: string,
	bodyData: UpdateForwardedAddressInforBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		access_token: wdData.accessToken,
		// fix ...queryData
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};

/**
 * Update Address information
 * 
 * https://docs.wildduck.email/api/#operation/updateUserAddress
 * 
 * @param userId ID of the User
 * @param addressId ID of the Address
 * @param bodyData data to update on the user
 */
export const updateAddressInfo = async (
	userId: string,
	addressId: string,
	bodyData: UpdateAddressInforBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`/users/${userId}/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};

/**
 * Rename domain in addresses
 * 
 * https://docs.wildduck.email/api/#operation/renameDomain
 * 
 * @param userId ID of the User
 * @param bodyData data to update on the user
 */
export const renameDomainInAddresses = async (
	userId: string,
	bodyData: RenameDomainInAddressesBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}/renameDomain`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};