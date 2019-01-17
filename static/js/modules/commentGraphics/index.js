
import {simple_plugin} from "./state_plugin";




export class Ali {
    constructor(editor) {
        this.editor = editor
    }

    init() {

       this.editor.statePlugins.push([simple_plugin, () => ({editor: this.editor}) ]);//pushing into an array

    }
}
