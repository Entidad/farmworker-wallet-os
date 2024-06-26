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
 * selectCredentialsForRequest(options: SelectCredentialsForProofRequestOptions<any>): Promise<SelectCredentialsForProofRequestReturn<any>>
 * @param {string} agent_key
 * @param {string} options - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_proofs_selectCredentialsForRequest(agent_key, options) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)/*mandatory*/return Promise.reject("Invalid agent_key parameter");
		if(options==null)/*mandatory*/return Promise.reject("Invalid options parameter");
		try{
			options=JSON.parse(options);
		}catch(e){
			return Promise.reject("Argument options is not a valid json object")
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.proofs.selectCredentialsForRequest(options)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
