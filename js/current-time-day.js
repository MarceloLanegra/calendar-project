function setCurrentTimePositionDay() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMin = currentDate.getMinutes();

    const $currentTimeDay = document.querySelector(".currentTime-day");
    const $calendarDay = document.querySelector(".calendar-day");

    let calendarDayBlockSize = $calendarDay.clientHeight
    let calendarDayInlineSize = $calendarDay.clientWidth;

    const calendarTimezoneCellInlineSize = document.querySelector(".timezoneCell").clientWidth;
    calendarDayInlineSize = calendarDayInlineSize - calendarTimezoneCellInlineSize;

    const cellInlineSize = calendarDayInlineSize;
    // console.log({ cellInlineSize });

    const calendarBlockSize = document.querySelector('.calendarDay').clientHeight
    calendarDayBlockSize = calendarDayBlockSize - calendarBlockSize
    // console.log({ calendarBlockSize })
    const cellBlockSize = calendarDayBlockSize / 24

    $currentTimeDay.style.top = `${cellBlockSize * (currentHour) + calendarBlockSize + (cellBlockSize / 60) * currentMin}px`
    $currentTimeDay.style.left = `${calendarTimezoneCellInlineSize + 24}px`
    $currentTimeDay.style.width = `${cellInlineSize}px`;
}

window.intervalCurrentTimePosition = null;

function intervalCurrentTimePositionDay(interval = 1000) {
    clearInterval(window.intervalCurrentTimePosition);
    setCurrentTimePositionDay();
    window.intervalCurrentTimePosition = setInterval(setCurrentTimePositionDay, interval);
}

export { setCurrentTimePositionDay, intervalCurrentTimePositionDay };
