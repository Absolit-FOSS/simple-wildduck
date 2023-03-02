import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { GetAuditInformationResponseModel } from "./models";
import { DefaultMailboxModel } from '../../models/index';

/**
 * Request Audit Info
 *
 * https://docs.wildduck.email/api/#operation/getAudit
 *
 * @param auditId ID of the Audit
 */
export const getAuditInformation = async (
	auditId: string,
): Promise<GetAuditInformationResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{auditId}", auditId)}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Export Audited Emails
 *
 * https://docs.wildduck.email/api/#operation/getAuditEmails
 *
 * @param auditId ID of the Audit
 */
export const exportAuditedEmails = async (
	auditId: string
): Promise<DefaultMailboxModel> => {
	const url = urlQueryBuilder(`${URL.replace("{auditId}", auditId)}/export.mbox`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

