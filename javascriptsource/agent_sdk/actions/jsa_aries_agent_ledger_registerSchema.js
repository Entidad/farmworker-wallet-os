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
 * https://aries.js.org/guides/tutorials/issue-a-credential#2-registering-the-schema-and-credential-definition
 * 
 * agent.ledger.registerSchema(schema: AriesCore.SchemaTemplate): Promise<Schema>  
 * 
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/de90cafb8d12b7a940f881184cd745c4b5043cbc/packages/indy-sdk/src/anoncreds/services/IndySdkAnonCredsRegistry.ts
 * 
 *   public async registerSchema(
 *     agentContext: AgentContext,
 *     options: RegisterSchemaOptions
 *   ): Promise<RegisterSchemaReturn> {
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/b5eb08e99d7ea61adefb8c6c0c5c99c6c1ba1597/packages/anoncreds/src/services/registry/SchemaOptions.ts
 * 
 * export interface RegisterSchemaOptions {
 *   schema: AnonCredsSchema
 *   options: Extensible
 * }
 * @param {string} agent_key
 * @param {string} schema
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_ledger_registerSchema(agent_key, schema) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");								//mandatory
		if(schema==null)return Promise.reject("Invalid schema parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		try{
			schema=JSON.parse(schema);
		}catch(e){
			return Promise.reject("Argument schema not a valid JSON structure");
		}
		return Promise.resolve(JSON.stringify(await agent.ledger.registerSchema(schema)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
