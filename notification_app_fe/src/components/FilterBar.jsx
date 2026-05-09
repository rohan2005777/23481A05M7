function FilterBar({ activeFilter, setActiveFilter }) {
  const options = ['All', 'Alert', 'Event', 'Announcement', 'Warning'];

  return (
    <div className="options-container">
      {options.map(opt => (
        <button 
          key={opt}
          onClick={() => setActiveFilter(opt)}
          className={`option-btn ${activeFilter === opt ? 'active' : ''}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
