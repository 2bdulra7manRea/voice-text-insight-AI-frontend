"use client";
// UPload image
// convert image to file
// send request to model
// get text to display it

import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { useImageAdjuster } from "@/hooks/uploadImage";
import { sendImageToModel } from "@/api";

export default function FormTextImage() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { handleImage, imageUrl, imageFile } = useImageAdjuster();

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (files: any) => {
    handleImage(files);
  };

  const submit = () => {
    setLoading(true);
    sendImageToModel(imageFile)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-between">
      <div className="w-3/6 flex items-center justify-center">
        <div>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          maxCount={1}
          multiple={false}
          showUploadList={false}
        >
          <button
            style={{ border: 0, background: "none" }}
            disabled={loading}
            type="button"
          >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>

        <div>
          <Button type="primary" disabled={loading} onClick={submit}>
            Convert to text
          </Button>
        </div>

<div className="w-3/6">
        {imageUrl && (
          <img alt="example" style={{ width: "100%" }} src={imageUrl} />
        )}

</div>
        </div>
      </div>
      <div className="w-3/6">
        <p>{text}</p>
        <div className="flex justify-center p-5">
          {<Spin spinning={loading} />}
        </div>
      </div>
    </div>
  );
}
