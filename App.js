// App.js
import React, { useState } from "react";
import AceEditor from "react-ace";
import {
  FaJs,
  FaPython,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const languages = {
  js: { name: "JavaScript", mode: "javascript", icon: <FaJs /> },
  python: { name: "Python", mode: "python", icon: <FaPython /> },
  php: { name: "PHP", mode: "php", icon: <FaPhp /> },
  java: { name: "Java", mode: "java", icon: <FaJava /> },
  html: { name: "HTML", mode: "html", icon: <FaHtml5 /> },
  css: { name: "CSS", mode: "css", icon: <FaCss3Alt /> },
};

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here\n");
  const [selectedLang, setSelectedLang] = useState("js");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    setOutput("Output: " + code);
  };

  const handleClear = () => {
    setOutput("");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ width: "60px", backgroundColor: "#f5f5f5", padding: "10px" }}
      >
        {Object.keys(languages).map((key) => (
          <div
            key={key}
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              color: selectedLang === key ? "#007BFF" : "black",
            }}
            onClick={() => setSelectedLang(key)}
          >
            {languages[key].icon}
          </div>
        ))}
      </div>
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            padding: "10px",
            backgroundColor: "#e9e9e9",
          }}
        >
          <span style={{ flexGrow: 1 }}>
            {selectedLang}.{languages[selectedLang].name.toLowerCase()}
          </span>
          <button onClick={handleRun} style={{ marginRight: "10px" , backgroundColor: "#007acc"  }}>
            Run
          </button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <AceEditor
          mode={languages[selectedLang].mode}
          theme="monokai"
          name="code-editor"
          onChange={(newCode) => setCode(newCode)}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{ width: "100%", height: "calc(100vh - 80px)" }}
        />
        <div style={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
          <h3>Output</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <CodeEditor />
    </div>
  );
};

export default App;
