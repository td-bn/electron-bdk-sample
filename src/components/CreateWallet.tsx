import {useEffect, useState} from "react";
import { generateMnemonic } from "web-bip39";
import wordlist from 'web-bip39/wordlists/english';

export default function CreateWallet() {
  const [mnemonic, setMnemonic] = useState(null);
  useEffect(() => {
     async function newMnemonic() {
       let m = await generateMnemonic(wordlist);
       setMnemonic(m);
     }
     newMnemonic();
  }, []);

  return (<>
      <div className="p-4 flex justify-center space-x-2">
        <div className="flex-1">
          {mnemonic} 
        </div>
        <button
          type="button"
          className="bg-blue-400 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Create Wallet
        </button>
      </div>
  </>)
}
