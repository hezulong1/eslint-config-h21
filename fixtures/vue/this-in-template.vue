<template>
  <!-- ✓ GOOD -->
  <a :href="url">
    {{ text }}
  </a>
  
  <!-- ✗ BAD -->
  <a :href="this.url">
    {{ this.text }}
  </a>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      text: ''
    }
  }
}
</script>