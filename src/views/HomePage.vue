<template>
  <div id="home">
        <header>
        <img src="../assets/images/buddy.jpg" alt="buddy_pets" id="buddylogo" />
        <div id="cabeçalho">
            <a
            class="linkheader"
            href="https://nofaro.com/quem-somos"
            target="_blank"
            >Sobre</a
            >
            <a class="linkheader" href="https://nofaro.com/contrate" target="_blank"
            >Planos</a
            >
            <a
            class="linkheader"
            href="https://jobs.kenoby.com/nofaro"
            target="_blank"
            >Trabalhe conosco</a
            >
            <a
            class="linkheader"
            href="https://instagram.com/planonofaro"
            target="_blank"
            >Instagram</a
            >
            <a
            class="linkheader"
            href="https://facebook.com/planonofaro"
            target="_blank"
            >Facebook</a
            >
            <a class="linkheader" href="https://nofaro.com" target="_blank"
            >Nofaro</a
            >
        </div>
        </header>

        <div id="golden"></div>

        <h1>Pets</h1>
        <div id="buttons">
        <button class="collie">Collie</button>
        <button class="kuvasz">Kuvasz</button>
        <button class="puli">Puli</button>
        <button class="visla">Vizsla</button>
        </div>

        <div id="containerpets">
        <div
            class="pets"
            v-for="(pet, i) in pets"
            :key="i"
            v-on:click="clickCard(pet.id)"
        >
            <img :src="pet.avatar" class="petsimage" />
            Nome: {{ pet.name }} | Idade: {{ getPetAge(pet.birthday) }}
        </div>
        </div>

        <div id="collie"></div>
  </div>
</template>

<script>
    import petservice from "../services/pets";
    import { getAge } from "../utils/utils";
    export default {
    data() {
        return {
        pets: [],
        };
    },

    methods: {
        getPetAge: getAge,

        clickCard(id) {
        this.$router.push("/details/" + id);
        },
    },

    mounted() {
        petservice.listar().then((response) => {
        this.pets = response.data;
        });
    },
    };

    /* FILTROS POR RAÇAS: NESSA SEÇÃO COMENTADA TENTEI APLICAR UMA FUNÇÃO PARA OS BOTÕES DE RAÇA FUNCIONAREM COMO FILTROS,
    PORÉM NÃO TIVE SUCESSO, NÃO CONSEGUI ABSTRAIR OS CONTEÚDOS QUE CONSUMI A RESPEITO DOS FILTROS COM VUEJS PARA O PROJETO ATUAL,
    ASSIM COMO NAS OUTRAS FEATURES. TENTEI IMPLEMENTAR COM JAVASCRIPT PURO E INICIALMENTE NÃO FUNCIONOU, ENTÃO DEVIDO AO PRAZO DE ENTREGA
    DO PROJETO INFELIZMENTE NÃO VOU CONSEGUIR ENTREGAR O FILTRO.

    filterObjects("all");

    function filterObjects(c){
        var x, i;
        x = document.getElementsByClassName("box");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            removeClass(x[i], "show");
            if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")

        }
    }

    function addClass(element,name){
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.lenght; i++){
        if (arr1.indexOf(arr2[1]) == -1){
            element.className += "" + arr2[i];
        }
    }

    }

    function removeClass(element,name){
        var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.lenght; i++){
        while (arr1.indexOf(arr2[1]) > -1){
                arr1.splice(arr1.indexOf(arr2[i]), 1);
        }

    }
    }

    element.className = arr1.join ("pet.breddie"); */

</script>

<style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    header {
    background-color: white;
    height: 85px;
    }

    #cabeçalho {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    }

    #buddylogo {
    width: 160px;
    height: 80px;
    display: block;
    margin-right: auto;
    }

    .linkheader {
    font-size: 20px;
    margin: 40px;
    margin-top: -60px;
    text-decoration: none;
    color: black;
    transition: 0.2s opacity;
    }

    .linkheader:hover {
    opacity: 0.5;
    color: rgba(0, 132, 255, 0.959);
    }

    #golden {
    width: 100%;
    height: 500px;
    margin-bottom: 30px;
    background-image: url(../assets/images/golden.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    }

    h1 {
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px;
    }

    #buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -20px;
    }

    button {
    background-color: #4caf50;
    border: none;
    color: white;
    margin: 10px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }

    button:hover {
    background-color: rgba(0, 132, 255, 0.959);
    font-weight: 700;
    }

    #containerpets {
    background-color: rgba(255, 255, 255);
    padding: 20px;
    margin: 200px auto;
    margin-top: 0px;
    }

    .pets {
    display: inline-block;
    margin: 20px;
    background-color: rgba(0, 132, 255, 0.336);
    width: 280px;
    height: 280px;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    }

    .petsimage {
    width: 280px;
    height: 280px;
    border: 2px solid black;
    border-radius: 5px;
    }

    #collie {
    width: 100%;
    height: 500px;
    margin-top: -150px;
    background-image: url(../assets/images/collie.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>
