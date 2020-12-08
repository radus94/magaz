<template>
  <div class="search">
    <input type="text" />
    <button>search</button>
    <router-link class="add-btn" to="/add-auto">ADD</router-link>
  </div>
</template>

<style lang="scss">
.search {
  margin-top: 10px;
  input,
  button {
    height: 30px;
  }
  input {
    width: 70%;
  }
  button {
    width: 20%;
  }
  .add-btn {
    width: 10%;
    display: inline-block;
    border: 1px solid black;
    border-radius: 5px;
    padding: 4px 0 5px 0;
    background-color:teal;
    color:#fff;
    text-decoration: none;
    text-align: center;
  }
}
</style>