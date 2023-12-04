<template>
  <div class="form-group no-margin">
    <label :class="computedClasses">{{ label }}</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Rp</span>
      </div>
      <input type="text" class="form-control p_input" v-model="displayValue" :class="{'is-invalid': errors.has(label)}" @blur="isInputActive = false" @focus="isInputActive = true" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputCurrencySymbol',
    data: function () {
      return {
        isInputActive: false
      }
    },
    props: {
      label: String,
      value: Number,
      labelClass: {
        type: String,
        default: 'default-class', // Set a default class if not provided
      },
    },
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
      },
      computedClasses() {
        // You can include additional classes based on conditions
        return {
          [this.labelClass]: true,
          'extra-class': this.someCondition,
        };
      }
    }
  }
</script>

<style scoped></style>
