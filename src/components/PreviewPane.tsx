interface PreviewPaneProps {
  htmlCode: string;
  cssCode: string;
}

const PreviewPane = ({ htmlCode, cssCode }: PreviewPaneProps) => {
  const combinedCode = `
    <style>
      ${cssCode}
    </style>
    ${htmlCode}
  `;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="bg-muted p-2 border-b border-border">
          <h2 className="text-sm font-medium">Light Mode</h2>
        </div>
        <div className="bg-white p-4 h-[400px] overflow-auto">
          <div
            dangerouslySetInnerHTML={{ __html: combinedCode }}
            className="preview-content"
          />
        </div>
      </div>
      
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="bg-muted p-2 border-b border-border">
          <h2 className="text-sm font-medium">Dark Mode</h2>
        </div>
        <div className="bg-[#1a1a1a] text-white p-4 h-[400px] overflow-auto">
          <div
            dangerouslySetInnerHTML={{ __html: combinedCode }}
            className="preview-content dark"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPane;