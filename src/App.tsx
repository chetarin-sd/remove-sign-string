import { useState } from "react";
import { Button, Textarea } from "@material-tailwind/react";

function App() {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState("");

  function removeSignAndCommas(text: string): string {
    // ใช้ Regular Expression เพื่อแยกตัวเลขและลบเครื่องหมาย
    const result = text.replace(/[+]/g, "");
    return result;
  }

  function processMultipleLines(input: string): string {
    const lines = input.split("\n"); // แยกข้อความเป็นแถวหลายๆ แถว

    const outputLines = lines.map((line) => {
      const result = removeSignAndCommas(line);
      return result;
    });

    return outputLines.join("\n"); // รวมข้อความเป็นแถวหลายๆ แถว
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResult(processMultipleLines(inputString));
    console.log(result);
  };

  return (
    <>
      <div className='container mx-auto my-10 px-4'>
        <h1 className='text-2xl font-bold text-center'>Remove Sign String</h1>

        <Textarea
          label='Input String'
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          rows={10}
          resize={true}
        ></Textarea>

        <div className='flex justify-center my-4'>
          <Button
            type='button'
            onClick={handleSubmit}
            variant='gradient'
            placeholder='แปลงผลลัพธ์'
          >
            แปลงผลลัพธ์
          </Button>
        </div>

        <div className='py-2'>
          <Textarea
            id='resultTxt'
            label='Result'
            value={result}
            rows={10}
            resize={true}
          ></Textarea>
        </div>
      </div>
    </>
  );
}

export default App;
