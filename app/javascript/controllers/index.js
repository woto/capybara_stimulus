// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from 'stimulus'
import StimulusControllerResolver from 'stimulus-controller-resolver'

const application = Application.start()

import HelloController from '../controllers/hello_controller.js'
application.register('hello', HelloController)

StimulusControllerResolver.install(application, async controllerName => (
    (await import(`../controllers/${controllerName}_controller.js`)).default
))
