export const SearchControl = () => {
  const dispatch = useDispatch();
  const [value, handleInputChange] = useForm({
    search: "",
  });
  const { search } = value;

  const handleDispatchSearch = () => {
    dispatch(enterSearchProject(search));
  };

  return (
    <div className='search-control-container'>
      <input
        className='search-control-input'
        type='text'
        placeholder='Input tag ej: React, Node, MongoDB'
        name='search'
        value={search}
        onChange={handleInputChange}
        onKeyUp={handleDispatchSearch}
      />
      <img src='/assets/search.svg' alt='Search ico' />
    </div>
  );
};
