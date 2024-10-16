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
import support from "../support/entidad";
// END EXTRA CODE

/**
 * add(teardown: TeardownLogic): void
 * The finalization logic to add to this subscription.
 * 
 * 
 * Adds a finalizer to this subscription, so that finalization will be unsubscribed/called when this subscription is unsubscribed. If this subscription is already {@link #closed}, because it has already been unsubscribed, then whatever finalizer is passed to it will automatically be executed (unless the finalizer itself is also a closed subscription).
 * 
 * Closed Subscriptions cannot be added as finalizers to any subscription. Adding a closed subscription to a any subscription will result in no operation. (A noop).
 * 
 * Adding a subscription to itself, or adding null or undefined will not perform any operation at all. (A noop).
 * 
 * Subscription instances that are added to this instance will automatically remove themselves if they are unsubscribed. Functions and {@link Unsubscribable } objects that you wish to remove will need to be removed manually with {@link #remove}
 * 
 * http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~TeardownLogicDoc.html
 * 
 * 
 * TeardownLogic
 * 
 * This interface describes what should be returned by function passed to Observable constructor or static create function. Value of that interface will be used to cancel subscription for given Observable.
 * 
 * TeardownLogic can be:
 * Function
 * 
 * Function that takes no parameters. When consumer of created Observable calls unsubscribe, that function will be called
 * AnonymousSubscription
 * 
 * AnonymousSubscription is simply an object with unsubscribe method on it. That method will work the same as function
 * void
 * 
 * If created Observable does not have any resources to clean up, function does not have to return anything.
 * 
 * @param {string} agent_key
 * @param {Nanoflow} teardown
 * @param {string} userDataParameterName - optional
 * @param {MxObject} userData - optional
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_messageSubscription_add(agent_key, teardown, userDataParameterName, userData) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(teardown==null)return Promise.reject("Invalid teardown parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		agent.jsa_aries_agent_messageSubscription.add(()=>{
			if(teardown==null)return;
			let args={};
			if(userDataParameterName!=null)args[userDataParameterName]=userData;
			teardown(args);
		});
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
