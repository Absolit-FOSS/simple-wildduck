import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a DKIM key
 *
 * https://docs.wildduck.email/api/#operation/deleteDkimKey
 *
 * @param dkimId ID of the DKIM
 */
export const deleteDkimKey = async (
	dkimId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${dkimId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
