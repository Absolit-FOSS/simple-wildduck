import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteAddressModel, DeleteForwardedAddressModel } from "./models";

/**
 * Delete a forwarded Address
 *
 * https://docs.wildduck.email/api/#operation/deleteForwardedAddress
 *
 * @param addressId ID of the Address
 */
export const deleteForwardedAddress = async (
	addressId: string,
): Promise<DeleteForwardedAddressModel> => {
	const url = urlQueryBuilder(`${URL}/forwarded/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};

/**
 * Delete an Address
 *
 * https://docs.wildduck.email/api/#operation/deleteUserAddress
 * 
 * @param userId ID of the Address
 * @param addressId ID of the Address
 */
export const deleteAnAddress = async (
	userId: string,
	addressId: string,
): Promise<DeleteAddressModel> => {
	const url = urlQueryBuilder(`/users/${userId}/forwarded/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
