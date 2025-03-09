import { useState } from "react";
import Editor from "./components/Editor";
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

  return (
    <>
      <div className="sidebar">
        {icons.map((icon) => (
          <div className="sidebar-icon">
            <img src={`/icons/${icon.name}.png`} alt={icon.name} />
          </div>
        ))}
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
              <div className="question-text">
              Create a small project for me in any language.
              </div>
            </div>
            <div className="editor-container">
              <Editor content={content} />
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
          <input
            type="text"
            className="input-field"
            placeholder="Ask Doe anything you’d like about the world..."
          />
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
