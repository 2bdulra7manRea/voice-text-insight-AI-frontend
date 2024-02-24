"use client";

import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { Keyword } from "./keyword";
import { sendInputToModel } from "@/api";

export function FormText() {
  const [text, setText] = useState<any>("");
  const [keywords , setKeywords ] = useState<any[]>([])
  const [readonly, setReadOnly] = useState(false);
  const handleOnChangeText = async () => {
    setReadOnly(true);
    setKeywords(['hello', 'egypt' ,'london'])
    const words:any[] =[]
    sendInputToModel(text).then((response:any)=>{
        console.log(response)
        response.forEach((obj:any)=>{
            words.push(obj.word)            
        })
        setKeywords(words)
    }).catch((error:any)=>{
        console.log(error)
    })

  };


  const reset =()=>{
    setReadOnly(false)
    setText("")
    setKeywords([])
  }

  return (
    <div style={{ width: "600px", height: "500px", padding: "20px" }}>
      <TextArea
        rows={10}
        readOnly={readonly}
        value={text}
        onChange={(v) => setText(v.target.value)}
        placeholder="What do you thing ?"
        maxLength={1000}
        style={{
          resize: "none",
          backgroundColor: "rgb(49, 49, 49)",
          outline: "none",
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
        {keywords && keywords.map((word)=>{
            return <Keyword text={word} />
        })}
      </div>
    </div>
  );
}
