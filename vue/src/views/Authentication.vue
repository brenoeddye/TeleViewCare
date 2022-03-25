<template>
  <div id="AuthComp">
    <div class="authSidebar">
      <h2>Entrar</h2>
      <p>Bem-vindo de volta ao TeleViewCare.</p>

      <div class="inputSection">
        <label for="u_email"><i class="fa-solid fa-envelope"></i></label>
        <input id="u_email" v-model="userEmail" type="text" placeholder="E-mail">
      </div>
      <div class="inputSection">
        <label for="u_pass"><i class="fa-solid fa-key"></i></label>
        <input id="u_pass"  v-model="userPass" type="password" placeholder="Senha">
      </div>
      <div>
        <router-link to="/home"><button class="primary">Entrar</button></router-link>
        <p>Não possui conta? <router-link to="/"><button class="empty">Registre-se</button></router-link>.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AuthComp',
    data() {
      return {
        userEmail: 'atendimento@televiewcare.com',
        userPass: '123456'
      }
    }
}
</script>