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
let buf=[];
function flushMessages(){
	if(buf.length==0)return;
	let message=buf[0];
	let id=mx.ui.showProgress(message.message,false)
	window.setTimeout(()=>{
			buf=buf.slice(1);
			mx.ui.hideProgress(id);
			flushMessages();
	},1000);
}
// END EXTRA CODE

/**
 * @param {string} message
 * @returns {Promise.<void>}
 */
export async function jsa_queueprogress(message) {
	// BEGIN USER CODE
	try{
		//console.info(typeof(timeout_));
		//console.info((timeout_));
		buf.push({message:message});
		if(buf.length==1){
			flushMessages();
		}
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}