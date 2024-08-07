// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * https://apidocs.rnd.mendix.com/9/client/mendix_lib_MxObject.html
 * 
 * getReferences(attr) → {Array.<GUID>}
 * 
 * Retrieves the MxObjects referenced by a reference or reference set attribute.
 * Parameters:
 * Name  Type  Description
 * attr  string  
 * 
 * reference attribute whose referenced objects to return
 * 
 * Returns:
 * 
 * GUIDs of the references objects
 * 
 * Type
 *     Array.<GUID> 
 * 
 * Example
 * 
 * // Get GUIDs of objects over association MyFirstModule.Ref.
 * mxobj.getReferences("MyFirstModule.Ref");    // [ "12345", "12346" ]
 * @param {MxObject} input
 * @param {string} attribute
 * @returns {Promise.<string>}
 */
export async function jsa_mxobj_getReferences(input, attribute) {
	// BEGIN USER CODE
	try{
		if(input==null)return Promise.reject("Invalid argument input");
		//todo:handle return type serialization
		return Promise.resolve(input.getReferences(attribute));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
