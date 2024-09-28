import React, { useState } from 'react';

const SpeechRecognitionComponent = () => {
  const [input, setInput] = useState('');
  
  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.start();

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          sendAudioToApi(audioBlob);
        };

        // Record for 5 seconds
        setTimeout(() => {
          mediaRecorder.stop();
        }, 5000);
      })
      .catch(error => {
        console.error('Error accessing audio stream:', error);
      });
  };

  const sendAudioToApi = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    const url = 'https://speech-to-text-api.p.rapidapi.com/recognize'; // Use the correct speech-to-text API endpoint
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '8a23987299mshbedb57b02ceb428p10618ajsn8c75e9efafc7',
        'x-rapidapi-host': 'speech-to-text-api.p.rapidapi.com' // Use the correct host for the speech-to-text API
      },
      body: formData
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const transcript = result.transcription || result.text; // Adjust based on the actual response structure
      setInput((prevInput) => `${prevInput} ${transcript}`);
      console.log(transcript);
    } catch (error) {
      console.error('Error with RapidAPI Speech-to-Text:', error);
    }
  };

  const getLanguages = async () => {
    const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/languages';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8a23987299mshbedb57b02ceb428p10618ajsn8c75e9efafc7',
        'x-rapidapi-host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getVoices = async () => {
    const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/voices?language_code=en-US';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8a23987299mshbedb57b02ceb428p10618ajsn8c75e9efafc7',
        'x-rapidapi-host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="10" cols="50"></textarea>
      <br />
      <button onClick={startRecording}>Start Recording</button>
      <br />
      <button onClick={getLanguages}>Get Languages</button>
      <br />
      <button onClick={getVoices}>Get Voices</button>
    </div>
  );
};

export default SpeechRecognitionComponent;
