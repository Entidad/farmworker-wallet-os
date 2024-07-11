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
import "../../agent_sdk/shim.js";
import{cache}from"../support/entidad";
//import support from"../support/entidad";
// END EXTRA CODE

/**
 * Looks up singleton ble central in cache
 * @returns {Promise.<boolean>}
 */
export async function jsa_animo_ble_peripheral_initialized() {
	// BEGIN USER CODE
	try{
		return Promise.resolve(cache.get('peripheral')!=null);		
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}