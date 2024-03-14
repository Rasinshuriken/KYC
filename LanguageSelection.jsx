import React, { useState, useEffect } from 'react';
const languages = [
  { name: "অসমীয়া (Ôxomiyā)", audio: "/audio/assamese.mp3" }, // Assamese
  { name: "বাংলা (Bangla)", audio: "/audio/bengali.mp3" }, // Bengali
  { name: "বোড়ো (Boro)", audio: "/audio/boro.mp3" }, // Bodo
  { name: "Dogri (Ḍogrī)", audio: "/audio/dogri.mp3" }, // Dogri
  { name: "ગુજરાતી (Gujarātī)", audio: "/audio/gujarati.mp3" }, // Gujarati
  { name: "हिन्दी (Hindī)", audio: "/audio/hindi.mp3" }, // Hindi
  { name: "+ (Kannada)", audio: "/audio/kannada.mp3" }, // Kannada
  { name: "کُشیپر )Kashir(", audio: "/audio/kashmiri.mp3" }, // Kashmiri
  { name: "कोंकणी (Konkaṇī)", audio: "/audio/konkani.mp3" }, // Konkani
  { name: "मैथिली (Maithilī)", audio: "/audio/maithili.mp3" }, // Maithili
  { name: "മലയാളം (Malayāḷam)", audio: "/audio/malayalam.mp3" }, // Malayalam
  { name: "ꯃꯤꯇꯩꯂꯣꯟ (Mīteilon)", audio: "/audio/manipuri.mp3" }, // Manipuri (Meitei)
  { name: "मराठी (Marāṭhī)", audio: "/audio/marathi.mp3" }, // Marathi
  { name: "नेपाली (Nepālī)", audio: "/audio/nepali.mp3" }, // Nepali
  { name: "ଓଡ଼ିଆ (Odia)", audio: "/audio/odia.mp3" }, // Odia
  { name: "ਪੰਜਾਬੀ (Pañjābī)", audio: "/audio/punjabi.mp3" }, // Punjabi
  { name: "संस्कृत (Saṃskṛta)", audio: "/audio/sanskrit.mp3" }, // Sanskrit
  { name: "ᱥᱟᱱᱛᱟᱲᱤ (Sāntāṛi)", audio: "/audio/santali.mp3" }, // Santali
  { name: "سنڌي (Sindhi)", audio: "/audio/sindhi.mp3" }, // Sindhi
  { name: "தமிழ் (Tamil)", audio: "/audio/tamil.mp3" }, // Tamil
  { name: "(Telugu)", audio: "/audio/telugu.mp3" }, // Telugu
  { name: "(Urdu) اردو", audio: "/audio/urdu.mp3" }, // Urdu
];


function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(languages.find((lang) => lang.name === event.target.value));
  };

  useEffect(() => {
    if (selectedLanguage) {
      const audio = new Audio(selectedLanguage.audio);
      audio.preload = "metadata"; // Load only audio metadata
      setSelectedAudio(audio);
    } else {
      setSelectedAudio(null); // Clear audio when language is not selected
    }
  
    return () => {
      // Cleanup function to stop audio on component unmount
      if (selectedAudio) {
        selectedAudio.pause();
        selectedAudio.currentTime = 0;
      }
    };
  }, [selectedLanguage]);
  

  return (
    <div className="language-selection container">
      <h2>Choose your language</h2>
      <select value={selectedLanguage?.name} onChange={handleLanguageChange}>
        <option value="">Select Language</option>
        {languages.map((language) => (
          <option key={language.name} value={language.name}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelection;
