import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import PreviewPane from "@/components/PreviewPane";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";

const Index = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      if (file.name.endsWith('.html')) {
        setHtmlCode(content);
        toast({
          title: "HTML file uploaded",
          description: "Your HTML code has been loaded successfully."
        });
      } else if (file.name.endsWith('.css')) {
        setCssCode(content);
        toast({
          title: "CSS file uploaded",
          description: "Your CSS code has been loaded successfully."
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          HTML/CSS Preview Tool
        </h1>
        
        <div className="mb-4 flex justify-end space-x-4">
          <div className="relative">
            <input
              type="file"
              accept=".html,.css"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button variant="outline" className="cursor-pointer">
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </Button>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <CodeEditor
              label="HTML"
              language="html"
              value={htmlCode}
              onChange={setHtmlCode}
            />
            <CodeEditor
              label="CSS"
              language="css"
              value={cssCode}
              onChange={setCssCode}
            />
          </div>
          <div className="space-y-4">
            <PreviewPane htmlCode={htmlCode} cssCode={cssCode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;