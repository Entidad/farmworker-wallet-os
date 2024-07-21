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
import support from"../../agent_sdk/support/entidad";
import{utils}from"../../agent_sdk/node_modules/@credo-ts/core";
// END EXTRA CODE

/**
 *   public async sendRequest(
 *     connectionId: string,
 *     request: DrpcRequest
 *   ): Promise<() => Promise<DrpcResponse | undefined>>
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} id_ - optional
 * @param {string} jsonrpc - optional
 * @param {string} method
 * @param {string} params
 * @param {string} tags - optional json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_drpc_sendRequest(agent_key, connectionId, id_, jsonrpc, method, params, tags) {
	// BEGIN USER CODE
	try{
		if(agent_key==null||agent_key=="")return(Promise.reject("Invalid agent_key parameter"));
		if(connectionId==null||connectionId=="")return(Promise.reject("Invalid connectionId parameter"));
		if(id_=="")return(Promise.reject("Invalid connectionId parameter"));
		if(id_==null)id_=utils.uuid();
		if(jsonrpc==null)jsonrpc="2.0";
		if(method==null||method=="")return(Promise.reject("Invalid method parameter"));
		if(params==null)params="[]";
		if(params=="")return(Promise.reject("Invalid params parameter"));
		params=params.trimLeft();
		params=params.trimRight();
		if(params[0]=="'"&&params[params.length-1]=="'"){
			params=params.substring(1,params.length-1);
		}else if(params[0]=='"'&&params[params.length-1]=='"'){
			params=params.substring(1,params.length-1);
		}else if(params=="true"){
			params=true;
		}else if(params=="false"){
			params=false;
		}else if(
			(params[0]=='['&&params[params.length-1]==']')||
			(params[0]=='{'&&params[params.length-1]=='}')
		){
			try{
				params=JSON.parse(params);
			}catch(e){
				return(Promise.reject(e.toString()));
			}
		}else{
			if(params.indexOf('.')>0){
				params=parseFloat(params);
			}else{
				params=parseInt(params);
			}
			if(isNaN(params)){
				return(Promise.reject("Invalid params parameter"));
			}
		}
		if(tags=="")return(Promise.reject("Invalid tags parameter"));
		if(tags==null)tags="{}";
		try{
			tags=JSON.parse(tags);
		}catch(e){
			return(Promise.reject(e.toString()));
		}
		let request={
			id:id_,
			jsonrpc:jsonrpc,
			method:method,
			params:params,
			tags:tags
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(
			await agent.modules.drpc.sendRequest(connectionId,request)
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}