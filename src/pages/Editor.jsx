import React from 'react'
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'

import { Header } from '../components'
import { EditorData } from '../data/dummy'

const Editor = () => (
  <div className="m-2 mt-20 mt-24 rounded-3xl bg-white p-2 md:m-10 md:mt-0 md:p-10">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
)
export default Editor
