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
import{cache}from"../support/entidad";
//todo:remove agent and connection, we work through drpc now
// END EXTRA CODE

/**
 * Attempts execution of regitered RPC method
 * @param {string} alias - optional
 * @param {string} params - json optional
 * @param {MxObject} drpc - optional
 * @param {MxObject} agent - optional
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_rpc_execute_callback(alias, params, drpc, agent) {
	// BEGIN USER CODE
	// export async function jsa_aries_agent_modules_rpc_register_callback(alias, callback, hint, synchronous, parameters_parameter, agent_parameter, rpc_record_id_parameter) {
	try{
		if(alias==null)return Promise.reject("Invalid alias parameter");
		if(
			params!=null&&
			params.length>2&&
			(params[0]=="{"&&params[params.length-1]=="}")||
			(params[0]=="["&&params[params.length-1]=="]")
		){
			try{
				params=JSON.parse(params);
			}catch(e){
				return(Promise.reject(e.toString()));
			}
		}else if(params==[]){
			//handle empty arguments
			params=[];
		}else if(typeof(params)=="string"||typeof(params)=="number"||typeof(params)=="boolean"){
			//handle single string, number, or boolean
			params=[params];
		}else{
			return(Promise.reject("Invalid params"));
		}
		let callback=cache.get(alias);
		if(alias==null||typeof(alias)=="undefined"||alias==""){return(Promise.reject("RPC method not found"));}
		if(callback==null||typeof(callback)=="undefined"){return(Promise.reject("RPC method not found"));}
		let args={};
		if(callback.hint!=null&&callback.parameters_parameter==null){
			if(Array.isArray(callback.hint)&&Array.isArray(params)){
				for(let i=0;i<callback.hint.length;i++){
					args[callback.hint[i]]=params[i]
				}
			}else if(Array.isArray(callback.hint)&&!Array.isArray(params)){
				args=params;
			}else if(!Array.isArray(callback.hint)&&Array.isArray(params)){
				for(let i=0;i<params.length;i++){
					if(Object.keys(callback.hint).includes(i.toString())){
						args[callback.hint[i.toString()]]=params[i];
					}else{
						args["_"+i]=params[i];
					}
				}
			}else if(!Array.isArray(callback.hint)&&!Array.isArray(params)){
				Object.keys(callback.hint).forEach((k)=>{
					let v=callback.hint[""+k];
					if(params[k]!=null){
						args[v]=params[k];
					}
				});
				Object.keys(params).forEach((k)=>{
					if(callback.hint[k]==null){
						args[k]=params[k];
					}
				});
			}else{
				throw("Unhandled hint/params combination")
			}
		}else{
			if(callback.parameters_parameter==null||typeof(callback.parameters_parameter)=="undefined"){
				if(Array.isArray(params)){
					for(let i=0;i<params.length;i++){
						args['_'+i]=params[i];
					}
				}else{
					args=params;
				}
			}else{
				args[callback.parameters_parameter]=JSON.stringify(params)
			}
		}
		if(callback.drpc_parameter!=null&&drpc!=null){
			args[callback.drpc_parameter]=drpc;
		}
		if(callback.agent_parameter!=null&&agent!=null){
			args[callback.agent_parameter]=agent;
		}
		let result=await callback.callback(args);
		//handle Big.js return types
		if(typeof(result)=="object"&&result.__proto__==Big.prototype){
			result=result.toNumber();
		}else{
			//todo:handle mendix object
		}
		if(result==null){
		}else{
			JSON.stringify(result)
		}
		return(Promise.resolve(result==null?null:result));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}