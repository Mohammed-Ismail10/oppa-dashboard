import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export function useTable(){


  let [limit, setLimit] = useState(10);
  const [dataObj, setDataObj] = useState([]);
  let [checkedInputs, setCheckedInputs] = useState([])
  
  let dispatch = useDispatch();
  let { resultSearch } = useSelector(({ userQuery }) => userQuery);


  const selectRow = useMemo(() => ({
    mode: 'checkbox',
    onSelect: (row, isSelect) => {
      if (isSelect) {
        setCheckedInputs((prevInputs) => [...prevInputs, row.id]);
      } else {
        setCheckedInputs((prevInputs) => prevInputs.filter((id) => id !== row.id));
      }
    },
    onSelectAll: (isSelect, rows) => {
      if (isSelect) {
        setCheckedInputs(rows.map((row) => row.id));
      } else {
        setCheckedInputs([])
      }
    },
    selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
      <div className="border badge p-0">
        <input
          type="checkbox"
          className='form-check-input border-1 border-dark-subtle p-2 mt-2 mx-1 shadow-none'
          ref={(input) => { if (input) input.indeterminate = indeterminate; }}
          {...rest}
          onChange={(e) => e}
        />
        <span className="py-2 badge text-main rounded fs15 border">#</span>
      </div>
    ),
    selectionRenderer: ({ mode, ...rest }) => (
      <>
        <input
          className='form-check-input shadow-none border-1 border-dark-subtle me-3'
          type={mode}
          {...rest}
          onChange={(e) => e}
        />
        <span className='text-main fs15'>{rest.rowIndex + 1}</span>
      </>
    ),
  }), [checkedInputs]);


  useEffect(() => {
    setDataObj(resultSearch);
  }, [resultSearch]);




  return {dispatch, limit, setDataObj, checkedInputs, dataObj, selectRow, setLimit }


}