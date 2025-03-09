import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import Prism from "prismjs"; // Import PrismJS
import "prismjs/components/prism-python"; // Add Python syntax support
import "prism-themes/themes/prism-dracula.css"; // Use Dracula theme
import "./Editor.less";

const lowlight = createLowlight(common);

const ReadOnlyEditor = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
    content,
    editable: false, // Read-only mode
  });

  // Trigger PrismJS to reapply syntax highlighting
  useEffect(() => {
    if (editor) {
      setTimeout(() => Prism.highlightAll(), 0); // Ensure it runs after the DOM updates
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="read-only-editor">
      <EditorContent editor={editor} />
    </div>
  );
};

export default ReadOnlyEditor;
