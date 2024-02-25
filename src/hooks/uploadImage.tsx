import { GetProp, UploadFile, UploadProps } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import { useState } from "react";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const useImageAdjuster = (): {
  imageFile: any;
  imageUrl: string;
  handleImage: (info: UploadChangeParam<UploadFile<any>>) => void | undefined;
} => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<any>();

  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    const file = newFileList[0];

    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setImageUrl(file.url || (file.preview as string));
    setImageFile(file);
  };

  return { handleImage: handleChange, imageUrl, imageFile };
};
