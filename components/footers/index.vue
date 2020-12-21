<template>
  <footer id="contact-us-area">
    <div class="footer-wrapper">
      <div class="container">
        <div class="footer-header">
          <div class="footer-header__logo">
            <picture>
              <source
                srcset="~@/assets/images/logo-2x.svg"
                media="(min-width: 1200px)"
              />
              <img src="~@/assets/images/logo.svg" alt="Logo" />
            </picture>
          </div>
          <div class="contact-us">
            <h2 class="contact-us__title">contact us</h2>
            <div class="contact-us__information">
              <span class="contact-us__icon icon-location"></span>
              <p class="contact-us__desc">
                2901 Marmora Road, Glassgow, Seattle, WA 98122-1090
              </p>
            </div>
            <div class="contact-us__information">
              <span class="contact-us__icon icon-mail"></span>
              <p class="contact-us__desc">info@bplay.com</p>
            </div>
          </div>
        </div>
        <div class="footer-body-wrapper">
          <div class="footer-body">
            <div class="partner-list">
              <div class="partner">
                <div class="partner__logo">
                  <img src="~@/assets/images/partners/sabs.svg" alt="sabs" />
                </div>
                <div class="partner__logo">
                  <img
                    src="~@/assets/images/partners/curacao.svg"
                    alt="curacao"
                  />
                </div>
                <div class="partner__logo">
                  <img src="~@/assets/images/partners/itech.svg" alt="sabs" />
                </div>
                <div class="partner__logo partner__logo--reverse">
                  <img
                    src="~@/assets/images/partners/license.svg"
                    alt="license"
                  />
                </div>
              </div>
            </div>
            <div class="flex-auto"></div>
            <div class="copy-right">
              Copyright &copy; 2020 bplay.com. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
    <scroll-button class="footer-scroll-top">Top</scroll-button>
  </footer>
</template>
<script>
import ScrollButton from '~/components/shared/buttons/scroll'
export default {
  components: { ScrollButton },
}
</script>
