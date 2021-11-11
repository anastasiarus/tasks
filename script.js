/* let form = [
    lastName = prompt('Фамилия'),
    firstName = prompt('Имя'),
    patronomic = prompt('Отчество'),
    age = prompt('Возраст'),
    gender = confirm('Если Вы мужчина, нажмите ОК')
]

alert(`Ваше ФИО: ` + form[0] +' '+ form[1]+' ' + form[2] + `\n` +
        `Ваш возраст в годах: ` +form[3] + `\n` +
        `Ваш возраст в днях: ` +(form[3]*365) + `\n` +
        (form[3]>=18===true ? 'Вы совершеннолетний' : 'Вы несовершеннолетний')  + `\n` +
        `Ваш пол: ` +(form[5] ? 'мужской' : 'женский')  + `\n` +
        `Вы на пенсии: ` +(form[3]>=60===true ? 'да' : 'нет')
        ) 
 */

        let 
            lastName = prompt('Фамилия'),
            firstName = prompt('Имя'),
            patronomic = prompt('Отчество'),
            age = prompt('Возраст')
            if (typeof age !=='number'){
                alert ('Неверный тип данных, введите число')
            }
            gender = confirm('Если Вы мужчина, нажмите ОК')
        
        alert(`Ваше ФИО: ` + lastName +' '+ firstName+' ' + patronomic + `\n` +
                `Ваш возраст в годах: ` +age + `\n` +
                `Ваш возраст в днях: ` +(age*365) + `\n` +
                ( age>=18===true ? 'Вы совершеннолетний' : 'Вы несовершеннолетний')  + `\n` +
                `Ваш пол: ` +(gender ? 'мужской' : 'женский')  + `\n` +
                `Вы на пенсии: ` +( age>=60===true ? 'да' : 'нет')
                ) 
        