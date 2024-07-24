import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a TLS certificate
 *
 * https://docs.wildduck.email/api/#operation/deletecertscert
 *
 * @param certId ID of the TLS certificate
 */
export const deleteTlsCert = async (
	certId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${certId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
