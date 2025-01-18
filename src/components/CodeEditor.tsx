import CodeTextArea from "@uiw/react-textarea-code-editor";

interface CodeEditorProps {
  label: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ label, language, value, onChange }: CodeEditorProps) => {
  return (
    <div className="rounded-lg overflow-hidden border border-border">
      <div className="bg-muted p-2 border-b border-border">
        <h2 className="text-sm font-medium">{label}</h2>
      </div>
      <CodeTextArea
        value={value}
        language={language}
        onChange={(e) => onChange(e.target.value)}
        padding={15}
        style={{
          fontSize: 14,
          backgroundColor: "hsl(var(--background))",
          fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
          minHeight: "200px",
        }}
        className="w-full border-none focus:outline-none"
      />
    </div>
  );
};

export default CodeEditor;