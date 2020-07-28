<template>
  <button @click="click">
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
  export default {
    name: 'Button1',

    setup(props, context) {

    },

    methods: {
      click($event) {
        console.log($event)
      }
    }
  }
</script>
