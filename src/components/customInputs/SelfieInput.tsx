import React, { useRef, useState } from "react";

export const SelfieInput = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file); // Convert image file to base64 string for preview
    }
  };

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment" 
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} 
      />

      <button type="button" onClick={openCamera} className="btn btn-primary">
        Open Camera
      </button>

      {imagePreview && (
        <div>
          <h3>Captured Image:</h3>
          <img
            src={imagePreview}
            alt="Captured preview"
            style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
};
