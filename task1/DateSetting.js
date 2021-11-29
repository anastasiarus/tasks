export class DateSetting {
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