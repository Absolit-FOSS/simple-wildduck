export interface ExportUserDataBodyParameterModel {
	/**
	 * An array of User ID values to export
	 */
	users?: string[];
	/**
	 * An array of user tags to export.
	 * If set then at least one tag must exist on an user.
	 */
	tags?: string[];
}

export interface ImportUserDataResponseModel {
	/**
	 * How many database entries were found from the
	 * export file
	 */
	entries?: number;
	/**
	 * How many database entries were imported from the
	 * export file
	 */
	imported?: number;
	/**
	 * How many database entries were not imported due to
	 * some error
	 */
	failed?: number;
	/**
	 * How many database existing entries were not imported
	 */
	existing?: number;
}
