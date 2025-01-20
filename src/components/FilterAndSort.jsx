const FilterAndSort = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="flex gap-4 my-4">
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="date">By Date</option>
        <option value="priority">By Priority</option>
      </select>
    </div>
  );
};

export default FilterAndSort;
