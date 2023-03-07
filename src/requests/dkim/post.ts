import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateOrUpdateDkimKeyForDomainBodyParametersModel,
	CreateOrUpdateDkimKeyForDomainResponseModel,
} from "./models";

/**
 * Add a new DKIM key for a Domain or update existing one.
 * There can be single DKIM key registered for each domain name
 *
 * https://docs.wildduck.email/api/#operation/updateDkimKey
 *
 * @param bodyData body parameters to reset user password
 */
export const createOrUpdateDkimKeyForDomain = async (
	bodyData: CreateOrUpdateDkimKeyForDomainBodyParametersModel
): Promise<CreateOrUpdateDkimKeyForDomainResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
