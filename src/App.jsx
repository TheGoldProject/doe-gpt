import { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import ReadOnlyEditor from "./components/ReadOnlyEditor";
import "./App.css";

function App() {
  const content = `
  <p>Here's a simple project idea: a Task Manager command-line application in Python. It will allow you to add, view, and delete tasks. In the structure, we'll be able to add and view all tasks, delete tasks by number, and mark tasks as completed. </p>

<p>We will write this code completely in Python. </p>

<p>The Python code for the deletion function is as follows:</p>
  <pre><code class="language-python">def delete_element(my_list, element):
  """Removes the first occurrence of the element from the list."""
  try:
      my_list.remove(element)
      return my_list
  except ValueError:
      return f"Element {element} not found in the list."

# Example usage
my_list = [1, 2, 3, 4, 5]
element_to_delete = 3

result = delete_element(my_list, element_to_delete)
print(result)  # Output: [1, 2, 4, 5]
</code></pre>`;

  const icons = [
    {
      name: "bold",
    },
    {
      name: "underline",
    },
    {
      name: "italic",
    },
    {
      name: "strike",
    },
    {
      name: "code",
    },
  ];

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Underline,
      Placeholder.configure({
        placeholder: "Ask Doe anything you’d like about the world...",
        emptyEditorClass: "is-empty",
      }),
    ],
    content: "", // Empty content initially
  });

  return (
    <>
      <div className="sidebar">
        {/* {icons.map((icon) => (
          <div className="sidebar-icon">
            <img src={`/icons/${icon.name}.png`} alt={icon.name} />
          </div>
        ))} */}
        <div
          className="sidebar-icon"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
        >
          <img src={`/icons/bold.png`} alt="bold" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
        >
          <img src={`/icons/italic.png`} alt="italic" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
        >
          <img src={`/icons/underline.png`} alt="underline" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
        >
          <img src={`/icons/strike.png`} alt="strike" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
        >
          <img src={`/icons/code.png`} alt="code" />
        </div>
      </div>
      <div className="main-container">
        <div className="container-wrapper">
          <div className="float-icon-container">
            <div className="float-icon">
              <img src="/icons/share.png" alt="bold" />
            </div>
            <div className="float-icon">
              <img src="/icons/generate.png" alt="bold" />
            </div>
          </div>
          <div className="content-container">
            <div className="question-container">
              <div className="question-text">Create a small project for me in any language.</div>
            </div>
            <div className="editor-container">
              <ReadOnlyEditor content={content} />
              <div className="gpt-icon">
                <img src="/icons/logo.png" alt="bold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-container">
        <div className="chatbox">
          <div className="icon-container">
            <img src="/icons/ai.png" alt="ai" />
          </div>
          {/* <input
            type="text"
            className="input-field"
            placeholder="Ask Doe anything you’d like about the world..."
          /> */}
          <EditorContent editor={editor} className="editor" />
          <div className="icon-button" style={{ backgroundColor: "rgba(181, 181, 181, 0.2)" }}>
            <img src="/icons/copy.png" alt="send" />
          </div>
          <div className="icon-button">
            <img src="/icons/record.png" alt="send" />
          </div>
          <div className="send-button">
            Send <img src="/icons/up.png" alt="send" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
