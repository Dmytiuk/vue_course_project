<template>
  <div class="home">
    <h1>Taco</h1>
    <h2>{{ info }}</h2>
    <section class="section">
      <kinesis-container>
        <div class="section__inner">
          <div class="section__description">
            <h3>Коротко про головне:</h3>
            <p>Смартфон з операційною системою Android можна перетворити на IP-камеру для відеоспостереження за об'єктами за допомогою Wi-Fi-з'єднання. У цьому вам допоможе наш додаток Taco.
              Taco - використовує камеру смартфона і робить знімок коли у полі зору камери з'являється будь-який рух. Всі знімки додаток відправляє в Телеграм користувача.</p>
              <Button/>
          </div>
          <div class="section__decoration">
            <kinesis-element :strength="30" axis="y" ><img class="parallax-img right" src="@/assets/img/home_dec2.png"></kinesis-element>
            <kinesis-element :strength="-30" axis="y" ><img class="parallax-img left" src="@/assets/img/home_dec1.png"></kinesis-element>
          </div>
        </div>
      </kinesis-container>
    </section>
      <section class="section">
          <kinesis-container>
              <div class="section__inner">
                  <div class="section__description">
                      <h3>Основні переваги:</h3>
                      <p>Програма добре оптимізована , що надає змогу використовувати її навіть на технічно слабких пристроях . Задля відправки даних ми не дарма з'язуємо пристрої між Телеграм , адже це дуже популярний та надзвичайно швидкий месенджер сьогодення.</p>
                      <Button/>
                  </div>
                  <div class="section__decoration">
                      <kinesis-element :strength="100" axis="x"><img class="parallax-img right__2" src="@/assets/img/telegram.png"></kinesis-element>
                      <kinesis-element :strength="-30" axis="x"><img class="parallax-img left" src="@/assets/img/android.png"></kinesis-element>
                  </div>
              </div>
          </kinesis-container>
      </section>
  </div>
</template>

<script>
    import button from '@/components/button.vue'
      export default {
        name: 'home',
          components: {
              Button: button
          },
          data() {
              return {
                  info: null
              };
          },
          mounted() {
              const baseURI = 'https://api.coindesk.com/v1/bpi/currentprice.json'
              this.$http.get(baseURI)
                  .then(response => (this.info = response));
          }
  }
</script>

<style lang="scss" scoped>

</style>
