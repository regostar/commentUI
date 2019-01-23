
import {simple_plugin} from "./state_plugin";
import {
    EditorState,
    TextSelection
} from "prosemirror-state"





export class Ali {
    constructor(editor) {
        this.editor = editor
    }

    init() {
    //console.log(document.getElementById('comment-editor'));

/*
                this.view.state.doc.descendants(node => {
                    if (node.attrs.track) {
                        console.log(node.attrs.track)
                    } else {
                        console.log(node.marks.forEach)
                    }
                })
*/
        let tr = this.editor.view.state.tr
        console.log(tr.selection.from)
        tr.setSelection(TextSelection.create(tr.doc, 1))
        console.log(tr.selection.from)
        const selection = this.editor.view.state.selection
        let comments = []

        if (selection.empty) {
            console.log("selection not empty")
            const node = this.editor.view.state.doc.nodeAt(tr.selection.from)
            if (node) {
                //comments = this.findCommentsAt(node)
                const comment = this.editor.mod.comments.store.findComment(node)
            }
        } else {
        console.log("selection is empty")
            this.editor.view.state.doc.nodesBetween(
                selection.from,
                selection.to,
                (node, pos, parent) => {
                    if (!node.isInline) {
                        return
                    }
                    comments = comments.concat(this.findCommentsAt(node))
                }
            )
        }
        console.log(comments)
        console.log(this.editor.mod.comments.store)
        console.log(this.editor.view.state.selection.to)
       // const selection = this.editor.view.state.selection
        //const node = this.editor.view.state.doc.nodeAt(selection.from)//null
        const node = this.editor.view.state.doc.nodeAt(selection.from)
        console.log(node)
         const comment = this.editor.mod.comments.store.findComment(613174212)
         console.log(comment)

         //const commentIds = node.isInline || node.isLeaf ? this.editor.mod.comments.interactions.findCommentIds(node) : []
         //console.log(this.editor.mod.comments.store.commentDuringCreation.comment)//not working
         console.log(this.editor.mod.interactions)
         console.log(this.editor.mod)

       this.editor.statePlugins.push([simple_plugin, () => ({editor: this.editor}) ]);//pushing into an array

    }
}
