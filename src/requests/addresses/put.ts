import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateForwardedAddressInformationModel, UpdateAddressInformationModel } from './models';

/**
 * Update forwarded Address information
 *
 * https://docs.wildduck.email/api/#operation/updateForwardedAddress
 *
 * @param addressId ID of the Address
 */
export const updateForwardsAddressInformation = async (
	addressId: string,
): Promise<UpdateForwardedAddressInformationModel> => {
	const url = urlQueryBuilder(`${URL}/${addressId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url);

	return res.data;
};

/**
 * Update Address information
 *
 * https://docs.wildduck.email/api/#operation/updateUserAddress
 *
 * @param userId ID of the User
 * @param addressId ID of the Address
 */
export const updateAddressInformation = async (
	userId: string,
	addressId: string
): Promise<UpdateAddressInformationModel> => {
	const url = urlQueryBuilder(`/user/${userId}/logout`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url);

	return res.data;
};

/**
 * Rename domain in addresses
 *
 * https://docs.wildduck.email/api/#operation/renameDomain
 *
 * @param oldDomain Old Domain Name
 * @param newDomain New Domain Name
 */
export const renameDomainInAddresses = async (
	oldDomain: string,
	newDomain: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${newDomain}/logout`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url);

	return res.data;
};

// help requested, I feel a tad unsure about this one