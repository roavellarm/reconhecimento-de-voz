import React from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import './App.css'

export default function Dictaphone() {
  const { transcript, resetTranscript } = useSpeechRecognition()

  const listen = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'pt-BR',
    })
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return alert('Este browser não tem suporte para reconhecimento de voz')
  }

  return (
    <div className='Container'>
      <h1 className='Header'>Reconhecimento de voz</h1>
      <div className='ButtonsContainer'>
        <button className='Button' onClick={() => listen()}>
          Começar
        </button>
        <button className='Button' onClick={SpeechRecognition.stopListening}>
          Parar
        </button>
        <button className='Button' onClick={resetTranscript}>
          Limpar
        </button>
      </div>
      <div className='TextContainer'>
        <h3 className='Title'>Transcrição</h3>
        <p className='Text'>{transcript}</p>
      </div>
    </div>
  )
}
