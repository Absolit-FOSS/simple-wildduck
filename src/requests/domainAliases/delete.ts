import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteAliasModel } from "./models";

/**
 * Delete an Alias
 *
 * https://docs.wildduck.email/api/#operation/deleteDomainAlias
 *
 * @param aliasId the users wildduck ID
 */
export const deleteAlias = async (
	aliasId: string,
): Promise<DeleteAliasModel> => {
	const url = urlQueryBuilder(`${URL}/${aliasId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
