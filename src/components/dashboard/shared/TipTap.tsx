"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Blockquote from "@tiptap/extension-blockquote";

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Blockquote],
    content: "<p>Hello World! 🌍</p>",
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="border rounded-md p-4 bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-3">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("bold") ? "bg-red-500 text-white" : "bg-gray-100"
          }`}
        >
          Bold
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("italic") ? "bg-red-500 text-white" : "bg-gray-100"
          }`}
        >
          Italic
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("underline")
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Underline
        </button>

        {/* Headings */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-2 py-1 border rounded ${
            editor.isActive("heading", { level: 1 })
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-2 py-1 border rounded ${
            editor.isActive("heading", { level: 2 })
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }`}
        >
          H2
        </button>

        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("bulletList")
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("orderedList")
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }`}
        >
          1. List
        </button>

        {/* Blockquote */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("blockquote")
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }`}
        >
          “ Quote
        </button>

        {/* Link */}
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .setLink({ href: "https://example.com" })
              .run()
          }
          className={`px-2 py-1 border rounded ${
            editor.isActive("link") ? "bg-red-500 text-white" : "bg-gray-100"
          }`}
        >
          🔗 Link
        </button>

        {/* Clear formatting */}
        <button
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
          className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* Editable area */}
      <EditorContent editor={editor} />
    </div>
  );
}
