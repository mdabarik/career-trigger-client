"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function TinyEditor() {
  const editorRef = useRef<any>(null);

  return (
    <div className="border rounded-md p-4 bg-white">
      <Editor
        apiKey="lq15f5jdm4ogw4dkijhsbnujx4yxswe25ws8o90izb0onh1y" // 🔑 get free key from TinyMCE cloud
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Start writing here...</p>"
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "emoticons autosave directionality hr pagebreak nonbreaking",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline strikethrough | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | link image media | " +
            "charmap emoticons | forecolor backcolor | " +
            "removeformat | code fullscreen help",
          images_upload_url: "/api/upload",
          automatic_uploads: true,
        }}
      />
    </div>
  );
}
