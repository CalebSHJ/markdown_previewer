import './App.css';
import { useState } from 'react';
import { marked } from "marked";
// import { Prism } from "Prism";

marked.setOptions({
  breaks: true,
});


const Editor = (props) => {
  return (
    <textarea id="editor" value={props.input} onChange={props.inputChange}></textarea>
  )
}

const Previewer = (props) => {
  return (
    <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.input)}}></div>
  )
}

 
function App() {
  const [input, setInput] = useState(placeholder);
  const [editorMax, setEditorMax] = useState(false);
  const [previewMax, setPreviewMax] = useState(false);
  
  const inputChange = (e) => {
    setInput(e.target.value);
  } 
  const editorMaxHandle = () => {
    let handle = editorMax === false ? true : false;
    setEditorMax(handle);
  }

  const previewerMaxHandle = () => {
    let handle = previewMax === false ? true : false;
    setPreviewMax(handle);
  }
  const classes = editorMax !== false ? 
    ['editor-max', 'preview-hide', 'fa-solid fa-minimize'] : 
    previewMax !== false ? ['editor-hide','preview-max', 'fa-solid fa-minimize'] :
    ['editor-normal', 'preview-normal', 'fa-solid fa-maximize'];

  return (
    <div>
      <h1 className='title'> Markdown Previewer </h1>
      <div className='container'>
        <div className={classes[0]}>
          <ToolBar className={classes[2]} title = "Editor" onClick={editorMaxHandle}/>
          <Editor input={input} inputChange={inputChange} />
        </div>
        <div className={classes[1]}>
          <ToolBar className={classes[2]} title = "Previewer" onClick={previewerMaxHandle} />
          <Previewer input={input} />
        </div> 
      </div>
    </div>
  );
}

const ToolBar = (props) => {

  return (
    <div id="toolbar" >
      <i className="fa-brands fa-markdown"></i>
      <span>{props.title}</span>
      <i className={props.className} onClick={props.onClick}></i>
    </div>
  )
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo](https://www.example.com)
`;

export default App;
