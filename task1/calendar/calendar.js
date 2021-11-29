class DateSetting {
 constructor(){
   this.date = new Date()
   this.month = this.date.getMonth()
   this.year = this.date.getFullYear()
 }

 getMonth() {
   return this.month
 }

 getDays() {

  const daysInMonth = new Date(this.year, this.month +1, 0).getDate()
  const firstDay = new Date(this.year, this.month, 1).getDay()
  const prevDaysInMonth = this.getPrevDaysInMonth(firstDay)
  const currentDays = this.getCurrentDays(daysInMonth)
  const nextDaysInMonth = this.getNextDaysInMonth(prevDaysInMonth, currentDays)

  return prevDaysInMonth.concat(currentDays).concat(nextDaysInMonth)
 }

 getNextDaysInMonth(lastDays, currentDays) {
  const fullDays = lastDays.length + currentDays.length
   if (fullDays % 7 === 0) {
     return []
   }

  const nextDaysInMonth = (Math.ceil(fullDays / 7) * 7) - fullDays
  const nextDays = []

    for (let i = 1; i <= nextDaysInMonth; i++ ) {
      nextDays.push({
        day: i
      })
    }
    return nextDays
  }

 getCurrentDays(daysInMonth) {
  const days = []

  for(let i = 1; i <= daysInMonth; i++){
    days.push({
      day: i,
      currMonth: true
    })
  }
  return days
 }

 getPrevDaysInMonth(firstDay) {
  const lastDays = []

  if (firstDay !==1) {
    const daysInPrevMonth = new Date(this.year, this.month, 0).getDate()
    const m = (firstDay || 7)-1

    for (let i = m-1; i >= 0; i-- ){
      lastDays.push({
        day: daysInPrevMonth - i
      })
    }
  }
  return lastDays
}
  getYear() {
    return this.year
  }
 
  setYear(num) {
   this.year +=num
  }
 
  setMonth(num) {
   this.month +=num
  }
  
}

class Calendar {
   days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Вс' ]
   monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ]
   dateSetting = new DateSetting()
   body = document.querySelector('.body')
   constructor() {
     this.doHtml()
   }

   doHtml() {
     this.createHeader()
     this.createWeekDays()
     this.createMain()

     this.body.append(this.header, this.weekdays, this.main)
   }

   redoHtml() {
     this.setTitle()
     this.setMain()
   }

   createHeader() {
    this.header = document.createElement('div')
    this.header.className = 'header'

    this.setHeader()
   }

   setHeader() {
     const laquo = this.createNavigationElement('&laquo', this.changeYear.bind(this, -1))
     const raquo = this.createNavigationElement('&raquo', this.changeYear.bind(this, 1))
     const leftArrow = this.createNavigationElement('&#8249', this.changeMonth.bind(this, -1))
     const rightArrow = this.createNavigationElement('&#8250', this.changeMonth.bind(this, 1))

     this.createTitle()
     this.setTitle()

     this.header.append(laquo, leftArrow, this.title, rightArrow, raquo)

   }

   createNavigationElement(innerHTML, callback) {
    const element = document.createElement('span')
    element.innerHTML = innerHTML
    element.className = 'navigation'
    element.addEventListener('click', callback)

    return element
   }

   createTitle() {
     this.title = document.createElement('span')
   }

   setTitle() {

    const month = this.monthes[this.dateSetting.getMonth()]
    const year = this.dateSetting.getYear()

    this.title.innerHTML = `${month} ${year} год`
   }

   createWeekDays() {
    this.weekdays = document.createElement('div')
    this.weekdays.className = 'weekdays'
    this.days.forEach(day=> {
      const weekday = document.createElement('div')
      weekday.className = 'weekday'
      weekday.innerHTML = day
      this.weekdays.append(weekday)
    })
   }

   createMain() {
    this.main = document.createElement('div')
    this.main.className = 'main'

    this.setMain()
   }

   setMain() {
    this.setWeeks()
    this.main.innerHTML = ''
    this.weeks.forEach(week=> {
      const weekdayElem = document.createElement('div')
      weekdayElem.className = 'week'
      week.forEach(day=> {
        const dayElem = document.createElement('div')
        dayElem.className = 'day' + `${day.currMonth ? 'current-month' : ''}`
        dayElem.innerHTML = day.day
        weekdayElem.append(dayElem)
      })
      this.main.append(weekdayElem)
    })
   }

   setWeeks() {
     const days = this.dateSetting.getDays()
     this.weeks = []

     for (let i=0; i < days.length; i++) {
      if (i % 7 === 0) {
        this.weeks.push([])
      }

      const week = this.weeks[this.weeks.length - 1]
      week.push(days[i])
     }
   }

   changeYear(num) {
    this.dateSetting.setYear(num)
    this.redoHtml()
   }

   changeMonth(num) {
    this.dateSetting.setMonth(num)
    this.redoHtml()
   }
}

const calendar = new Calendar()
//calendar.doHtml

