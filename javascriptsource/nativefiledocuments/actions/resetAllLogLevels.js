// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE

import LogListener from "../LogListener";

// END EXTRA CODE

/**
 * Reset all log levels to the specified level.
 * @param {"NativeFileDocuments.LogLevel.trace"|"NativeFileDocuments.LogLevel.debug"|"NativeFileDocuments.LogLevel.info"|"NativeFileDocuments.LogLevel.warning"|"NativeFileDocuments.LogLevel.error"|"NativeFileDocuments.LogLevel.critical"|"NativeFileDocuments.LogLevel.none"} logLevel
 * @returns {Promise.<void>}
 */
export async function resetAllLogLevels(logLevel) {
	// BEGIN USER CODE
	LogListener.resetAll(logLevel);
	// END USER CODE
}