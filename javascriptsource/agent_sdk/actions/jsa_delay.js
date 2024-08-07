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
// END EXTRA CODE

/**
 * @param {Big} ms
 * @returns {Promise.<void>}
 */
export async function jsa_delay(ms) {
	// BEGIN USER CODE
	return new Promise((resolve,reject)=>{
		try{
			/*todo:countdown*/
			let i=Math.floor(ms/1000);
			console.info(mx.session.getUserName()+":jsa_delay:"+i);
			i--;
			let hdl=window.setInterval(()=>{
				console.info(mx.session.getUserName()+":jsa_delay:"+i);
				i--;
			},1000);
			window.setTimeout(()=>{
				window.clearInterval(hdl);
				resolve();
			},ms.toNumber())
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}
