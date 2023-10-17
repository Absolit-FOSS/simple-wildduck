import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	RenameDomainInAddressesBodyParametersModel,
	UpdateAddressInfoBodyParametersModel,
	UpdateForwardedAddressInfoBodyParametersModel,
} from "./models";

/**
 * Update forwarded Address information
 *
 * https://docs.wildduck.email/api/#operation/updateForwardedAddress
 *
 * @param addressId ID of the Address
 * @param bodyData data to update on the user
 */
export const updateForwardedAddressInfo = async (
	addressId: string,
	bodyData: UpdateForwardedAddressInfoBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};

/**
 * Update Address information
 * Renames domain names for addresses, DKIM keys and Domain Aliases
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
	bodyData: UpdateAddressInfoBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/addresses/${addressId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};

/**
 * Rename domain in addresses
 *
 * https://docs.wildduck.email/api/#operation/renameDomain
 *
 * @param bodyData data to update on the user
 */
export const renameDomainInAddresses = async (
	bodyData: RenameDomainInAddressesBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/renameDomain`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};
