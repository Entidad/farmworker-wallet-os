// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} sharedPreferencesName
 * @returns {Promise.<void>}
 */
export async function jsa_web_deleteAllItems(sharedPreferencesName) {
	// BEGIN USER CODE
	return new Promise(function(resolve,reject){
		try{
			localStorage.removeItem(sharedPreferencesName);
			resolve();
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}