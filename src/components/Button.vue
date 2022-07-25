<template>
  <div>
    <button class="btn">
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
})</script>