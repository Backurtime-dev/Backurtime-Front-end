"use client";

import React, { useState, useCallback } from "react";
import { Document, LogOut, Trash } from "../icons";
import { cn } from "@/lib/utils";

interface DragAndDropUploadProps {
  label?: string;
  onFileChange: (file: File | null) => void;
  value?: File | null;
  accept?: string;
  maxSize?: number;
  className?: string;
}

export default function DragAndDrop({
  label = "Upload document",
  onFileChange,
  value: controlledValue,
  accept = "image/png,image/jpeg,image/jpg,application/pdf",
  maxSize = 3 * 1024 * 1024, // 3MB
  className,
}: DragAndDropUploadProps) {
  const [file, setFile] = useState<File | null>(controlledValue || null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    const allowedTypes = accept.split(",");
    if (!allowedTypes.some((type) => type.trim() === file.type)) {
      return "Invalid file type. Please upload PNG, JPEG, or PDF.";
    }
    if (file.size > maxSize) {
      return "File too large. Maximum size is 3MB.";
    }
    return null;
  };

  const handleFile = useCallback(
    (selectedFile: File) => {
      const validationError = validateFile(selectedFile);
      if (validationError) {
        setError(validationError);
        setFile(null);
        onFileChange(null);
      } else {
        setError(null);
        setFile(selectedFile);
        onFileChange(selectedFile);
      }
    },
    [onFileChange],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile],
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setError(null);
    onFileChange(null);
  };

  const hasFile = !!file;

  return (
    <div className={cn("w-full space-y-3", className)}>
      {label && (
        <p className="font-inter text-xs leading-[140%] font-normal tracking-[0.12px] text-white">
          {label}
        </p>
      )}

      {hasFile ? (
        <div className="border-primitives-white_20 bg-primitives-black_50 flex items-center justify-between rounded-2xl border px-[18px] py-3.5">
          <div className="flex items-center gap-3">
            <Document size={24} color="#00FFEA" />
            <span className="font-inter truncate text-base leading-[140%] font-normal text-white">
              {file.name}
            </span>
          </div>
          <button
            onClick={removeFile}
            aria-label="Remove file"
            className="transition-opacity hover:cursor-pointer hover:opacity-80"
          >
            <Trash size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            "relative cursor-pointer rounded-3xl border border-dashed transition-all duration-300",
            isDragging
              ? "bg-primitives-white_5 border-white"
              : "border-primitives-white_20 hover:bg-primitives-white_5",
          )}
        >
          <input
            type="file"
            accept={accept}
            onChange={handleInputChange}
            className="absolute inset-0 cursor-pointer opacity-0"
            aria-label="Upload file"
          />

          <div className="flex flex-col items-center justify-center px-[30px] py-[30px] text-center">
            <LogOut className="-rotate-90" size={24} color="#00FFEA" />
            <p className="font-inter mt-3 text-base leading-[140%] font-normal tracking-[0.16px] text-white">
              Drag and drop or{" "}
              <span className="text-green-normal font-inter text-[14px] leading-[140%] font-semibold underline">
                choose file
              </span>{" "}
              to upload a copy
            </p>
            <p className="font-inter max-w-[352px] text-base leading-[140%] font-normal tracking-[0.16px] text-white">
              of your valid identification in PNG, JPEG or PDF format, no larger
              than 3mb in size
            </p>
          </div>
        </div>
      )}

      {error && (
        <p
          className="text-red-error font-inter text-center text-base leading-[140%] font-normal tracking-[0.16px]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
