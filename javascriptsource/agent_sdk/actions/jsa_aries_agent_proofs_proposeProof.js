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
 * proposeProof(options: AriesCore.ProposeProofOptions<[AriesCore.IndyProofFormat], [AriesCore.V1ProofService, AriesCore.V2ProofService<[AriesCore.IndyProofFormat]>]>): Promise<AriesCore.ProofExchangeRecord>
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} protocolVersion
 * @param {string} proofFormats - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_proofs_proposeProof(agent_key, connectionId, protocolVersion, proofFormats) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");	//mandatory
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");		//mandatory
		if(protocolVersion==null)return Promise.reject("Invalid protocolVersion parameter");		//mandatory
		if(proofFormats==null)return Promise.reject("Invalid proofFormats parameter");		//mandatory
		try{
			proofFormats=JSON.parse(proofFormats);
		}catch(e){
			return Promise.reject("Argument proofFormats is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let options={};
		if(connectionId!=null)options.connectionId=connectionId;
		if(protocolVersion!=null)options.protocolVersion=protocolVersion;
		if(proofFormats!=null)options.proofFormats=proofFormats;
		return Promise.resolve(JSON.stringify(await agent.proofs.proposeProof(options)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
