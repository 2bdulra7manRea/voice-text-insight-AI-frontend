import { sendRecordToModel } from "@/api";
import { Button, Spin } from "antd";
import React, { useState, useEffect, useCallback } from "react";

export const AudioRecorder = ({
  displayText,
}: {
  displayText: (modelText: string) => void;
}) => {
  const [mediaRecorder, setMediaRecorder] = useState<any>(null);
  const [recordedChunks, setRecordedChunks] = useState<any[]>([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [start, setStart] = useState(false);
  const [getBlob, setBlob] = useState<any>();
  const [getMedia, setMedia] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const resetInputs = () => {
    setBlob("");
    setAudioUrl("");
    displayText("");
  };

  const closeMedia = (stream: MediaStream) => {
    console.log("onDistory", stream);
    if (stream) {
      console.log("steam");
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    const handleOnStart = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        console.log(stream);
        setMedia(stream);
        const recorder = new MediaRecorder(stream);
        let recordedChunksK: any[] = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            console.log(event.data);
            recordedChunksK = [...recordedChunks, event.data];
            // setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
          }
        };

        recorder.onstop = () => {
          if (recordedChunksK) {
            const audioBlob = new Blob(recordedChunksK, { type: "audio/wav" });
            const url = URL.createObjectURL(audioBlob);
            console.log(url);
            setAudioUrl(url);
            setBlob(audioBlob);
          }
        };

        setMediaRecorder(recorder);
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    };

    handleOnStart();
  }, []);

  useEffect(() => {
    return () => {
      closeMedia(getMedia);
    };
  }, [getMedia]);

  const submit = () => {
    setLoading(true);

    const file = new File([getBlob], "audio.wav");
    sendRecordToModel(file)
      .then((response) => {
        if (response.text) {
          displayText(response.text);
        }
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const starting = () => {
    resetInputs();
    mediaRecorder.start();
    setStart(true);
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setStart(false);
    }
  };

  return (
    <div>
      {start ? (
        <Button type="primary" onClick={handleStopRecording}>
          Stop Recording
        </Button>
      ) : (
        <>
          <Button type="primary" disabled={loading} onClick={starting}>
            Start Recording
          </Button>
          {audioUrl && (
            <Button type="primary" disabled={loading} onClick={submit}>
              Transcript
            </Button>
          )}
        </>
      )}
      {audioUrl && <audio controls src={audioUrl} />}
      <div className="flex justify-center p-5">
        {<Spin spinning={loading} />}
      </div>
    </div>
  );
};
