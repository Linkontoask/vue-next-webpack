import {ref, reactive, h, defineComponent, toRefs, Slots, Slot, SetupContext, PropType} from 'vue'


interface Data {
  name: [string]
}

interface ButtonProp {
  a: string | number,
  b?: string
}

interface ButtonSlot extends Slots {
  default: Slot
}

export default defineComponent({

  props: {
    p: {
      type: Object as PropType<ButtonProp>,
      required: true
    }
  },

  setup(props: any, context: SetupContext) {
    const { p } = toRefs(props)
    const name = ref('Link')
    const commit = reactive<Data>({
      name: ['Link']
    })

    return {
      name,
      commit,
      p,
      slots: context.slots as ButtonSlot
    }

  },

  render(): any {
    return h('button', {
      onClick: ($event: Event) => {
        console.log($event, this.p.c)
      }
    }, h(this.slots.default))
  }
})
