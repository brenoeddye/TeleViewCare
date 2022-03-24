<template>
  <div>
    <div v-if="Auth == true">
      <Authentication></Authentication>
    </div>
  </div>
</template>

<script>
import Authentication from './components/Authentication.vue';

export default {
  name: 'App',
  data() {
    return {
      Auth: true
    }
  },
  components: {
    Authentication
  }
}
</script>
