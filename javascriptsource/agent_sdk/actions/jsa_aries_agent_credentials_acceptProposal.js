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
 * https://github.com/hyperledger/aries-framework-javascript/blob/dbfebb4720da731dbe11efdccdd061d1da3d1323/packages/core/src/modules/credentials/CredentialsApi.ts
 * 
 *   acceptProposal(options: AcceptCredentialProposalOptions<CPs>): Promise<CredentialExchangeRecord>
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/dbfebb4720da731dbe11efdccdd061d1da3d1323/packages/core/src/modules/credentials/CredentialsApiOptions.ts#L120
 * 
 * 
 *  * Interface for CredentialsApi.acceptProposal. Will send an offer
 *  * credentialFormats is optional because this is an accept method
 * 
 * export interface AcceptCredentialProposalOptions<CPs extends CredentialProtocol[] = CredentialProtocol[]>
 *   extends BaseOptions {
 *   credentialRecordId: string
 *   credentialFormats?: CredentialFormatPayload<CredentialFormatsFromProtocols<CPs>, 'acceptProposal'>
 * }
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/11366e540421517ce21e8cca8781741fc482be8e/packages/core/src/modules/proofs/ProofsApi.ts#L191
 * 
 * @param {string} agent_key
 * @param {string} proofRecord - json?
 * @param {string} proofFormats - json
 * @param {string} goalCode - optional?
 * @param {string} willConfirm - default?
 * @param {string} comment - optional?
 * @param {string} autoAcceptProof - default?
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_credentials_acceptProposal(agent_key, proofRecord, proofFormats, goalCode, willConfirm, comment, autoAcceptProof) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(options==null)return Promise.reject("Invalid options parameter");										//mandatory
		try{
			options=JSON.parse(options);
		}catch(e){
			return Promise.reject("Argument options is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.credentials.acceptProposal(options)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
