import { h } from 'vue'

export default {
  
  setup(props, { slots }) {
    
    return {
      slots
    }
    
  },
  
  render() {
    const { click } = this
    
    return <div>
      <button onClick={click}>{ h(this.slots.default) }</button>
    </div>
    
  },
  
  methods: {
    click($event) {
      console.log($event)
    }
  }
  
}
