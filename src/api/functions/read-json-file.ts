type Alternative = {
  text: string;
};

type Question = {
  title: string;
  topic: string;
  correctAnswerIndex: number;
  alternatives: Alternative[];
};

export type JSONFormat = {
  questions: Question[];
};

export function readJsonFile(file: File | null): Promise<JSONFormat> {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("no file provided"));

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = JSON.parse(String(e.target ? e.target.result : ""));

        if (!data.questions || data.questions.length < 1)
          throw new Error("invalid json format, missing questions");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error("error reading file"));

    reader.readAsText(file);
  });
}
