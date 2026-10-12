const phraseSets = {
  home: [
    ["💧", "I need water."], ["🍽️", "I am hungry."], ["🆘", "I need help."],
    ["⏳", "Please wait."], ["💬", "I want to talk."], ["🛏️", "I need to rest."],
    ["🚻", "Where is the bathroom?"], ["❤️", "Thank you."], ["🔁", "Please say that again."]
  ],
  classroom: [
    ["🙋", "I have a question."], ["🔁", "Please explain that again."], ["❓", "I don't understand."],
    ["✏️", "I need a pencil."], ["⏳", "Please wait."], ["🚻", "May I use the bathroom?"],
    ["📖", "Can you help me read this?"], ["💧", "I need water."], ["🆘", "I need help."]
  ],
  hospital: [
    ["🆘", "I need help."], ["🩹", "I am in pain."], ["💧", "I need water."],
    ["🧑‍⚕️", "Please call the nurse."], ["👪", "Please call my attendant."], ["🌡️", "I feel unwell."],
    ["⏳", "Please wait."], ["🚻", "I need the bathroom."], ["🔁", "Please explain that again."]
  ],
  transport: [
    ["🛑", "Please stop here."], ["📍", "Please stop at the next bus stop."], ["🆘", "I need help."],
    ["🧭", "Where is this place?"], ["💳", "How much is the fare?"], ["⏳", "Please wait."],
    ["♿", "I need assistance, please."], ["📱", "Please help me call someone."], ["❤️", "Thank you."]
  ]
};

const translations = {
  en: {
    home: ["I need water.", "I am hungry.", "I need help.", "Please wait.", "I want to talk.", "I need to rest.", "Where is the bathroom?", "Thank you.", "Please say that again."],
    classroom: ["I have a question.", "Please explain that again.", "I don't understand.", "I need a pencil.", "Please wait.", "May I use the bathroom?", "Can you help me read this?", "I need water.", "I need help."],
    hospital: ["I need help.", "I am in pain.", "I need water.", "Please call the nurse.", "Please call my attendant.", "I feel unwell.", "Please wait.", "I need the bathroom.", "Please explain that again."],
    transport: ["Please stop here.", "Please stop at the next bus stop.", "I need help.", "Where is this place?", "How much is the fare?", "Please wait.", "I need assistance, please.", "Please help me call someone.", "Thank you."]
  },
  ta: {
    home: ["எனக்கு தண்ணீர் வேண்டும்.", "எனக்குப் பசிக்கிறது.", "எனக்கு உதவி வேண்டும்.", "தயவுசெய்து காத்திருக்கவும்.", "நான் பேச விரும்புகிறேன்.", "நான் ஓய்வெடுக்க வேண்டும்.", "கழிப்பறை எங்கே?", "நன்றி.", "தயவுசெய்து மீண்டும் சொல்லுங்கள்."],
    classroom: ["எனக்கு ஒரு கேள்வி உள்ளது.", "தயவுசெய்து மீண்டும் விளக்கவும்.", "எனக்குப் புரியவில்லை.", "எனக்கு ஒரு பென்சில் வேண்டும்.", "தயவுசெய்து காத்திருக்கவும்.", "நான் கழிப்பறைக்குச் செல்லலாமா?", "இதைப் படிக்க எனக்கு உதவ முடியுமா?", "எனக்கு தண்ணீர் வேண்டும்.", "எனக்கு உதவி வேண்டும்."],
    hospital: ["எனக்கு உதவி வேண்டும்.", "எனக்கு வலிக்கிறது.", "எனக்கு தண்ணீர் வேண்டும்.", "தயவுசெய்து செவிலியரை அழைக்கவும்.", "தயவுசெய்து என் உடன் இருப்பவரை அழைக்கவும்.", "எனக்கு உடல்நிலை சரியில்லை.", "தயவுசெய்து காத்திருக்கவும்.", "எனக்கு கழிப்பறை வேண்டும்.", "தயவுசெய்து மீண்டும் விளக்கவும்."],
    transport: ["தயவுசெய்து இங்கே நிறுத்தவும்.", "அடுத்த பேருந்து நிறுத்தத்தில் நிறுத்தவும்.", "எனக்கு உதவி வேண்டும்.", "இந்த இடம் எங்கே?", "கட்டணம் எவ்வளவு?", "தயவுசெய்து காத்திருக்கவும்.", "எனக்கு உதவி தேவை.", "யாருக்காவது தொலைபேசியில் அழைக்க உதவவும்.", "நன்றி."]
  },
  te: {
    home: ["నాకు నీళ్లు కావాలి.", "నాకు ఆకలిగా ఉంది.", "నాకు సహాయం కావాలి.", "దయచేసి వేచి ఉండండి.", "నేను మాట్లాడాలనుకుంటున్నాను.", "నాకు విశ్రాంతి కావాలి.", "మరుగుదొడ్డి ఎక్కడ ఉంది?", "ధన్యవాదాలు.", "దయచేసి మళ్లీ చెప్పండి."],
    classroom: ["నాకు ఒక ప్రశ్న ఉంది.", "దయచేసి మళ్లీ వివరించండి.", "నాకు అర్థం కాలేదు.", "నాకు పెన్సిల్ కావాలి.", "దయచేసి వేచి ఉండండి.", "నేను మరుగుదొడ్డికి వెళ్లవచ్చా?", "ఇది చదవడానికి నాకు సహాయం చేస్తారా?", "నాకు నీళ్లు కావాలి.", "నాకు సహాయం కావాలి."],
    hospital: ["నాకు సహాయం కావాలి.", "నాకు నొప్పిగా ఉంది.", "నాకు నీళ్లు కావాలి.", "దయచేసి నర్సును పిలవండి.", "దయచేసి నా సహాయకుడిని పిలవండి.", "నాకు బాగాలేదు.", "దయచేసి వేచి ఉండండి.", "నాకు మరుగుదొడ్డి కావాలి.", "దయచేసి మళ్లీ వివరించండి."],
    transport: ["దయచేసి ఇక్కడ ఆపండి.", "తదుపరి బస్ స్టాప్ వద్ద ఆపండి.", "నాకు సహాయం కావాలి.", "ఈ ప్రదేశం ఎక్కడ ఉంది?", "టికెట్ ధర ఎంత?", "దయచేసి వేచి ఉండండి.", "దయచేసి నాకు సహాయం చేయండి.", "ఎవరికైనా ఫోన్ చేయడానికి సహాయం చేయండి.", "ధన్యవాదాలు."]
  },
  hi: {
    home: ["मुझे पानी चाहिए।", "मुझे भूख लगी है।", "मुझे मदद चाहिए।", "कृपया इंतज़ार करें।", "मैं बात करना चाहता/चाहती हूँ।", "मुझे आराम करना है।", "शौचालय कहाँ है?", "धन्यवाद।", "कृपया फिर से कहें।"],
    classroom: ["मेरा एक सवाल है।", "कृपया फिर से समझाएँ।", "मुझे समझ नहीं आया।", "मुझे एक पेंसिल चाहिए।", "कृपया इंतज़ार करें।", "क्या मैं शौचालय जा सकता/सकती हूँ?", "क्या आप मुझे यह पढ़ने में मदद करेंगे?", "मुझे पानी चाहिए।", "मुझे मदद चाहिए।"],
    hospital: ["मुझे मदद चाहिए।", "मुझे दर्द हो रहा है।", "मुझे पानी चाहिए।", "कृपया नर्स को बुलाएँ।", "कृपया मेरे साथ आए व्यक्ति को बुलाएँ।", "मेरी तबीयत ठीक नहीं है।", "कृपया इंतज़ार करें।", "मुझे शौचालय जाना है।", "कृपया फिर से समझाएँ।"],
    transport: ["कृपया यहाँ रोकें।", "कृपया अगले बस स्टॉप पर रोकें।", "मुझे मदद चाहिए।", "यह जगह कहाँ है?", "किराया कितना है?", "कृपया इंतज़ार करें।", "कृपया मेरी सहायता करें।", "किसी को फोन करने में मेरी मदद करें।", "धन्यवाद।"]
  },
  ml: {
    home: ["എനിക്ക് വെള്ളം വേണം.", "എനിക്ക് വിശക്കുന്നു.", "എനിക്ക് സഹായം വേണം.", "ദയവായി കാത്തിരിക്കൂ.", "എനിക്ക് സംസാരിക്കണം.", "എനിക്ക് വിശ്രമിക്കണം.", "ശൗചാലയം എവിടെയാണ്?", "നന്ദി.", "ദയവായി വീണ്ടും പറയൂ."],
    classroom: ["എനിക്ക് ഒരു ചോദ്യമുണ്ട്.", "ദയവായി വീണ്ടും വിശദീകരിക്കൂ.", "എനിക്ക് മനസ്സിലായില്ല.", "എനിക്ക് ഒരു പെൻസിൽ വേണം.", "ദയവായി കാത്തിരിക്കൂ.", "എനിക്ക് ശൗചാലയത്തിൽ പോകാമോ?", "ഇത് വായിക്കാൻ സഹായിക്കാമോ?", "എനിക്ക് വെള്ളം വേണം.", "എനിക്ക് സഹായം വേണം."],
    hospital: ["എനിക്ക് സഹായം വേണം.", "എനിക്ക് വേദനയുണ്ട്.", "എനിക്ക് വെള്ളം വേണം.", "ദയവായി നഴ്സിനെ വിളിക്കൂ.", "ദയവായി എന്റെ സഹായിയെ വിളിക്കൂ.", "എനിക്ക് സുഖമില്ല.", "ദയവായി കാത്തിരിക്കൂ.", "എനിക്ക് ശൗചാലയത്തിൽ പോകണം.", "ദയവായി വീണ്ടും വിശദീകരിക്കൂ."],
    transport: ["ദയവായി ഇവിടെ നിർത്തൂ.", "അടുത്ത ബസ് സ്റ്റോപ്പിൽ നിർത്തൂ.", "എനിക്ക് സഹായം വേണം.", "ഈ സ്ഥലം എവിടെയാണ്?", "യാത്രാക്കൂലി എത്രയാണ്?", "ദയവായി കാത്തിരിക്കൂ.", "ദയവായി എന്നെ സഹായിക്കൂ.", "ആരെയെങ്കിലും വിളിക്കാൻ സഹായിക്കൂ.", "നന്ദി."]
  },
  kn: {
    home: ["ನನಗೆ ನೀರು ಬೇಕು.", "ನನಗೆ ಹಸಿವಾಗಿದೆ.", "ನನಗೆ ಸಹಾಯ ಬೇಕು.", "ದಯವಿಟ್ಟು ಕಾಯಿರಿ.", "ನನಗೆ ಮಾತನಾಡಬೇಕು.", "ನನಗೆ ವಿಶ್ರಾಂತಿ ಬೇಕು.", "ಶೌಚಾಲಯ ಎಲ್ಲಿದೆ?", "ಧನ್ಯವಾದಗಳು.", "ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ."],
    classroom: ["ನನಗೆ ಒಂದು ಪ್ರಶ್ನೆ ಇದೆ.", "ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ವಿವರಿಸಿ.", "ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ.", "ನನಗೆ ಒಂದು ಪೆನ್ಸಿಲ್ ಬೇಕು.", "ದಯವಿಟ್ಟು ಕಾಯಿರಿ.", "ನಾನು ಶೌಚಾಲಯಕ್ಕೆ ಹೋಗಬಹುದೇ?", "ಇದನ್ನು ಓದಲು ಸಹಾಯ ಮಾಡುತ್ತೀರಾ?", "ನನಗೆ ನೀರು ಬೇಕು.", "ನನಗೆ ಸಹಾಯ ಬೇಕು."],
    hospital: ["ನನಗೆ ಸಹಾಯ ಬೇಕು.", "ನನಗೆ ನೋವಾಗುತ್ತಿದೆ.", "ನನಗೆ ನೀರು ಬೇಕು.", "ದಯವಿಟ್ಟು ನರ್ಸ್ ಅನ್ನು ಕರೆಸಿ.", "ದಯವಿಟ್ಟು ನನ್ನ ಸಹಾಯಕರನ್ನು ಕರೆಸಿ.", "ನನಗೆ ಹುಷಾರಿಲ್ಲ.", "ದಯವಿಟ್ಟು ಕಾಯಿರಿ.", "ನನಗೆ ಶೌಚಾಲಯಕ್ಕೆ ಹೋಗಬೇಕು.", "ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ವಿವರಿಸಿ."],
    transport: ["ದಯವಿಟ್ಟು ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ.", "ಮುಂದಿನ ಬಸ್ ನಿಲ್ದಾಣದಲ್ಲಿ ನಿಲ್ಲಿಸಿ.", "ನನಗೆ ಸಹಾಯ ಬೇಕು.", "ಈ ಸ್ಥಳ ಎಲ್ಲಿದೆ?", "ಪ್ರಯಾಣ ದರ ಎಷ್ಟು?", "ದಯವಿಟ್ಟು ಕಾಯಿರಿ.", "ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ.", "ಯಾರಿಗಾದರೂ ಕರೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿ.", "ಧನ್ಯವಾದಗಳು."]
  }
};

const contextNames = {
  home: "Home",
  classroom: "Classroom",
  hospital: "Hospital",
  transport: "Transport"
};

const languageNames = {
  en: "English",
  ta: "Tamil",
  te: "Telugu",
  hi: "Hindi",
  ml: "Malayalam",
  kn: "Kannada"
};

const speechLanguages = {
  en: "en-IN",
  ta: "ta-IN",
  te: "te-IN",
  hi: "hi-IN",
  ml: "ml-IN",
  kn: "kn-IN"
};

const grid = document.getElementById("phraseGrid");
const customGrid = document.getElementById("customGrid");
const status = document.getElementById("status");
const repeatBtn = document.getElementById("repeatBtn");
const voiceSelect = document.getElementById("voiceSelect");
const languageSelect = document.getElementById("languageSelect");
const installBtn = document.getElementById("installBtn");

let currentContext = "home";
let currentLanguage = "en";
let lastPhrase = "";
let voices = [];
let toastTimer;
let deferredPrompt = null;

try {
  const savedLanguage = localStorage.getItem("speakease-language");
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
} catch {
  // Continue with English if local storage is unavailable.
}



function speak(text) {
  if (!("speechSynthesis" in window)) {
    if (status) status.textContent = "Speech is not supported by this browser. Try a current version of Chrome, Edge or Safari.";
    showToast("Speech is not supported in this browser.");
    return;
  }

  lastPhrase = text;
  if (repeatBtn) repeatBtn.disabled = false;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLanguages[currentLanguage] || "en-IN";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  const selectedIndex = voiceSelect ? voiceSelect.value : "";
  const selectedVoice = selectedIndex !== "" ? voices[Number(selectedIndex)] : null;
  const prefix = currentLanguage.toLowerCase() + "-";

  if (selectedVoice && selectedVoice.lang.toLowerCase().startsWith(prefix)) {
    utterance.voice = selectedVoice;
  } else {
    const matchingVoice = voices.find(
      voice => voice.lang.toLowerCase() === utterance.lang.toLowerCase()
    ) || voices.find(
      voice => voice.lang.toLowerCase().startsWith(prefix)
    );
    if (matchingVoice) utterance.voice = matchingVoice;
  }

  utterance.onstart = () => {
    if (status) status.textContent = `Speaking: “${text}”`;
  };
  utterance.onend = () => {
    if (status) status.textContent = `Ready. Last phrase: “${text}”`;
  };
  utterance.onerror = () => {
    if (status) status.textContent = "Speech could not start. Tap the phrase again.";
  };

  window.speechSynthesis.speak(utterance);
}

function renderPhrases() {
  if (!grid) return;
  grid.innerHTML = "";

  const contextPhrases =
    (translations[currentLanguage] && translations[currentLanguage][currentContext]) ||
    translations.en[currentContext];

  const title = document.getElementById("phrasesTitle");
  const count = document.getElementById("phraseCount");

  if (title) title.textContent = `${contextNames[currentContext]} phrases`;
  if (count) count.textContent = `${contextPhrases.length} quick phrases`;

  phraseSets[currentContext].forEach(([emoji], index) => {
    const phrase = contextPhrases[index] || translations.en[currentContext][index];

    const btn = document.createElement("button");
    btn.className = "phrase-card";
    btn.type = "button";
    btn.setAttribute("aria-label", `Speak: ${phrase}`);

    const top = document.createElement("span");
    top.className = "phrase-top";

    const icon = document.createElement("span");
    icon.className = "phrase-emoji";
    icon.textContent = emoji;
    icon.setAttribute("aria-hidden", "true");

    const speakIcon = document.createElement("span");
    speakIcon.className = "speak-icon";
    speakIcon.textContent = "◖))";
    speakIcon.setAttribute("aria-hidden", "true");

    top.append(icon, speakIcon);

    const label = document.createElement("span");
    label.className = "phrase-text";
    label.textContent = phrase;

    btn.append(top, label);
    btn.addEventListener("click", () => speak(phrase));
    grid.appendChild(btn);
  });

  document.querySelectorAll(".context").forEach(btn => {
    const active = btn.dataset.context === currentContext;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function getCustom() {
  try {
    return JSON.parse(localStorage.getItem("contextspeak-custom") || "[]");
  } catch {
    return [];
  }
}

function saveCustom(items) {
  try {
    localStorage.setItem("contextspeak-custom", JSON.stringify(items));
  } catch {
    showToast("Could not save on this device.");
  }
}

function renderCustom() {
  if (!customGrid) return;
  customGrid.innerHTML = "";

  const items = getCustom();
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "Your saved phrases will appear here.";
    customGrid.appendChild(empty);
    return;
  }

  items.forEach((phrase, index) => {
    const card = document.createElement("div");
    card.className = "custom-card";

    const speakBtn = document.createElement("button");
    speakBtn.className = "custom-speak";
    speakBtn.type = "button";
    speakBtn.textContent = "🔊 " + phrase;
    speakBtn.addEventListener("click", () => speak(phrase));

    const del = document.createElement("button");
    del.className = "delete-btn";
    del.type = "button";
    del.textContent = "×";
    del.setAttribute("aria-label", `Delete phrase: ${phrase}`);
    del.addEventListener("click", () => {
      const updated = getCustom();
      updated.splice(index, 1);
      saveCustom(updated);
      renderCustom();
      showToast("Phrase removed.");
    });

    card.append(speakBtn, del);
    customGrid.appendChild(card);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function loadVoices() {
  if (!("speechSynthesis" in window) || !voiceSelect) return;

  voices = window.speechSynthesis.getVoices();
  const previousValue = voiceSelect.value;
  const prefix = currentLanguage.toLowerCase() + "-";
  const matchingVoices = voices.filter(voice =>
    voice.lang.toLowerCase().startsWith(prefix)
  );

  voiceSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = matchingVoices.length
    ? `Automatic (${speechLanguages[currentLanguage]})`
    : `Automatic (${speechLanguages[currentLanguage]} requested)`;
  voiceSelect.appendChild(defaultOption);

  matchingVoices.forEach(voice => {
    const option = document.createElement("option");
    option.value = String(voices.indexOf(voice));
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });

  if (previousValue !== "" && matchingVoices.some(
    voice => String(voices.indexOf(voice)) === previousValue
  )) {
    voiceSelect.value = previousValue;
  }
}

// Context buttons
document.querySelectorAll(".context").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!phraseSets[btn.dataset.context]) return;
    currentContext = btn.dataset.context;
    renderPhrases();
  });
});

// Add custom phrases
const phraseForm = document.getElementById("phraseForm");
if (phraseForm) {
  phraseForm.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("customPhrase");
    const phrase = input ? input.value.trim() : "";
    if (!phrase) return;

    const items = getCustom();
    if (items.some(item => item.toLowerCase() === phrase.toLowerCase())) {
      showToast("That phrase is already saved.");
      return;
    }
    if (items.length >= 30) {
      showToast("You can save up to 30 personal phrases.");
      return;
    }

    items.push(phrase);
    saveCustom(items);
    renderCustom();
    input.value = "";
    showToast("Personal phrase saved.");
  });
}

// Repeat and stop controls
if (repeatBtn) {
  repeatBtn.addEventListener("click", () => {
    if (lastPhrase) speak(lastPhrase);
  });
}

const stopBtn = document.getElementById("stopBtn");
if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (status) status.textContent = "Speech stopped.";
  });
}

// Language selector
if (languageSelect) {
  languageSelect.value = currentLanguage;

  languageSelect.addEventListener("change", () => {
    currentLanguage = translations[languageSelect.value] ? languageSelect.value : "en";

    try {
      localStorage.setItem("speakease-language", currentLanguage);
    } catch {
      // Language still changes for this session.
    }

    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    lastPhrase = "";
    if (repeatBtn) repeatBtn.disabled = true;

    loadVoices();
    renderPhrases();
    showToast(`Language changed to ${languageNames[currentLanguage]}.`);
  });
}

// Load available device voices
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
} else if (status) {
  status.textContent = "This browser does not provide text-to-speech. Try Chrome, Edge or Safari.";
}

// Initial display
renderPhrases();
renderCustom();

// PWA installation
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  if (installBtn) installBtn.hidden = false;
});

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) {
      showToast("Use your browser menu and choose Add to Home Screen or Install.");
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });
}

window.addEventListener("appinstalled", () => {
  if (installBtn) installBtn.hidden = true;
  showToast("SpeakEase installed.");
});

// Offline support
if ("serviceWorker" in navigator &&
    (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The page remains usable even if registration fails.
    });
  });
}
