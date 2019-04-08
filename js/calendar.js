
/*Days of week and months*/
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
/*Current year and month*/
var date = date || new Date(),
  year = date.getFullYear(), // current year
  month = date.getMonth() // current month
/*
var getFullDate = function (current_year, current_mounth) {
  var date = new Date(current_year, current_mounth, 0)
  return date
}*/
// var current_date = getFullDate(year, month)
function structureCalendar (current_year, current_mounth) {
  $('#month-body').empty()
  var first = new Date(current_year, current_mounth, 1), // first day of the month
    last = new Date(year, month + 1, 0).getDate(), // last day of the month
    startingDay = first.getDay(), // Getting the current day
    pos = days.indexOf(days[startingDay]) // Getting the day of the week position
  let y = 1
  let z = 0
  while (y < last) {
    var maykup = '<tr id="week-' + z + '" class="week">'
    for (var i = 0; i <= 6; i++) {
      if (i >= pos) {
        pos = 0
        maykup += '<td id="day-' + i + '" class="calendar-table__item">' + '<span>' + y + '</span>' + '</td>'
        y++
      } else {
        maykup += '<td id="day-' + i + '" class="calendar-table__item">' + '<span></span>' + '</td>'
      }
      if (i == 6) {
        maykup += '</tr>'
      }
      if (y == last) {
        if (!(i > 6)) {
          i++
          maykup += '<td id="day-' + i + '" class="calendar-table__item calendar-table__event">' + '<span>' + y + '</span>' + '</td>'
          maykup += '</tr>'
        } else {
          z++
          maykup += '<tr id="week-' + z + '" class="week">'
          maykup += '<td id="day-' + 0 + '" class="calendar-table__item calendar-table__event">' + '<span>' + y + '</span>' + '</td>'
          maykup += '</tr>'
        }
        break
      }
    }

    $('#month-body').append(maykup)
    z++
  }
}
$(document).ready(function () {
  // Structuring
  structureCalendar(year, month)

  $('tr#week-0 td#day-1').addClass('calendar-table__event calendar-table__event--start')
  $('tr#week-0 td#day-2').addClass('calendar-table__event calendar-table__event--long')
  $('tr#week-0 td#day-3').addClass('calendar-table__event  calendar-table__event--end')
  $('tr#week-0 td#day-6').addClass('calendar-table__event calendar-table__event--start')
  $('tr#week-1 td#day-0').addClass('calendar-table__event  calendar-table__event--end')
  // Showing the current day
  $('#today span').html(date.getDay())
  $('#month-year #current-month').html(months[month])
  $('#month-year #current-year').html(year)

  // Previous month
  $('#prev').on('click', function () {
    month = month - 1
    if (month >= 0) {
      $('#next').removeClass('disabled')
      structureCalendar(year, month)
      $('#month-year #current-month').html(months[month])
    }
    if (month == 0) {
      $('#next').removeClass('disabled')
      $(this).addClass('disabled')
    }
  })
  // Next month
  $('#next').on('click', function () {
    month = month + 1
    if (month <= 11) {
      $('#prev').removeClass('disabled')
      structureCalendar(year, month)
      $('#month-year #current-month').html(months[month])
    }
    if (month == 11) {
      $('#prev').removeClass('disabled')
      $(this).addClass('disabled')
    }
  })
})
