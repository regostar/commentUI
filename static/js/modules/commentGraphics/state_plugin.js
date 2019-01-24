import {Plugin, PluginKey, TextSelection} from "prosemirror-state";
import {addAlert, Dialog, getJson} from "../common"

const key = new PluginKey('text_key');
export let simple_plugin = function(options){
//prosemirror
    return new Plugin ({
    key,
    state: {
        init(config,state) {
            console.log({comments: options.doc.comments})
/*I cannot access the dom of comment within init
   Which means that if I add a css class, only after one click, the new UI/css
   will be loaded*/
       //   console.log(state);
       //  console.log(config)
         /* let comment_dom = document.getElementsByClassName("margin-box comment")
          console.log("comm is :-")
          let com1 = document.querySelector("div#margin-box-1787445283")
          console.log(com1)
          console.log(comm[0])
          let title = state.doc;
          console.log(title)*/
          return{}
        },
      apply(tr, prev, oldState, state) {
/* I can access the dom of comment from apply*/
/*        console.log("within apply");
        let comm = document.getElementsByClassName("margin-box comment")
        console.log(comm[0].firstElementChild.attributes.class.ownerDocument.lastModified)
        let comm = document.getElementsByClassName("margin-box comment")

let com1 = document.querySelector("div#margin-box-1787445283")
            console.log(com1)
*/            return{}
         }
       }

    })
}

/* Note that the comment ID 1787445283 will be different in different documents
   It is just to show that the dom of comment using id is accessible
*/
