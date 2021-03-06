import React, { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import Button from '../components/Button'
import Switch from '../components/Switch'
import * as S from './styles'

export default function Dictaphone() {
  const initialState = {
    language: 'pt-BR',
    headerTitle: 'Reconhecimento de voz',
    startButton: 'Começar',
    stopButton: 'Parar',
    clearButton: 'Limpar',
    fieldTitle: 'Transcrição',
  }
  const { transcript, resetTranscript } = useSpeechRecognition()
  const [state, setState] = useState(initialState)
  const [isStarted, setIsStarted] = useState(false)
  const { stopListening, browserSupportsSpeechRecognition } = SpeechRecognition

  const start = () => {
    setIsStarted(true)
    SpeechRecognition.startListening({
      continuous: true,
      language: state.language,
    })
  }

  const stop = () => {
    setIsStarted(false)
    return stopListening()
  }

  const clear = () => resetTranscript()

  const onChangeLanguage = () => {
    if (state.language !== 'pt-BR') return setState(initialState)

    return setState({
      language: 'en-US',
      headerTitle: 'Speech recognition',
      startButton: 'Start',
      stopButton: 'Stop',
      clearButton: 'Clear',
      fieldTitle: 'Transcription',
    })
  }

  if (!browserSupportsSpeechRecognition()) {
    return alert('Este browser não tem suporte para reconhecimento de voz')
  }

  return (
    <S.Container>
      <S.Header>{state.headerTitle}</S.Header>

      <Switch language={state.language} onChange={onChangeLanguage} />

      <S.ButtonsContainer>
        {!isStarted && (
          <Button title={state.startButton} onClick={start} color='#4caf50' />
        )}
        {isStarted && (
          <Button title={state.stopButton} onClick={stop} color='#d32f2f' />
        )}
        <Button title={state.clearButton} onClick={clear} color='#ffbe50' />
      </S.ButtonsContainer>

      <S.TextContainer>
        <S.Title>{state.fieldTitle}</S.Title>
        <S.Text>{transcript}</S.Text>
      </S.TextContainer>
    </S.Container>
  )
}
