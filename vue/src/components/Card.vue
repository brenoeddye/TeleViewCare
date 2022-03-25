<template>
  <div :class="'card ' + type">
      <h3>{{ title }}</h3>
      <icon><i :class="icon"></i></icon>
  </div>
</template>

<script>
export default {
    name: "cardComp",
    props: {
        title: String,
        icon: String,
        type: String
    }
}
</script>