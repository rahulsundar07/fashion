import { useState } from 'react'

function App() {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState('')

  const generateImage = async () => {
    // TODO: Implement the image generation logic
    setImage('https://via.placeholder.com/512')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Fashion AI Platform</h1>
      <div className="flex w-full max-w-lg mb-8">
        <input
          type="text"
          className="flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="px-8 py-4 bg-blue-500 text-white font-bold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={generateImage}
        >
          Generate
        </button>
      </div>
      {image && (
        <div className="w-full max-w-lg">
          <img src={image} alt="Generated Image" className="w-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  )
}

export default App