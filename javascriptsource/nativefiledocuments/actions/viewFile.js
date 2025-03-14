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

import NativeFileDocumentsUtils from "../nativefiledocumentsutils";
import RNFS from "react-native-fs";
import FileViewer from "react-native-file-viewer";
import { Platform } from 'react-native';

// END EXTRA CODE

/**
 * View document. Returns immediately after opening the file.
 * @param {string} filepath - The path to the file
 * @param {"NativeFileDocuments.PathType.FullPath"|"NativeFileDocuments.PathType.DocumentsDirectory"} pathType
 * @param {boolean} writeToLog
 * @returns {Promise.<boolean>}
 */
export async function viewFile(filepath, pathType, writeToLog) {
	// BEGIN USER CODE
	return new Promise(function (resolve, reject) {
		if (!filepath) {
			reject(new Error("No file path specified"));
		}
		if (!pathType) {
			reject(new Error("No path type specified"));
		}
		if (writeToLog) {
			NativeFileDocumentsUtils.writeToLog({
				actionName: "viewFile",
				logType: "Parameters",
				logMessage: JSON.stringify({
					filepath: filepath,
					pathType: pathType
				})
			});
		}

		const fullPath = NativeFileDocumentsUtils.getFullPathNoPrefix(filepath, pathType, RNFS, Platform.OS);

		if (writeToLog) {
			NativeFileDocumentsUtils.writeToLog({
				actionName: "viewFile",
				logType: "Info",
				logMessage: "Full path: " + fullPath
			});
		}

		FileViewer.open(fullPath).then(() => {
			resolve(true);
		}).catch(() => {
			reject(new Error("Failed to open document")); // Device has no app for the file type
		});

	});
	// END USER CODE
}
