import React, { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { useMediaQuery, useTheme } from '@mui/material';
import { format } from 'date-fns';
import styles from  "./calendar.module.css";

export default function DateRangeCalendarCurrentMonthCalendarPositionProp({ setExternalCheckInDate, setExternalCheckoutDate, bookedDates = []}) {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (date) => {
    // Converte a string da data para um objeto de data
    setCheckInDate(date);
    const d = date.toISOString().split('T')[0];
    if (setExternalCheckInDate) {
      setExternalCheckInDate(d)
    }
  };

  const handleCheckOutChange = (date) => {
    // Converte a string da data para um objeto de data
    setCheckOutDate(date);
    // quando clicamos na primeira data, a data de checkout vem como null pois ainda nao foi selecionada
    if (date && setExternalCheckoutDate) {
      const d = date.toISOString().split('T')[0];
      setExternalCheckoutDate(d)
    }
  };

  const getDisabledDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set time to the start of the day for 'today'
    const currentYear = today.getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    const disabledDates = [];
  
    for (let d = new Date(startOfYear); d < today; d.setDate(d.getDate() + 1)) {
      d.setHours(0, 0, 0, 0); // set time to the start of the day for 'd'
      disabledDates.push(format(new Date(d), 'yyyy-MM-dd'));
    }
  
    for (const booked of bookedDates) {
      if (disabledDates.indexOf(booked) === -1) {
        disabledDates.push(booked)
      }
    }
  
    return disabledDates;
  };

  
  const disableDates = getDisabledDates(); // Dynamic array of disabled dates
  
  return (
    <section  className={`${styles.sectionReserva}`}>
      <h3 className={`${styles.h3dataChegada}`}>Selecione sua data de reserva</h3> 
      <div className={`${styles.sectionCalendarReserva}`}>
          <div className={`${styles.calendar}`}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DemoContainer components={["DateRangeCalendar"]}>
                    <DemoItem label="2 calendars">
                      <DateRangeCalendar 
                      shouldDisableDate={(day) => {
                        // if (isNaN(day.getTime())) {
                        //   return false;
                        // }
                        // Convert the day to a string format that matches your array
                        const dayStr = format(new Date(day), 'yyyy-MM-dd')
              
                        // Return true if the date should be disabled, false otherwise
                        return disableDates.includes(dayStr);
                      }}
                        calendars={isXsScreen ? 1 : 2} 
                        value={[checkInDate, checkOutDate]}
                        onChange={(newValue) => {
                          // setCheckInDate(newValue[0]);
                          handleCheckInChange(newValue[0])
                          handleCheckOutChange(newValue[1])
                          // setCheckOutDate(newValue[1]);      
                        }}
                      />
                    </DemoItem>
                  </DemoContainer>
              </LocalizationProvider>
          </div>
      </div>  
      
    </section>
  );
}
