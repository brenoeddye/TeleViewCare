<template>
  <div id="AuthComp">
    <div class="authSidebar">
      <h2>Entrar</h2>
      <p>Bem-vindo de volta ao TeleViewCare.</p>

      <div class="inputSection">
        <label for="u_email"><i class="fa-solid fa-envelope"></i></label>
        <input id="u_email" type="text" placeholder="E-mail">
      </div>
      <div class="inputSection">
        <label for="u_pass"><i class="fa-solid fa-key"></i></label>
        <input id="u_pass" type="password" placeholder="Senha">
      </div>
      <div>
        <button class="primary">Entrar</button>
        <p>Não possui conta? <button class="empty">Registre-se</button>.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AuthComp'
}
</script>