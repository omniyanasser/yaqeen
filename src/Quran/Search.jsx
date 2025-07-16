import React, { useEffect, useState } from "react";
import "./Quran.css";

function Search() {
  const [reciters, setReciters] = useState([]);
  const [selectedReciterId, setSelectedReciterId] = useState("");
  const [moshafList, setMoshafList] = useState([]);
  const [selectedSurahs, setSelectedSurahs] = useState([]);
  const [allSurahs, setAllSurahs] = useState([]);
  const [audioSrc, setAudioSrc] = useState("");
  const [selectedMoshafId, setSelectedMoshafId] = useState("");

  const myApi = "https://mp3quran.net/api/v3";
  const lang = "ar";

  // ✅ Get all reciters
  useEffect(() => {
    const fetchReciters = async () => {
      const response = await fetch(`${myApi}/reciters?language=${lang}`);
      const data = await response.json();
      setReciters(data.reciters);
    };
    fetchReciters();
  }, []);

  // ✅ Get all surahs once
  useEffect(() => {
    const fetchSuwar = async () => {
      const response = await fetch(`${myApi}/suwar`);
      const data = await response.json();
      setAllSurahs(data.suwar);
    };
    fetchSuwar();
  }, []);

  // ✅ عند اختيار القارئ
  const handleReciterChange = (e) => {
    const selectedId = e.target.value;
    setSelectedReciterId(selectedId);
    const selected = reciters.find((rec) => rec.id.toString() === selectedId);
    setMoshafList(selected?.moshaf || []);
    setSelectedSurahs([]);
  };

  // ✅ عند اختيار رواية
  const handleMoshafChange = (e) => {
    const selectedMoshafId = e.target.value;
    setSelectedMoshafId(selectedMoshafId); // ✅ مهم جدًا
    const selected = moshafList.find(
      (m) => m.id.toString() === selectedMoshafId
    );
    if (selected?.surah_list) {
      const surahIds = selected.surah_list.split(",");
      const namedSurahs = surahIds
        .map((id) => allSurahs.find((s) => s.id === parseInt(id)))
        .filter(Boolean);
      setSelectedSurahs(namedSurahs);
    } else {
      setSelectedSurahs([]);
    }
  };

  const handleSurahChange = (e) => {
    const selectedSurahId = e.target.value;

    // نجيب الرواية المختارة
    const selectedMoshaf = moshafList.find(
      (m) =>
        selectedSurahs.some((s) => s.id === parseInt(selectedSurahId)) &&
        m.id.toString() === selectedMoshafId
    );

    if (selectedMoshaf) {
      const server = selectedMoshaf.server;
      const surahNumber = selectedSurahId.toString().padStart(3, "0");
      const audioUrl = `${server}/${surahNumber}.mp3`;
      setAudioSrc(audioUrl);
    }
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form id="search-form" name="gs" role="search" action="#">
              <div className="row">
                {/* قارئ */}
                <div className="col-lg-4">
                  <fieldset>
                    <label htmlFor="chooseReciters" className="form-label">
                      اختر قارئ
                    </label>
                    <select
                      id="chooseReciters"
                      name="Category"
                      className="form-select"
                      onChange={handleReciterChange}
                    >
                      <option value="">-- اختر قارئ --</option>
                      {reciters.map((reciter) => (
                        <option key={reciter.id} value={reciter.id}>
                          {reciter.name}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>

                {/* رواية */}
                <div className="col-lg-4">
                  <fieldset>
                    <label htmlFor="chooseMoshaf" className="form-label">
                      اختر رواية
                    </label>
                    <select
                      id="chooseMoshaf"
                      name="Price"
                      className="form-select"
                      onChange={handleMoshafChange}
                    >
                      <option value="">-- اختر رواية --</option>

                      {moshafList.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>

                {/* سورة */}
                <div className="col-lg-4">
                  <fieldset>
                    <label htmlFor="chooseSurah" className="form-label">
                      اختر سورة
                    </label>
                    <select
                      id="chooseSurah"
                      name="Plan"
                      className="form-select"
                      onChange={handleSurahChange}
                    >
                      <option value="">-- اختر سورة --</option>

                      {selectedSurahs.map((surah) => (
                        <option key={surah.id} value={surah.id}>
                          {surah.name}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>

                {/* مشغل الصوت */}
                <div className="col-lg-12">
                  <audio controls className="w-100" src={audioSrc}>
                    المتصفح لا يدعم تشغيل الصوت.
                  </audio>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
