import React, { useState } from 'react'
import './CopyClipboard.css'

const CopyClipboard = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleCopy = async (value) => {
    if(!value.trim()) {
        setMessage("Input cannot be empty");
        setTimeout(() => setMessage(""), 2000);
        return;
    }
 try {
      await navigator.clipboard.writeText(value);
      setMessage("✅ Copied successfully!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage("❌ Failed to copy!");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <div className="copyToClipboard">
        <h1>Copy To Clipboard</h1>
        <p>Click the button to copy the text</p>
        <div className="copyToClipboard-container">
            <div>
                <label htmlFor='text'>
                    Enter Your text:
                    <input 
                    type='text'
                    placeholder='Type Something'
                    id='text'
                    data-testid="input-field"
                    onChange={handleChange}
                    value={input}
                    />
                </label>
                <button
                className="btn"
                data-testid="copy-button"
                onClick={() => handleCopy(input)}>
                    Copy
                    </button>
                   {/* Message display */}
          {message && (
            <p
              style={{
                marginTop: "10px",
                color: message.includes("❌") ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              {message}
            </p>
          )}
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default CopyClipboard

// input → stores input value.

// message → stores temporary success/error message.

// handleCopy():

// Checks if the field is empty.

// If not empty → uses navigator.clipboard.writeText(value) to copy text.

// Shows message for 2 seconds using setTimeout.