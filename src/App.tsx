import { useState } from 'react'
import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'
import Markdown from 'marked-react';

const sampleText = '# Title\n## Sub-Title \n### Deeper title\n\n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.'
const sampleText2 = '# Marked in Node.js\n\nRendered by **marked**.'

const App: React.FC = () => {
  const [text, setText] = useState(sampleText2)

  const handleChange = (event: any) => {
    const newText = event.target.value;
    setText(newText)
  }


  return (
    <div className={styles.app}>
      <body className={styles.body}>
        <div className={styles.row}>
          <div className={styles.column}>
            Column 1
            <textarea rows={25} id='markdownInput' className={styles.markdownInput} value={text} onChange={handleChange} />
          </div>
          <div className={styles.column}>
            Column 2
            <div className={styles.markdownOutput}>
              <Markdown value={text}></Markdown>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App
