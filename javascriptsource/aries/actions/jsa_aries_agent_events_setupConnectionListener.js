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
import{
	ConnectionEventTypes,
	AgentEventTypes,
	BasicMessageEventTypes,
	CredentialEventTypes,
	ProofEventTypes,
	DidExchangeState
}from'@aries-framework/core';
import support from "../support/entidad";
// END EXTRA CODE

/**
 * https://github.com/hyperledger/aries-framework-javascript/blob/b6d66b1e9a75b4070dbfa0499ba972392c8d7b86/packages/core/tests/events.ts
 * @param {Big} agent_key
 * @param {"Aries.enum_aries_EventType.ConnectionStateChanged"|"Aries.enum_aries_EventType.BasicMessageStateChanged"|"Aries.enum_aries_EventType.CredentialStateChanged"|"Aries.enum_aries_EventType.RevocationNotificationReceived"|"Aries.enum_aries_EventType.ProofStateChanged"|"Aries.enum_aries_EventType.AgentMessageReceived"|"Aries.enum_aries_EventType.AgentMessageProcessed"|"Aries.enum_aries_EventType.AgentMessageSent"} eventType
 * @param {Nanoflow} callback
 * @param {string} payloadParameterName
 * @param {string} userDataParameterName
 * @param {MxObject} userData
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_events_setupConnectionListener(agent_key, eventType, callback, payloadParameterName, userDataParameterName, userData) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(callback==null)return Promise.reject("Invalid callback parameter");											//mandatory
		if(eventType==null)return Promise.reject("Invalid eventType parameter");										//mandatory	
		switch(eventType){
			case"AgentMessageProcessed":
				eventType=AgentEventTypes.AgentMessageProcessed;
				break;
			case"AgentMessageReceived":
				eventType=AgentEventTypes.AgentMessageReceived;
				break;
			case"AgentMessageSent":
				eventType=AgentEventTypes.AgentMessageSent;
				break;
			case"ConnectionStateChanged":
				eventType=ConnectionEventTypes.ConnectionStateChanged;
				break;
			case"BasicMessageStateChanged":
				eventType=BasicMessageEventTypes.BasicMessageStateChanged;
				break;
			case"CredentialStateChanged":
				eventType=CredentialEventTypes.CredentialStateChanged;
				break;
			case"RevocationNotificationReceived":
				eventType=CredentialEventTypes.RevocationNotificationReceived;
				break;
			case"ProofStateChanged":
				eventType=ProofEventTypes.ProofStateChanged;
				break;
			default:
				return Promise.reject("Invalid connectionEventType parameter")
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		agent.events.on(eventType,({payload})=>{
			let args={};
			args[payloadParameterName]=JSON.stringify(payload,0,2);
			if(userDataParameterName!=null)args[userDataParameterName]=userData;
			callback(args);
		});
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}