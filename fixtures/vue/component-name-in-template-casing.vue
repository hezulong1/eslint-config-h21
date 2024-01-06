<template>
  <!-- ✓ GOOD -->
  <CoolComponent />
  
  <!-- ✗ BAD -->
  <cool-component />
  <coolComponent />
  <Cool-component />

  <router-link />
  <RouterLink />

  <Transition />
  <transition />

  <!-- ignore -->
  <UnregisteredComponent />
  <unregistered-component />

  <registered-in-kebab-case />
  <registeredInCamelCase />
</template>
<script>
export default {
  components: {
    CoolComponent,
    'registered-in-kebab-case': VueComponent1,
    'registeredInCamelCase': VueComponent2
  }
}
</script>
