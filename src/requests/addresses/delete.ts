import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a forwarded Address.
 *
 * https://docs.wildduck.email/api/#operation/deleteaddressesforwardedaddress
 *
 * @param addressId ID of the Address
 */
export const deleteForwardedAddress = async (
	addressId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};

/**
 * Delete an Address.
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuseraddressesaddress
 *
 * @param userId ID of the User
 * @param addressId ID of the Address
 */
export const deleteAddress = async (
	userId: string,
	addressId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/addresses/${addressId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
