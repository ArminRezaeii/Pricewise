"use client";
export default function Searchbar() {
  const handleSubmit = () => {};
  return (
    <form
      action=""
      className="flex flex-wrap gap-4 mt-12"
      onClick={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
}
