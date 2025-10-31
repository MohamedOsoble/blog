import Button from "@mui/material/Button";
import StarterKit from "@tiptap/starter-kit";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  MenuButtonBlockquote,
  MenuButtonCode,
  MenuSelectFontFamily,
  MenuSelectFontSize,
  MenuButtonAddTable,
} from "mui-tiptap";
import EditorMenuControls from "./EditorMenuControls";
import { useRef, useState } from "react";

export default function TextEditor() {
  const rteRef = useRef(null);
  const [isEditable, setIsEditable] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(true);

  return (
    <div>
      <RichTextEditor
        ref={rteRef}
        extensions={[StarterKit]} // Or any Tiptap extensions you wish!
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
