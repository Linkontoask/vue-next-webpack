import { createApp, h } from 'vue'
import APP from './button.ts'

createApp({
  render() {
    return h(APP, {
      p: {
        c: '1'
      }
    }, 'Link')
  }
}).mount('#app')

