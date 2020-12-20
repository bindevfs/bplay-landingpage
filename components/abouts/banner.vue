<template>
  <div class="banner-wrapper">
    <div class="banner">
      <div class="experience">
        <div class="experience__num">15</div>
        <div class="experience__year"><h3>years</h3></div>
        <p class="experience__content">
          of experience in the
          <span class="experience__content--red">iGaming</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner-wrapper {
  position: relative;
  width: 100%;
  min-height: 26rem;
  .banner {
    min-height: inherit;
    background: linear-gradient(
        180deg,
        #15161e 7.29%,
        rgba(21, 22, 30, 0.38) 100%
      ),
      url('~@/assets/images/background-banner.jpeg') no-repeat left 25% top 40%;
    background-size: 400% auto;
    @media (min-width: 1024px) {
      background-size: cover;
      background-position: 100% 100%;
    }
  }
}
.experience {
  padding: 28px 66px;
  background: rgba(21, 22, 30, 0.8);
  border-radius: 0 0 10px 10px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 16rem;
  @media (min-width: 1024px) {
    top: 1rem;
    left: 20%;
  }
  &__num {
    color: #f41616;
    font-weight: 700;
    font-size: 96px;
    line-height: 112px;
    font-family: 'Roboto', sans-serif;
  }
  &__year {
    padding: 0 0.875rem;
    h3 {
      border-bottom: 1px solid #f41616;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 26px;
      line-height: 33px;
      text-align: center;
      color: #fff;
      font-family: 'Mulish', sans-serif;
      padding-bottom: 11px;
      margin-bottom: 11px;
    }
  }
  &__content {
    font-size: 18px;
    line-height: 23px;
    color: #fff;
    &--red {
      color: #f41616;
    }
  }
}
</style>
