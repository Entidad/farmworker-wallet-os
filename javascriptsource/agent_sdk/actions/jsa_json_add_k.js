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
import "../shim.js";
// END EXTRA CODE

/**
 * @param {string} json
 * @param {string} k
 * @param {string} v
 * @returns {Promise.<string>}
 */
export async function jsa_json_add_k(json, k, v) {
	// BEGIN USER CODE
	return new Promise((resolve,reject)=>{
		try{
			let j=JSON.parse(json);
			j[k]=v;
			resolve(JSON.stringify(j));
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}
