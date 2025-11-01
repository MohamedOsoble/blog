import Button from "@mui/material/Button";
import { RichTextEditor } from "mui-tiptap";
import EditorMenuControls from "./EditorMenuControls";
import useExtensions from "./EditorExtentions";
import { useRef, useState } from "react";

export default function TextEditor() {
  const rteRef = useRef(null);
  const [isEditable, setIsEditable] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });

  return (
    <div>
      <RichTextEditor
        ref={rteRef}
        extensions={[extensions]} // Or any Tiptap extensions you wish!
        content="<p>Hello world</p>" // Initial content for the editor
        // Optionally include `renderControls` for a menu-bar atop the editor:
        renderControls={() => <EditorMenuControls />}
        RichTextFieldProps={{
          // The "outlined" variant is the default (shown here only as
          // example), but can be changed to "standard" to remove the outlined
          // field border from the editor
          variant: "outlined",
          MenuBarProps: {
            hide: !showMenuBar,
          },
        }}
      />

      <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button>
    </div>
  );
}
