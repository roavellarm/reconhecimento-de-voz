import React from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import Button from '../components/Button'
import * as S from './styles'

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
    <S.Container>
      <S.Header>Reconhecimento de voz</S.Header>

      <S.ButtonsContainer>
        <Button title='Começar' onClick={() => listen()} />
        <Button title='Parar' onClick={SpeechRecognition.stopListening} />
        <Button title='Limpar' onClick={resetTranscript} />
      </S.ButtonsContainer>

      <S.TextContainer>
        <S.Title>Transcrição</S.Title>
        <S.Text>{transcript}</S.Text>
      </S.TextContainer>
    </S.Container>
  )
}
