<template>
  <div id="app">
    <h2>Select a value from the dropdown and then click the button to see the value in a modal.</h2>
    <md-dropdown :value.sync="value" title="Drop me">
      <md-dropdown-item name="one">
        one
      </md-dropdown-item>
      <md-dropdown-item name="two">
        two
      </md-dropdown-item>
      <li class="divider"></li>
      <md-dropdown-item name="three">
        three
      </md-dropdown-item>
    </md-dropdown>
    <p></p>
    <md-modal :result.sync="result">
      <h4>Value: {{ value }}</h4>

      <span slot="footer">
        <md-button href="#" class="waves-effect waves-green btn-flat" @click.prevent="$broadcast('modal::close')">
          Done
        </md-button>
      </span>
    </md-modal>
    <md-button href="#" class="waves-effect waves-light" @click.prevent="$broadcast('modal::open')">
        Modal
    </md-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'one'
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
