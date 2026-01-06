"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodes } from "lexical";
import { $createImageNode } from "../nodes/ImageNode";

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  const insertImage = (url: string) => {
    editor.update(() => {
      const imageNode = $createImageNode({
        src: url,
        altText: "Uploaded image",
      });
      $insertNodes([imageNode]);
    });
  };

  return (
    <button
      onClick={() => {
        // Example: hardcoded image URL, replace with upload logic
        insertImage("/uploads/sample.png");
      }}
    >
      Insert Image
    </button>
  );
}
