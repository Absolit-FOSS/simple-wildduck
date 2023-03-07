import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a Filter
 *
 * https://docs.wildduck.email/api/#operation/deleteFilter
 *
 * @param userId Users unique ID
 * @param filterId Filters unique ID
 */
export const deleteFilter = async (
	userId: string,
	filterId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${filterId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.delete(url);

	return res.data;
};
