"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { CodeHighlightPlugin } from "@lexical/code";

const editorConfig = {
  namespace: "MyEditor",
  theme: {
    // custom CSS classes define করো
  },
  onError(error: Error) {
    console.error(error);
  },
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<div className="editor-placeholder">Type here...</div>}
      />
      <HistoryPlugin />
      <ListPlugin />
      <LinkPlugin />
      <CodeHighlightPlugin />
      <OnChangePlugin
        onChange={(editorState) => {
          const json = editorState.toJSON();
          console.log("Editor JSON:", json);
        }}
      />
    </LexicalComposer>
  );
}
