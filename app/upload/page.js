"use client";

import React, { useState } from "react";

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file.name.replaceAll(" ", ""));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", name);
    formData.append("imageUrl", fileName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);

    try {
      const response = await fetch("http://localhost:4000/api/add-product", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setMessage(data.message || "File uploaded successfully.");
      setSelectedFile(null);
      setPrice("");
      setDescription("");
      setCategory("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="my-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleNameChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={handleCategoryChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default UploadForm;
