import { AxiosResponse } from "axios";
import { UserIdentifierModel } from "../../models";

export interface ValidateTOTPTokenBodyParameterModel
	extends UserIdentifierModel {
	/**
	 * 6-digit number
	 */
	token: string;
}

export interface EnableTOTPSeedBodyParameterModel extends UserIdentifierModel {
	/**
	 * 6-digit number that matches seed value from 2fa/totp/setup
	 */
	token: string;
}

export interface GenerateTOTPSeedBodyParameterModel
	extends UserIdentifierModel {
	/**
	 * Label text for QR code (defaults to username)
	 */
	label?: "string";
	/**
	 * Description text for QR code (defaults to "WildDuck")
	 */
	issuer?: "string";
}

export interface GenerateTOTPSeedResponseModel extends AxiosResponse<any, any> {
	data: {
		/**
		 * Indicates successful response
		 */
		success: boolean;
		/**
		 * Generated TOTP seed value
		 */
		seed: string;
		/**
		 * Base64 encoded QR code
		 */
		qrcode: string;
	};
}
