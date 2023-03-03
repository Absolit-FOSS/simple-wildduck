import { urlQueryBuilder } from "@netsu/js-utils";
import { CreationResponseModel } from "../../models/index";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewAuditBodyParametersModel } from "./models";

/**
 * Create new audit
 *
 * https://docs.wildduck.email/api/#operation/createAudit
 *
 * @param bodyData body parameters to reset user password
 */
export const createNewAudit = async (
	bodyData: CreateNewAuditBodyParametersModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(URL, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
