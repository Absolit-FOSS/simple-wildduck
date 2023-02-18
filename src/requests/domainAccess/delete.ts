import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteUserQueryParametersModel } from "./models";

/**
 * Delete a Domain from listing
 *
 * https://docs.wildduck.email/api/#operation/deleteDomainListing
 *
 * @param domainId Listed domains unique ID
 */
export const deleteDomainFromListing = async (
	domainId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${domainId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
