const apiKey = process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY;

export async function sendInputToModel(text: string) {
  const modelEndpoint =
    "https://api-inference.huggingface.co/models/yanekyuk/bert-keyword-extractor";

  const inputData = {
    inputs: text,
  };

  const response = fetch(modelEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  });

  return (await response).json();
}

export async function sendRecordToModel(data: any) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/primeline/whisper-large-v3-german",
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  return result;
}

export async function sendImageToModel(file: any) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/microsoft/trocr-base-handwritten",
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      method: "POST",
      body: file,
    }
  );
  const result = await response.json();
  return result;
}
