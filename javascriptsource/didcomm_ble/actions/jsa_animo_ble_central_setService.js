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
// END EXTRA CODE

/**
 * (method) Central.setService(options: ServiceOptions): Promise<void>
 * 
 * ServiceOptions
 * 
 * export type ServiceOptions = {
 *   serviceUUID: string
 *   messagingUUID: string
 *   indicationUUID: string
 * }
 * @param {string} serviceUUID
 * @param {string} messagingUUID
 * @param {string} indicationUUID
 * @returns {Promise.<void>}
 */
export async function jsa_animo_ble_central_setService(serviceUUID, messagingUUID, indicationUUID) {
	// BEGIN USER CODE
	try{
		if(serviceUUID==null)return(Promise.reject("serviceUUID null"));
		if(messagingUUID==null)return(Promise.reject("messagingUUID null"));
		if(indicationUUID==null)return(Promise.reject("indicationUUID null"));
		let options={
			serviceUUID:serviceUUID,
			messagingUUID:messagingUUID,
			indicationUUID:indicationUUID
		};
		let central=cache.get("central");
		if(central==null)return(Promise.reject("Central not found in cache"));
		await central.setService(options);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}