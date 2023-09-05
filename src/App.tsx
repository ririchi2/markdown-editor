import { useRef, useState } from 'react'
import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'
import Markdown from 'marked-react';
import ContextMenu from './components'

const sampleText = '# Title\n## Sub-Title \n### Deeper title\n\n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.'
const sampleText2 = '# Marked in Node.js\n\nRendered by **marked**.';
const menuItems = [
  {
    text: 'Item 1',
    onClick: () => { console.log('Item 1 clicked!'); }
  },
  {
    text: 'Item 2',
    onClick: () => { console.log('Item 2 clicked!'); }
  }
];

const App: React.FC = () => {
  const [text, setText] = useState(sampleText2)
  const inputRef = useRef(null);

  const handleChange = (event: any) => {
    const newText = event.target.value;
    // const selectedText = {
    //   cursorStart: inputRef.current.selectionStart,
    //   cursorEnd: inputRef.current.selectionEnd
    // }
    // console.log('test', text.substring(selectedText.cursorStart, selectedText.cursorEnd));
    setText(newText)
  }


  return (
    <div className={styles.app}>
      <header className={styles.header}>
      </header>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.column}>
            Input
            <textarea ref={inputRef} rows={25} id='markdownInput' className={styles.markdownInput} value={text} onChange={handleChange}>
            </textarea>
            <ContextMenu
              parentRef={inputRef}
              items={menuItems}
            />
          </div>
          <div className={styles.column}>
            Output
            <div className={styles.markdownOutput}>
              <Markdown value={text}></Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
