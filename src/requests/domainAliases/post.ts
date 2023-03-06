import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewDomainAliasBodyParameterModel } from "./models";

/**
 * Add a new Alias for a Domain.
 * This allows to accept mail on username@domain and username@alias
 *
 * https://docs.wildduck.email/api/#operation/createDomainAlias
 *
 * @param bodyData body parameters to reset user password+
 */
export const createNewDomainAlias = async (
	bodyData: CreateNewDomainAliasBodyParameterModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(URL, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
