import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a Filter
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuserfiltersfilter
 *
 * @param userId Users unique ID
 * @param filterId Filters unique ID
 */
export const deleteFilter = async (
	userId: string,
	filterId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${filterId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
