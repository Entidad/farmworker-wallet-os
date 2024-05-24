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
import support from"../support/entidad";
// END EXTRA CODE

/**
 * queueMessage(connectionId: string, message: AriesCore.EncryptedMessage): Promise<void>
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} message - json?
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_mediator_queueMessage(agent_key, connectionId, message) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");										//mandatory
		if(message==null)return Promise.reject("Invalid message parameter");										//mandatory
		try{
			message=JSON.parse(message);
		}catch(e){
			return Promise.reject("Argument message is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		await agent.mediator.queueMessage(connectionId,message);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}