const apiKey = process.env.REACT_APP_API_KEY
const modelEndpoint =
  "https://api-inference.huggingface.co/models/yanekyuk/bert-keyword-extractor";

export async function sendInputToModel(text: string) {
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

export async function sendRecordToModel(data:any) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/primeline/whisper-large-v3-german",
		{
			headers: { Authorization: `Bearer ${apiKey}`},
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}
