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
let _=null;
// END EXTRA CODE

/**
 * Adds callback to mendix mx.reload api call
 * This function is used when the react native application is restarted from the mendix modeler
 * @param {Nanoflow} callback
 * @returns {Promise.<void>}
 */
export async function jsa_before_reload(callback) {
	// BEGIN USER CODE
	try{
		if(callback==null)return Promise.reject("Argument callback has invalid value.");
		if(_==null)_=mx.reload;
		mx.reload=async ()=>{
				try{
					await callback({});
				}catch(e){}
				await _();
		};
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
