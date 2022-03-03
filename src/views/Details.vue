<template>
    <div id="details">
        <header>
            <img src="../assets/images/buddy.jpg" alt="initial image" id="buddylogo" />
            <br />
            <div id="cabeçalho">
            <a
                class="linkheader"
                href="https://nofaro.com/quem-somos"
                target="_blank"
            >
                Sobre</a
            >
            <a class="linkheader" href="https://nofaro.com/contrate" target="_blank">
                Planos</a
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
            <a class="linkheader" href="https://nofaro.com" target="_blank">Nofaro</a>
            </div>

            <hr>
        </header>
        <div id="button">
            <button>
            <router-link id="routerbutton" to="/"> ← voltar </router-link>
            </button>
        </div>

        <div id="petcontainer">
            <div id="pet" v-if="pet">
            <img :src="pet.avatar" class="petimage" /> <br />
            {{ pet.name }} <br />
            {{ getPetAge(pet.birthday) }} anos | {{ pet.breed }}
            </div>
        </div>
        <br>
        <div id="idade">
            <h1>Buddies | Idade média: {{ getAverageAge() }}</h1>
        </div>

        <div id="containerbuddy">
            <div class="buddy" v-for="(buddie, i) in buddies" :key="i">
            <img :src="buddie.avatar" class="petsimage" />
            Nome: {{ buddie.name }} <br>
            {{ getPetAge(buddie.birthday) }} anos | {{ buddie.breed }}
            </div>
        </div>
    </div>
</template>

<script>
    import petservice from "../services/pets";
    import { getAge } from "../utils/utils";

    export default {
    data() {
        return {
        id: this.$route.params.id, // pega todos os parâmetros da rota (id - só o parâmetro do id)
        buddies: [],
        pet: null,
        };
    },

    methods: {
        getPetAge: getAge,

        getAverageAge() {
        var totalAge = 0;
        this.buddies.forEach((buddie) => {
            totalAge += this.getPetAge(buddie.birthday);
        });

        return totalAge / this.buddies.length;
        },
    },

    mounted() {
        petservice.listarPetPeloId(this.id).then((response) => {
        this.pet = response.data;

        this.pet.buddies.forEach((buddieId) => {
            petservice.listarPetPeloId(buddieId).then((buddieresponse) => {
            this.buddies.push(buddieresponse.data);
            });
        });
        });
    },
    };
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
    margin-top: -80px;
    text-decoration: none;
    color: black;
    transition: 0.2s opacity;
    }

    .linkheader:hover {
    opacity: 0.5;
    color: rgba(0, 132, 255, 0.959);
    }

    #button {
    background-image: url(../assets/images/bc.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    }

    button {
    background-color: #4caf50;
    border: none;
    color: white;
    margin: 10px;
    padding: 8px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }

    button:hover {
    font-weight: 800;
    color: white;
    }

    #routerbutton {
    font-size: 20px;
    margin: 40px;
    text-decoration: none;
    color: white;
    transition: 0.2s opacity;
    }

    #petcontainer {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/images/bc.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 900;
    }

    .petimage {
    width: 400px;
    height: 400px;
    border: 2px solid black;
    border-radius: 5px;
    }

    .petsimage {
    width: 220px;
    height: 220px;
    border: 2px solid black;
    border-radius: 5px;
    }

    #pet {
    justify-content: center;
    text-align: center;
    color: white;
    }

    .textpet {
    color: black;
    }

    #idade {
    font-size: 15px;
    font-weight: 900;
    }

    #containerbuddy {
  margin-left: 14%;
  font-size: 20px;
    }

    .buddy {
    width: 200px;
    height: 200px;
    display: inline-block;
    margin: 20px;
    justify-content: center;
    text-align: center;
    font-weight: 900;
    }
</style>