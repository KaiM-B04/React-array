import { useState } from "react";
import "./search.css";

const imageArray = [
  { job: "🪓", name: "Barbarian" },
  { job: "🎻", name: "Bard" },
  { job: "🌟", name: "Cleric" },
  { job: "🌳", name: "Druid" },
  { job: "⚔️", name: "Fighter" },
  { job: "🛡️", name: "Paladin" },
  { job: "👊", name: "Monk" },
  { job: "🗡️", name: "Rogue" },
  { job: "🏹", name: "Ranger" },
  { job: "🔥", name: "Sorcerer" },
  { job: "💀", name: "Warlock" },
  { job: "📖", name: "Wizard" },
];

//Search Function

function ClassSearch() {
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState(imageArray);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    const filtered = imageArray.filter((job) =>
      job.name.toLowerCase().includes(searchTerm)
    );

    setFilteredList(filtered);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    });
  };

  return (
    <div className="search-container">
      <h1>BG3 Class Icon</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search class"
        value={query}
        onChange={handleSearch}
      />

      <div className="class-list">
        {filteredList.map((job, index) => (
          <div
            key={index}
            className="classes"
            onClick={() => copyToClipboard(job.name)}
          >
            <span className="class-img">{job.job}</span>
            <span className="class-txt">{job.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ClassSearch;
