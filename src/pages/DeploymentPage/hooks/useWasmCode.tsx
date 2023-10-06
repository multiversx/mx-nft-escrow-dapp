import { useState } from 'react';
import { Code } from '@multiversx/sdk-core/out/smartcontracts/code';

const useWasmCode = () => {
  const [code, setCode] = useState<Code>();

  const changeHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      const toBuffer = (ab: any) => {
        const buf = Buffer.alloc(ab.byteLength);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
          buf[i] = view[i];
        }
        return buf;
      };

      const buffer = toBuffer(reader.result);
      const _code = Code.fromBuffer(buffer);
      setCode(_code);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  return { code, onChange: changeHandler };
};

export default useWasmCode;
