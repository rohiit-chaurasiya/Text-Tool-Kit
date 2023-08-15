// import React from 'react'
import  {React, useState } from 'react'


import logoImage from '../image/logo1.jpeg';

export default function Home() {
    const handleOnChange=(event)=>{

        // setText(event.target.value);
        const newText = event.target.value;
        setText(newText);
        setOriginalText(newText);
      }
    
      const convertUppercase=()=>{
        setOriginalText(text);
        let newText=text.toUpperCase();
        setText(newText);
      }
    
      const convertLowerCase=()=>{
        setOriginalText(text);
        let newText=text.toLowerCase();
        setText(newText);
    
      }
      

      function capitalizeAfterPeriods(input)
      {
        let result = input.toLowerCase();

        result = result.replace(/(^|\. *)([a-z])/g, function(match, separator, firstLetter) {
            return separator + firstLetter.toUpperCase();
        });

        return result;

        
      }
      

      const SentenceCase=()=>{
        setOriginalText(text)
        const newText = capitalizeAfterPeriods(text);
        setText(newText);
    
      }

    
      const convertTitleCase=()=>{
        setOriginalText(text)
        let words = text.toLowerCase().split(' ');
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        setText(capitalizedWords.join(' '));
    
      }
    
      const clearText=()=>{
        setOriginalText('');
        setText('');
    
      }
    
      const copyText = () => {
        const copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
      
        try {
          const successful = document.execCommand('copy');
          if (successful) {
            console.log('Text copied to clipboard');
          } else {
            console.error('Failed to copy text');
          }
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
      };
    
      const removeExtraSpace=()=>{
        setOriginalText(text);
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
    
      }
    
    
      const getWordCount = (text) => {
        if (!text) return 0;
        const words = text.match(/\b\S+\b/g);
        return words ? words.length : 0;
      };
    
      const[text,setText]=useState('');
      const [originalText, setOriginalText] = useState('');
    
      const wordCount = getWordCount(text);
      const characterCount = text.length;





  return (
    <>
    
    <div className="container" style={{ marginTop: '120px', textAlign:'center' }}>
        <img src={logoImage} alt='logo' style={{textAlign:'center',height:'120px', width:'300px'}} />
        {/* <h1 className='mt-3' style={{ textAlign: 'center', marginTop:'200px' }}>Text Toolkit</h1> */}
        <p className='mb-5' style={{ textAlign: 'center' }}><strong><em>Simplify, format, and manage your text effortlessly.</em></strong></p>
    </div>
    
    <div>
    
      <div className="container">
      
        <div className='row justify-content-md-center'>
          <div className='col col-lg-9'>
            <div className="mb-3">
              <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="button-container"  style={{ textAlign: 'center' }}>
              <div className="button-row mx-2">
                <button className="btn btn-warning mx-2 my-2" onClick={convertUppercase}>
                  Convert to UPPERCASE
                </button>
              </div>
              <div className="button-row mx-2">
                <button className="btn btn-success mx-2 my-2" onClick={convertLowerCase}>
                  Convert to lowercase
                </button>
              </div>
              <div className="button-row mx-2">
                <button className="btn btn-info mx-2 my-2" onClick={convertTitleCase}>
                  Convert to Titlecase
                </button>
              </div>
              <div className="button-row mx-2">
                <button className="btn btn-info mx-2 my-2" onClick={SentenceCase}>
                  Convert to Sentence Case
                </button>
              </div>
              <div className="button-row mx-2">
                <button className="btn btn-danger mx-2 my-2" onClick={removeExtraSpace}>
                  Remove Extra Space
                </button>
              </div>
              <div className="button-row mx-2">
                <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
                  Copy Text
                </button>
              </div>
              <div className="button-row mx-2">
                <button className="btn btn-dark mx-2 my-2" onClick={clearText}>
                  Clear Text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5 mb-2">
      <h5>Word & Character Count Display</h5>
      <p>{wordCount} {wordCount === 1 ? 'word' : 'words'} and {characterCount}{' '}characters</p>
    </div>

    <div className="container mt-2 mb-5">
      <h5>Privious Input Display</h5>
      <p>{originalText}</p>
    </div>

   



    </>
  )
}
