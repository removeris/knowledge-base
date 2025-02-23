<template>
    <div class="container">
        <div class="sub-container">
    
            <div class="toolbar">

                <div class="dropdown">
                    <button :class="{ main: showDropdown }" @click="toggleDropdown" class="dropdown-toggle">
                        <img src="../assets/align-left.png" alt="align left">
                    </button>
                    <ul v-if="showDropdown" class="dropdown-menu">
                        <li :class="{ active: editor.isActive({textAlign: 'left'})}" @click="setTextAlign('left')">
                            <img src="../assets/align-left.png" alt="align-left">
                        </li>
                        <li :class="{ active: editor.isActive({textAlign: 'center'})}" @click="setTextAlign('center')">
                            <img src="../assets/align-center.png" alt="align-center">
                        </li>
                        <li :class="{ active: editor.isActive({textAlign: 'right'})}" @click="setTextAlign('right')">
                            <img src="../assets/align-right.png" alt="align-right">
                        </li>
                    </ul>
                </div>

                <button v-for="level in [1, 2, 3, 4]" :key="level"
                    :class="{ active: editor.isActive('heading', { level }) }" @click="setHeading(level)">
                    H{{ level }}
                </button>
    
            </div>
            <editor-content :editor="editor" class="editor-content" />
        </div>
    </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'

export default {
    name: 'TiptapEditor',
    components: { EditorContent },
    
    setup() {
        const editor = ref(
            new Editor({
                extensions: [
                    StarterKit,
                    TextAlign.configure({
                        types: ['heading', 'paragraph'],
                        alignments: ['left', 'center', 'right'],
                    }),
                ],
                content: '',
            })
        )

        const setHeading = (level) => {
            editor.value.chain().focus().toggleHeading({ level }).run()
        }

        const showDropdown = ref(false)
        
        const toggleDropdown = () => {
            showDropdown.value = !showDropdown.value
        }

        const setTextAlign = (alignment) => {
            
            editor.value.chain().focus().setTextAlign(alignment).run()

            showDropdown.value = false
        }

        onBeforeUnmount(() => {
            editor.value.destroy()
        })

        return {
            editor,
            setHeading,
            setTextAlign,
            toggleDropdown,
            showDropdown,
        }
    },
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sub-container {

    width: 600px;
    height: 300px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}

.toolbar {

    width: 100%;
    display: flex;
    gap: 7px;
    padding: 3px 16px;
    border: 1px black solid;
    border-bottom: none;
    align-items: center;
    justify-content: center;
}

.toolbar button {
    cursor: pointer;
    border: none;
    background-color: inherit;
    width: 25px;
    border: 1px solid #ddd;
}

.toolbar button.active {
    background: #007bff;
    color: #fff;
}

.editor-content {
    height: 200px;
    width: 100%;
    border: 1px solid black;
    text-align: left;
    overflow-y: auto;
    display: flex;
    padding: 16px;
}

.toolbar button.main {
    background-color: rgba(0, 0, 0, 0.05);
}

.editor-content * {
    width: 100%;
    outline: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  border: 1px solid #ddd;
  background: #f9f9f9;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0px;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  width: 23px;
}

.dropdown-menu li {
    border: 1px solid black;
    border-top: none;
    cursor: pointer;
}

.dropdown-menu li:hover {
  background: rgba(0, 123, 255, 0.3);
  color: white;
}

.dropdown-menu li.active {
  background: rgba(0, 123, 255, 0.6);
}

</style>