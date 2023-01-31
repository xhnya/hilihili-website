<template>
  <svg :class="svgClass"  aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      console.log('this.className')
      console.log(this.className)
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color:#333;
  /* fill: currentColor; */
  /* background-color:#6EC1FA !important; */
  padding:0px 5px 0px 8px;
}
</style>
