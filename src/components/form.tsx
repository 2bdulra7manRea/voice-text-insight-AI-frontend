"use client";

import { Button, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { Keyword } from "./keyword";
import { sendInputToModel } from "@/api";

export function FormText() {
  const [text, setText] = useState<any>("");
  const [keywords, setKeywords] = useState<any[]>([]);
  const [readonly, setReadOnly] = useState(false);
  const [loading , setLoading] = useState(false)
  const handleOnChangeText = async () => {
    setReadOnly(true);
    setLoading(true)
    const words: any[] = [];
    sendInputToModel(text)
      .then((response: any) => {
        console.log(response);
        if(Array.isArray(response)){
        response.forEach((obj: any) => {
          words.push(obj.word);
        });
        setKeywords(words);
      }
      })
      .catch((error: any) => {
        console.log(error);
      }).finally(()=>{
        setLoading(false)
      });
  };

  const reset = () => {
    setReadOnly(false);
    setText("");
    setKeywords([]);
  };

  return (
    <div>
      <TextArea
        rows={10}
        readOnly={readonly}
        value={text}
        onChange={(v) => setText(v.target.value)}
        placeholder="What do you thing ?"
        maxLength={1000}
        style={{
          resize: "none",
          backgroundColor: "rgba(11, 11, 83, 0.438)",
          outline: "none",
          border:"none",
          color: "white",
          fontSize: "20px",
          fontStyle: "italic",
        }}
      />

      <div className="flex justify-center p-5">
        {readonly ? (
          <Button type="primary" onClick={reset}>
            Reset
          </Button>
        ) : (
          <Button type="primary" onClick={handleOnChangeText}>
            Extract Keywords
          </Button>
        )}
      </div>
      <div>
      <div className="flex justify-center p-5">
        {<Spin spinning={loading} />}
      </div>
        {keywords &&
          keywords.map((word) => {
            return <Keyword text={word} />;
          })}
      </div>
    </div>
  );
}
