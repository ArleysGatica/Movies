import React, { forwardRef } from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const CustomInputDate = forwardRef(({ value, onClick }, ref) => (
    <button className="customDate" onClick={onClick} ref={ref}>
        <div className='customDate__icon'>
            <CalendarTodayIcon />
        </div>
        <div className='customDate__text'>
            {value}
        </div>

    </button>
));
