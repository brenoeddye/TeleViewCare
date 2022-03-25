<template>
    <div>
        <div class="homeContent">
            <div class="homeUserback">
                <div class="userAvatar">
                    <span><i class="fa-solid fa-user"></i></span>
                </div>
                <div class="userContent">
                    <h4>{{ userName }}</h4>
                    <p>Paciente desde {{ userSince }}.</p>
                </div>
                <div class="userQueries">
                    <h2>{{ userQueries }}</h2>
                    <p>consultas pendentes</p>
                </div>
            </div>

            <div class="homeCards">
                <router-link to="/consulta"><Card title="Iniciar" icon="fa-solid fa-phone" type="call"></Card></router-link>
                <Card title="Procurar" icon="fa-solid fa-magnifying-glass" type="search"></Card>
                <Card title="Dados" icon="fa-solid fa-box-archive" type="data"></Card>
                <Card title="Suporte" icon="fa-solid fa-headset" type="help"></Card>
                <Card title="Ajuste" icon="fa-solid fa-gear" type="setting"></Card>
                <router-link to="/"><Card title="Sair" icon="fa-solid fa-power-off" type="off"></Card></router-link>
            </div>

            <div class="homeQueries">
                <div class="homeCall">
                    <h1>Consultas</h1>
                    <tbody>
                        <tr>
                            <td>Consulta com a Doutora Aline</td>
                            <td>12:00</td>
                            <td>Hoje</td>
                        </tr>
                        <tr>
                            <td>Consulta com o Doutor Vitor</td>
                            <td>15:30</td>
                            <td>Amanhã</td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    name: 'homeComp',
    components: {
        Card
    },
    data() {
        return {
            userName: 'Breno Pereira',
            userQueries: '2',
            userSince: '19/03/2022'
        }
    }
}
</script>