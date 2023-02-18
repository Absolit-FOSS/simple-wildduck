import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteUserQueryParametersModel } from "./models";

/**
 * Delete a TLS certificate
 *
 * https://docs.wildduck.email/api/#operation/deleteTlsCert
 *
 * @param certId ID of the TLS certificate
 */
export const deleteTlsCert = async (
	certId: string,
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${certId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
