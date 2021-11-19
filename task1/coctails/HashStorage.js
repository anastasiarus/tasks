class HashStorage {

    constructor(){
        this.storage ={}
    }

    addValue(key,value){
        this.storage[key] = value
    }

    getValue(key){
        return this.storage[key]
    }

    deleteValue(key){
        if (key in this.storage){
            delete this.storage[key]
            return true
        } else {
            return false
        }
    }

    getKeys(){
        return Object.keys(this.storage)
        /* let keys =[]
        for (let key in this.storage){
            keys.push[key]
        }
        return keys */
    }
}

const coctailsStorage = new HashStorage()

let coctailAdd = document.getElementById('add-coctail')

coctailAdd.onclick = function() {
		let keyP = prompt('Введите название коктейля')
		let valueC = {}
		valueC.alcohol = confirm(keyP + ' - алкогольный напиток или нет?\nДа - алкогольный\nНет - безалкогольный')
		valueC.recipe = prompt('Введите необходимые ингридиенты и рецепт коктейля ' + keyP)
		coctailsStorage.addValue(keyP, valueC)
	}

    let coctailInfo = document.getElementById('get-coctail')

	coctailInfo.onclick = function() {

		let coctailInf = prompt('Введите название коктейля')
		let coctailInfoP = document.getElementById('coctailInfoP')
		let answer = coctailsStorage.getValue(coctailInf)

		if (coctailsStorage.getValue(coctailInf) !== undefined) {
			coctailInfoP.innerHTML = 'Коктейль' + coctailInf + 
								   '<br>' + 'алкогольный: ' + (answer.alcohol === true ? 'да' : 'нет') + 
								   '<br>' + 'Рецепт: ' + (answer.recipe ? answer.recipe : 'к сожалению рецепта нет')
		} else {
			coctailInfoP.innerHTML = 'У нас нет такого коктейля'
		}
	}

    let coctailDel = document.getElementById('delete-coctail')

	coctailDel.onclick = function() {

		let coctailDel = prompt('Введите название коктейля')
		let coctailInfoP = document.getElementById('coctailInfoP')
		if (coctailsStorage.deleteValue(coctailDel) === true) {
			coctailInfoP.innerHTML = 'Информация о коктейле удалена!'
		} else {
			coctailInfoP.innerHTML = 'У нас нет такого коктейля'
		}
	}

    let allCocteils = document.getElementById('all-coctails')

    allCocteils.onclick = function(){

        let coctailInfoP = document.getElementById('coctailInfoP')
		coctailInfoP.innerHTML = coctailsStorage.getKeys()
    }