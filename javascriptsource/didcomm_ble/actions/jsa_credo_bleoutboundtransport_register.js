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
import{BleOutboundTransport}from"@credo-ts/transport-ble";
import support from"../../agent_sdk/support/entidad";
import{cache}from"../support/entidad";
// END EXTRA CODE

/**
 * https://github.com/openwallet-foundation/credo-ts-ext/tree/main/packages/transport-ble
 * @param {string} agent_key
 * @returns {Promise.<void>}
 */
export async function jsa_credo_bleoutboundtransport_register(agent_key) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let peripheral=cache.get("peripheral");
		if(peripheral==null)return(Promise.reject("Peripheral not found in cache"));
		const bleOutboundTransport=new BleOutboundTransport(peripheral);
		agent.registerOutboundTransport(bleOutboundTransport);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}