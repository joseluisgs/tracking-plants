<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Web App realizada con Vue para poder realizar el mejor cuidado de tus plantas.<br>
      Otro Ejemplo de usar Vue + Firebase con Tailwind CSS, Jest, Axios REST y otras tecnologías.
    </p>
    <p>Probando Tailwind</p>
    <button class="border rounded bg-green-600 text-white" >Mi Boton</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
