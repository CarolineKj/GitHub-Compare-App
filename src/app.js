console.log('app.js')

//import Model from './model.js'
import Model from './mocks/model.js'

import View from './view.js'
import Controller from './controller.js'

const model = new Model() 
const view = new View()
const controller = new Controller(model, view)