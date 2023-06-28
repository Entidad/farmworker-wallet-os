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
// END EXTRA CODE

/**
 * Slices JSON array
 * 
 * start and end are both optional
 * @param {string} json
 * @param {Big} start - optional
 * @param {Big} end - optional
 * @returns {Promise.<string>}
 */
export async function jsa_json_array_slice(json, start, end) {
	// BEGIN USER CODE
	try{
		if(json==null||json.length==0)return Promise.resolve(false);
		json=JSON.parse(json);
		if(!Array.isArray(json))return Promise.reject("Not an array");
		      if(start!=null&&end!=null){
			return Promise.resolve(JSON.stringify(json.slice(start,end)));
		}else if(start!=null&&end==null){
			return Promise.resolve(JSON.stringify(json.slice(start)));
		}else if(start==null&&end!=null){
			return Promise.reject("Invalid parameter combination");
		}else if(start==null&&end==null){
			return Promise.resolve(JSON.stringify(json.slice()));
		}
	}catch(e){
		return Promise.resolve(false);
	}
	// END USER CODE
}