import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Flag, Check, Upload, X, FileImage, FileText } from "lucide-react";

const REPORT_REASONS = [
  "Inappropriate behavior",
  "Harassment or bullying",
  "Spam or scam",
  "Fake profile",
  "Inappropriate content",
  "Other",
];

interface UploadedFile {
  name: string;
  type: string;
  size: number;
}

export function ReportUserScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [description, setDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleSubmit = () => {
    if (selectedReason) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pb-20">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-center mb-2">Report Submitted</h2>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Thank you for helping keep our community safe. We'll review your report shortly.
        </p>
        <button 
          onClick={() => navigate(`/user/${id}`)}
          className="w-full bg-primary text-white py-2.5 rounded-md"
        >
          Back to Profile
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-4 pt-4 pb-2 flex items-center gap-2">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <Flag className="w-5 h-5" />
          <h2>Report User</h2>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <p className="text-sm text-muted-foreground">
          Why are you reporting this user?
        </p>

        {/* Report reasons */}
        <div className="space-y-2">
          {REPORT_REASONS.map((reason) => (
            <button
              key={reason}
              onClick={() => setSelectedReason(reason)}
              className={`w-full text-left px-3 py-3 rounded-md border text-sm transition-colors ${
                selectedReason === reason 
                  ? "bg-primary text-white border-primary" 
                  : "bg-white border-border"
              }`}
            >
              {reason}
            </button>
          ))}
        </div>

        {/* Description field */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Additional details (optional)</p>
          <textarea 
            className="w-full border border-border rounded-md px-3 py-2.5 bg-white min-h-[100px] resize-none text-sm"
            placeholder="Please provide any additional information about your report..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Evidence upload */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">Evidence (optional)</p>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-border rounded-md p-4 flex flex-col items-center justify-center gap-2 bg-white hover:bg-muted/50 transition-colors"
          >
            <Upload className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Tap to upload files</span>
            <span className="text-xs text-muted-foreground">Images, screenshots, documents</span>
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx,.txt"
            className="hidden"
            onChange={handleFileSelect}
          />

          {uploadedFiles.length > 0 && (
            <div className="mt-3 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 bg-white border border-border rounded-md p-2">
                  {file.type.startsWith("image/") ? (
                    <FileImage className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="w-6 h-6 rounded-full bg-muted flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit button */}
        <button 
          onClick={handleSubmit}
          disabled={!selectedReason}
          className={`w-full py-2.5 rounded-md text-sm ${
            selectedReason 
              ? "bg-primary text-white" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          Submit Report
        </button>

        <p className="text-xs text-muted-foreground text-center">
          False reporting may result in account restrictions
        </p>
      </div>
    </div>
  );
}
