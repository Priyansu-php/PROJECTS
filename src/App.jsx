import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(10)
  const [numbers, setnumbers] = useState(false)
  const [characters, setcharacters] = useState(false) 
  const [Password, setPassword] = useState('')
  
const passwordRef = useRef(null) 

  const passwordgenerator = useCallback(() => {
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbers) str+='0123456789'
    if (characters) str+='!@#$%^&*()_+~`|}{[]\:;?><,./-='
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbers, characters, setPassword]) 
   
  const copyPassword = useCallback(() => {
     passwordRef.current?.select()
     alert('Password copied to clipboard')
    window.navigator.clipboard.writeText(Password)}, [Password])

useEffect(() => {passwordgenerator()}, [length, numbers, characters, passwordgenerator])
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-white bg-gray-700 '>
   <h1 className='font-bold text-center my-3 text-white'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-600'>
    <link rel="stylesheet" href='style.css'/>
<input 

ref={passwordRef}
type="text"
value={Password}
className='w-full py-2 px-3 outline-none'
placeholder='Your Password' readOnly
/>
<button
className='bg-gray-800 text-white px-3 py-2 rounded-md
             transition-colors duration-200 ease-in-out
             hover:bg-blue-800 hover:scale-130
             active:scale-95'
onClick={copyPassword}
>Copy
</button>
    </div>
    <div className='flex items-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={5}
        max={20}
        value={length}
        className='cursor-pointer' 
        onChange={(e) => {setlength(e.target.value)}}/>
        <label htmlFor='length'>Length: {length}</label> 
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        id='numbers'
        checked={numbers}
        onChange={(e) => {setnumbers(e.target.checked)}}
        />
        <label htmlFor='numbers'>Numbers</label>  </div>
        <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        id='characters'
        checked={characters}
        onChange={(e) => {setcharacters(e.target.checked)}}
        />
        <label htmlFor='characters'>Characters</label>  </div>
    </div>
   </div>
   </>
  )
}

export default App
