import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewAuditModel } from "./models";

/**
 * Create new audit
 *
 * https://docs.wildduck.email/api/#operation/createAudit
 *
 * @param userId Users unique ID
 * @param start Start time as ISO date <date-time>
 * @param end End time as ISO date <date-time>
 * @param expires Expiration date. Audit data is deleted after this date <date-time>
 */
export const createNewAudit = async (
	userId: string,
	expires: string,
	start?: string,
	end?: string
): Promise<CreateNewAuditModel> => {
	const url = urlQueryBuilder(`/user/${userId}/audit/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};
