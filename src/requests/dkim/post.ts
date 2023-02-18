import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
  CreateUserBodyParameterModel,
  CreateUserResponseModel,
  RecalculateUserQuotaResponseModel,
  ResetUserPasswordBodyParametersModel,
  ResetUserPasswordResponseModel,
} from "./models";

/**
 * Add a new DKIM key for a Domain or update existing one.
 * There can be single DKIM key registered for each domain name
 * 
 * Create or update DKIM key for domain
 *
 * https://docs.wildduck.email/api/#operation/updateDkimKey
 *
 * no parameters
 */
export const createOrUpdateDkimKeyForDomain = async (): Promise<CreateUserResponseModel> => {
  const url = urlQueryBuilder(`${URL}/`, {
    access_token: wdData.accessToken,
  });

  const res = await axiosConf.post(url);

  return res.data;
};
