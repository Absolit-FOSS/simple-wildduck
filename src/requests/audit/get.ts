import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultMailboxModel } from "../../models/index";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { GetAuditInformationResponseModel } from "./models";

/**
 * Request Audit Info
 *
 * https://docs.wildduck.email/api/#operation/getauditaudit
 *
 * @param auditId ID of the Audit
 */
export const getAuditInformation = async (
	auditId: string
): Promise<AxiosResponse<GetAuditInformationResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${auditId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<GetAuditInformationResponseModel>(url);

	return res;
};

/**
 * Export Audited Emails
 *
 * https://docs.wildduck.email/api/#operation/getauditauditexportmbox
 *
 * @param auditId ID of the Audit
 */
export const exportAuditedEmails = async (
	auditId: string
): Promise<AxiosResponse<DefaultMailboxModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${auditId}/export.mbox`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<DefaultMailboxModel>(url);

	return res;
};
