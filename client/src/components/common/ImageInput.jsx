import React, { useState } from "react";

const ImageInput = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a preview URL
      onImageSelect(file); // Pass the file to the parent component
    }
  };

  return (
    <div className="image-input-container mt-3">
        <p className=" text-brown-900 text-sm mb-3">Logo<span className=" text-rose-600">*</span></p>
      <label
        htmlFor="image-upload"
        className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4"
        style={{
          borderColor: "#ccc",
          backgroundColor: "#f9f9f9",
          width: "250px",
          height: "100px",
        }}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-gray-600">
            <p>Click to upload</p>
            <p>or drag and drop</p>
          </div>
        )}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageInput;
