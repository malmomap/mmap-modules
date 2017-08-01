require('es6-promise').polyfill() /* swal needs this to function in IE*/
import { default as swal } from 'sweetalert2'

export default class MMap_Mockup { // eslint-disable-line
  constructor (params) {
    this.config = params.config

    this.makeAlert()
  }

  makeAlert () {
    swal({
      title: this.config.title,
      text: this.config.content,
      type: 'info'
    }).catch(swal.noop)
  }
}
