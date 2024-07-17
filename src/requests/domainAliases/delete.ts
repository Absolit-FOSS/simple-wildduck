import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete an Alias
 *
 * https://docs.wildduck.email/api/#operation/deletedomainaliasesalias
 *
 * @param aliasId the users wildduck ID
 */
export const deleteAlias = async (
	aliasId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${aliasId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
