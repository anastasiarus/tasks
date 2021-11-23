
    class Calendar {

      constructor(year,month){
        this.month = month
        this.year = year
        this.date = new Date(year, month)
      }

      getDate() {
        
        let namesOfMonth = ['Январь','Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        let month = namesOfMonth
        return month + this.year
        }

      getDaysOfWeek(date) {
        const d = date.getDay()
        if (d == 0) {
          d = 7
        }
        return d - 1
      }


      getEmpty(table){
        for (let i = 0; i < this.getDaysOfWeek(this.date); i++) {
          table += '<td></td>'
        }
        return table
      }

      getWeekdays(table){
        while (this.date.getMonth() === this.month) {
          table += '<td>' + this.date.getDate() + '</td>'
    
          if (this.getDaysOfWeek(this.date) % 7 == 6) { 
            table += '</tr><tr>'
          }
    
          this.date.setDate(this.date.getDate() + 1)
        }
    
        if (this.getDaysOfWeek(this.date) != 0) {
          for (let i = this.getDaysOfWeek(this.date); i < 7; i++) {
            table += '<td></td>'
          }
        }
        return table
      }

      createCalendar() {
        let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'
        table = this.getEmpty(table)
        table = this.getWeekdays(table)
        table +='</tr></table>'
        return table
      }
    }

    const addCalendar = document.getElementById('calendar')
    const addMonth = prompt('Введите номер текущего месяца')
    const addYear = prompt('Введите текущий год')
    const calendar = new Calendar(addMonth,addYear)
    addCalendar.innerHTML = calendar.createCalendar()

    
