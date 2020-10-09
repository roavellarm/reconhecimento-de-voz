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

  const listen = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: state.language,
    })
  }

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

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return alert('Este browser não tem suporte para reconhecimento de voz')
  }

  return (
    <S.Container>
      <S.Header>{state.headerTitle}</S.Header>

      <Switch language={state.language} onChange={onChangeLanguage} />

      <S.ButtonsContainer>
        <Button title={state.startButton} onClick={() => listen()} />
        <Button
          title={state.stopButton}
          onClick={SpeechRecognition.stopListening}
        />
        <Button title={state.clearButton} onClick={resetTranscript} />
      </S.ButtonsContainer>

      <S.TextContainer>
        <S.Title>{state.fieldTitle}</S.Title>
        <S.Text>{transcript}</S.Text>
      </S.TextContainer>
    </S.Container>
  )
}
