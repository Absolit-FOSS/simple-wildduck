import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewAuditBodyParametersModel } from "./models";
import { CreationResponseModel } from '../../models/index';

/**
 * Create new audit
 * Initiates a message audit
 *
 * https://docs.wildduck.email/api/#operation/createAudit
 *
 * @param bodyData body parameters to reset user password
 */
export const createNewAudit = async (
	bodyData: CreateNewAuditBodyParametersModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`/audit`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
