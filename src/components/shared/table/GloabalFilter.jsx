const GloabalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <span>
        Search:{""}
        <input
          type="text"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GloabalFilter;
