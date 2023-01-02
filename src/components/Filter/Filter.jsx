import filterStyles from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filterContacts = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };
  return (
    <div className={filterStyles.container}>
      <p className={filterStyles.text}>Search contacts:</p>
      <input
        value={filter}
        className={filterStyles.input}
        onChange={filterContacts}
        type="text"
      />
    </div>
  );
};

export { Filter };
