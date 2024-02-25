"use client";

import image from "./1.png";
import { Button } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AudioRecorder } from "./recorder";

export function FormVoice() {
  const [text, setText] = useState<any>("");
  const [recorded, setRecorded] = useState(false);

  const displayText = (modelText: string) => {
    setText(modelText);
  };

  const handleOnChangeText = async () => {
    setRecorded(false);
  };

  return (
    <div className="flex">
      <div className="  w-3/6">
        <div className="flex justify-center">
          <Image src={image} alt="micro" width={200} />
        </div>

        <div className="flex justify-center p-5">
          {recorded ? (
            <Button type="primary" onClick={handleOnChangeText}>
              Transcript
            </Button>
          ) : (
            <AudioRecorder displayText={displayText} />
          )}
        </div>
      </div>
      <div className="w-3/6 flex items-center p-6">
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
