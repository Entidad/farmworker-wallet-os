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
import support from "../support/entidad";
// END EXTRA CODE

/**
 *   private async storeCredentialDefinitionPrivateAndKeyCorrectnessRecord(
 *     result: RegisterCredentialDefinitionReturn,
 *     credentialDefinitionPrivate?: Record<string, unknown>,
 *     keyCorrectnessProof?: Record<string, unknown>
 *   ): Promise<void>
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/b2ba7c7197139e780cbb95eed77dc0a2ad3b3210/packages/anoncreds/src/AnonCredsApi.ts
 * 
 * @param {string} agent_key
 * @param {string} result - json
 * @param {string} credentialDefinitionPrivate - json
 * @param {string} keyCorrectnessProof - json
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_modules_anoncreds_storeCredentialDefinitionPrivateAndKeyCorrectnessRecord(agent_key, result, credentialDefinitionPrivate, keyCorrectnessProof) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");							//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		throw("unimplemented");
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
