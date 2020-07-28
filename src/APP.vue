<template>
  <div ref="home">
    <Button1>Click</Button1>
    <Button>jsx</Button>
    <Button2 :p="{b: 1}">ts</Button2>
  </div>
</template>

<script>
  import { ref, toRefs } from 'vue'
  import Button1 from './button.vue'
  import Button from './button.jsx'
  import Button2 from './button.ts'

  export default {
    name: 'APP',

    components: {
      Button1,
      Button,
      Button2,
    },

    setup(props, context) {

      const { name } = toRefs(props)

      const commit = ref([])

      return {
        name,
        commit
      }

    }
  }
</script>
