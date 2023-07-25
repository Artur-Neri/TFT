<template>
  <div class="niveis">
    <input type="radio" name="nivel" 
    :id="`nivel${level}`" 
    :value="level" 
    :v-model="selectedLevel"
    >
    <label :for="`nivel${level}`">{{ level }}</label>
  </div>
</template>

<script>
export default {
  name: "NivelRadio",
  props: {
    level: Number,
    selectedLevel: Number,
  },
};
</script>

<style scoped>
  .niveis input {
    display: none;
  }

  .niveis label {
    text-align: center;
    width: 39px;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid transparent;
    transition: .3s ease-in-out;
}

  .niveis label:hover {
    cursor: pointer;
    background-color: #bbbbbb28;
  }

  .niveis input:checked+label {
  background-color: #bbbbbb28;
    border: 1px solid #ffffff86;
}

  .niveis {
    display: flex;
    gap: 5px;
    justify-content: space-around;
    margin: 5px;
  }
</style>
