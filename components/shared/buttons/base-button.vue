<template>
  <button class="b-button">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.b-button {
  padding: 0.5rem 3.75rem;
  background: url('~@/assets/images/background-button.svg') center no-repeat;
  background-size: cover;
  line-height: 19px;
  text-align: center;
  letter-spacing: 1px;
  color: #fffdf1;
  font-weight: 700;
  outline: none;
}
@media (min-width: 1920px) {
  .b-button {
    font-size: 30px;
    line-height: 35px;
    padding: 10px 86px;
  }
}
</style>
