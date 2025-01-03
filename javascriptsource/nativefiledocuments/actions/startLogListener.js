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
import RNFS from "react-native-fs";
import { Platform } from 'react-native';

// END EXTRA CODE

/**
 * Starts the log listener. Throws an error if log listener was already active
 * @param {string} logFolderPath - Folder for the log files. May be a folder path. Must not start or end with '/'
 * @returns {Promise.<void>}
 */
export async function startLogListener(logFolderPath) {
	// BEGIN USER CODE

	return LogListener.startListener(logFolderPath, RNFS, Platform.OS);

	// END USER CODE
}
