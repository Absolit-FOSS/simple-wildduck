import { CursorResponseModel, PageQueryModel } from "../../models";

export interface GetStoredFilesQueryParametersModel extends PageQueryModel {
	/**
	 * Partial match of a filename
	 */
	query?: string;
}

export interface GetStoredFilesResponseModel extends CursorResponseModel {
	/**
	 * File listing
	 */
	results: {
		/**
		 * ID of the File
		 */
		id: string;
		/**
		 * Filename
		 */
		filename: string;
		/**
		 * Content-Type of the file
		 */
		contentType: string;
		/**
		 * File size
		 */
		size: number;
	}[];
}

export interface UploadFileToStorageBodyParameterModel {
	/**
	 * Name of the file
	 */
	filename?: string;
	/**
	 * MIME type of the file. Is detected from the file name by default
	 */
	contentType?: string;
	/**
	 * Encoding of the file content. Useful if you want to
	 * upload the file in base64 encoded format. Valid
	 * options "base64", "hex", "utf8"
	 */
	encoding?: string;
	/**
	 * Binary file
	 */
	content: string | Buffer;
}
