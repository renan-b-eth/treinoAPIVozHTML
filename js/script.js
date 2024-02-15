let spreech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("textarea");

window.SpeechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    spreech.voices = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)))

}

document.querySelector("button").addEventListener("click", () => {

    spreech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(spreech)
    
})