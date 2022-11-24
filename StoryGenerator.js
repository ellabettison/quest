import {forwardRef, useImperativeHandle, useState} from "react";
import {createMessage, createMultichoiceMessage} from "./MessageGenerator"
import story_file from "./story.json";

    
    // let story = JSON.parse(story_file.story);
    
    

     export function doNextStory(storyLoc, story, addMessage, addEvidence) {
         
         const currStory = story["story"][storyLoc];
         const messages = currStory["messages"];
         const evidenceToTrigger = currStory["evidence_to_trigger"];

         // generate messages
         for (let i = 0; i < messages.length; i++) {
             const currMessage = messages[i];
             if (currMessage["type"] === "choice_message") {
                 addMessage(createMultichoiceMessage(text = currMessage["text"],
                     choices = currMessage["choices"]))}
             else {
                 console.log("adding message "+currMessage["text"])
                 addMessage(createMessage(currMessage["text"]));
             }
         }

         // generate evidence
         for (let i = 0; i < evidenceToTrigger.length; i++) {
             const currEvidence = evidenceToTrigger[i];
             addEvidence({
                 id: currEvidence["key"],
                 name: currEvidence["name"],
                 asset_name: currEvidence["asset_name"],
             })
         }
     }
     
     export function checkIfCanProceed(storyLoc, story, message){
         const currStory = story["story"][storyLoc];
         const nextStageReq = currStory["next_stage_req"]
         console.log(nextStageReq)
         if (nextStageReq["type"] === "none"){
             return true
         } else if(nextStageReq["type"] === "keyword"){
             if (message === nextStageReq["answer"] ){
                 return true
             }
         } 
         return false
     }
