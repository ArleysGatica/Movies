import React, { useContext, useState, useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DatePicker from "react-datepicker";

import { DataContext } from '../../context/data/DataContext'
import { UiContext } from '../../context/ui/UiContext'
import { CustomInputDate } from '../reactDatePicker/CustomInputDate';

export const Filter = ({ category = 'movies' }) => {

    const { isOpenFilter } = useContext(UiContext)
    const { onFilterDataByNameAndCategory } = useContext(DataContext)
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')


    useEffect(() => {
        onFilterDataByNameAndCategory(name, startDate.getFullYear(), category)

        return () => { onFilterDataByNameAndCategory() }

    }, [name, category, startDate, onFilterDataByNameAndCategory])


    const onChange = async ({ target }) => {
        setName(target.value)
    }

    return (
        <div className='bg-primary'>
            <>
                {
                    isOpenFilter && (
                        <div className='filter center-content'>

                            <div className='filter__grouptext'>

                                <div className='filter__icon'>
                                    <SearchOutlinedIcon sx={{ fontSize: '2rem' }} />
                                </div>

                                <input className='filter__inputtext' type="text" placeholder='Name' name='name' onChange={onChange} />
                            </div>
                            <DatePicker customInput={<CustomInputDate />} dateFormat="yyyy" showYearPicker selected={startDate} name='date' onChange={(date) => setStartDate(date)} />
                        </div>
                    )
                }
            </>
        </div>
    )
}
