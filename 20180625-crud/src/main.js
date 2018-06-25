function createCollection() {

  const items = []
  let nextId = 1

  return {
    create(inputObj) {
      const currentID = nextId
      nextId++
      const item = Object.assign({}, {id: currentID}, inputObj)
      items.push(item)
      return item
    },

    findById(id) {
      return items.find(item => item.id === id) || null
    },

    updateById(id, property) {
      const pair = Object.entries(property)[0]
      const itemToUpdate = items.find(item => item.id === id)
      if (!itemToUpdate) {
        return null
      }
      itemToUpdate[pair[0]] = pair[1]
      return itemToUpdate
    },

    findWhere(query) {
      if (Object.keys(query).length < 1) {
        return items
      }
      const pair = Object.entries(query)[0]
      return items.filter(item => item[pair[0]] === pair[1])
    },

    deleteById(id) {
      let deleted = null
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          deleted = items[i]
          items.splice(i, 1)
        }
      }
      return deleted
    }
  }

}

const users = createCollection()

console.log( users.create({
  name: 'Ron',
  favoriteColor: 'black',
  isActive: true
}) )

/**
 * {
 *   id: 1,
 *   name: 'Ron',
 *   favoriteColor: 'black',
 *   isActive: true
 * }
 */


console.log( users.create({
  name: 'Tim',
  favoriteColor: 'chartreuse',
  isActive: true
}) )

/**
 * {
 *   id: 2,
 *   name: 'Tim',
 *   favoriteColor: 'chartreuse',
 *   isActive: true
 * }
 */


console.log( users.findById(1) )

/**
 * {
 *   id: 1,
 *   name: 'Ron',
 *   favoriteColor: 'black',
 *   isActive: true
 * }
 */


console.log( users.updateById(2, { favoriteColor: 'black' }) )

/**
 * {
 *   id: 2,
 *   name: 'Tim',
 *   favoriteColor: 'black',
 *   isActive: true
 * }
 */


console.log( users.findWhere({ favoriteColor: 'black' }) )

/**
 * [
 *   {
 *     id: 1,
 *     name: 'Ron',
 *     favoriteColor: 'black',
 *     isActive: true
 *   },
 *   {
 *     id: 2,
 *     name: 'Tim',
 *     favoriteColor: 'black',
 *     isActive: true
 *   }
 * ]
 */


console.log( users.deleteById(2) )

/**
 * {
 *   id: 2,
 *   name: 'Tim',
 *   favoriteColor: 'black',
 *   isActive: true
 * }
 */


console.log( users.create({
  name: 'Mat',
  favoriteColor: 'orange',
  isActive: true
}) )

/**
 * {
 *   id: 3,
 *   name: 'Mat',
 *   favoriteColor: 'orange',
 *   isActive: true
 * }
 */


console.log( users.findWhere({}) )

/**
 * [
 *   {
 *     id: 1,
 *     name: 'Ron',
 *     favoriteColor: 'black',
 *     isActive: true
 *   },
 *   {
 *     id: 3,
 *     name: 'Mat',
 *     favoriteColor: 'orange',
 *     isActive: true
 *   }
 * ]
 */
