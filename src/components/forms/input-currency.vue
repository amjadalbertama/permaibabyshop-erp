<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input type="text" class="form-control" v-model="displayValue" :class="{'is-invalid': errors.has('label')}" @blur="isInputActive = false" @focus="isInputActive = true" />
  </div>
</template>

<script>
  export default {
    name: 'InputCurrency',
    data: function () {
      return {
        isInputActive: false
      }
    },
    props: ['label', 'value', 'placeholder'],
    computed: {
      displayValue: {
        get: function() {
          if (this.isInputActive) {
            // Cursor is inside the input field. unformat display value for user
            if (this.value !== undefined) {
              let val = (this.value / 1).toFixed(0).replace('.', ',')
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            } else {
              return this.value
            }
          } else {
            // User is not modifying now. Format display value for user interface
            if (this.value !== undefined) {
              let val = (this.value / 1).toFixed(0).replace('.', ',')
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            } else {
              return this.value
            }
          }
        },
        set: function(modifiedValue) {
          // Recalculate value after ignoring "$" and "," in user input
          let newValue = parseFloat(modifiedValue.replace(/[^\d]/g, ""))
          // Ensure that it is not NaN
          if (isNaN(newValue)) {
            newValue = 0
          }
          // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
          // $emit the event so that parent component gets it
          this.$emit('input', newValue)
        }
      }
    }
  }
</script>

<style scoped></style>
