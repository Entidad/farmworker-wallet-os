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

import DocumentPicker from "react-native-document-picker";
import NativeFileDocumentsUtils from "../nativefiledocumentsutils";

// END EXTRA CODE

/**
 * @param {string} allowedTypes - Empty to allow any file. One or more key values of enumeration DocumentType. Separate multiple values with a comma
 * @param {boolean} writeToLog
 * @returns {Promise.<MxObject>}
 */
export async function openDocumentPicker(allowedTypes, writeToLog) {
	// BEGIN USER CODE
	const resultMxObj = await NativeFileDocumentsUtils.createMxObject("NativeFileDocuments.DocumentPickerResult");

	try {
		// The contents of the file can only be directly accessed when copying it.
		// Otherwise, Android will return another type of URI that needs to be resolved first 
		const options = {
			type: [DocumentPicker.types.allFiles],
			copyTo: "cachesDirectory"
		};

		if (allowedTypes) {
			const allowedTypeArray = [];
			for (const allowedType of allowedTypes.split(",")) {
				const documentPickerType = DocumentPicker.types[allowedType];
				if (documentPickerType) {
					allowedTypeArray.push(documentPickerType);
				} else {
					const errorMessage = "openDocumentPicker: unknown type: " + allowedType;
					console.error(errorMessage);
					return Promise.reject(new Error(errorMessage)); 
				}
			}
			options.type = allowedTypeArray;
		}

		if (writeToLog) {
			NativeFileDocumentsUtils.writeToLog({
				actionName: "openDocumentPicker",
				logType: "Parameters",
				logMessage: JSON.stringify(options)
			});
		}

		const pickerResult = await DocumentPicker.pickSingle(options);
		if (writeToLog) {
			NativeFileDocumentsUtils.writeToLog({
				actionName: "openDocumentPicker",
				logType: "Info",
				logMessage: "Result: " + JSON.stringify(pickerResult)
			});
		}

		resultMxObj.set("DocumentPicked", true);
		resultMxObj.set("Name", pickerResult.name);
		resultMxObj.set("Uri", pickerResult.fileCopyUri ? pickerResult.fileCopyUri : pickerResult.uri);
		resultMxObj.set("FileType", pickerResult.type);
		return resultMxObj;

	} catch(err) {
		if (DocumentPicker.isCancel(err)) {
			if (writeToLog) {
				NativeFileDocumentsUtils.writeToLog({
					actionName: "openDocumentPicker",
					logType: "Info",
					logMessage: "Cancelled by user"
				});
			}
			return resultMxObj;
		} else {
			if (writeToLog) {
				NativeFileDocumentsUtils.writeToLog({
					actionName: "openDocumentPicker",
					logType: "Exception",
					logMessage: JSON.stringify(err)
				});
			}
			return Promise.reject(err);
		}
	}

	// END USER CODE
}