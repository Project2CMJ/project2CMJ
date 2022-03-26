window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    // listHoursArray[new Date().getDay()].map( hours => {
    //     hours.classList.add(('today'));
    // })
    console.log(listHoursArray)
    console.log(listHoursArray[new Date().getDay()])
})