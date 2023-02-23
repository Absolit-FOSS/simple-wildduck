import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { RequestAuditInformationModel } from "./models";
import { DefaultMailboxModel } from '../../models/index';

/**
 * Request Audit Info
 *
 * https://docs.wildduck.email/api/#operation/getAudit
 *
 * @param auditId ID of the Audit
 */
export const requestAuditInformation = async (
	auditId: string
): Promise<RequestAuditInformationModel> => {
	const url = urlQueryBuilder(`/user/${auditId}`, {
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
	const url = urlQueryBuilder(`/users/mailboxes/${auditId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

