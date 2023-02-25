import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewAuditResponseModel } from "./models";

/**
 * Create new audit
 * Initiates a message audit
 *
 * https://docs.wildduck.email/api/#operation/createAudit
 *
 * No path parameters
 */
export const createNewAudit = async (): Promise<CreateNewAuditResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};
