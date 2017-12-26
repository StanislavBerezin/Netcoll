<template>
  <div>
    <div class="main_image">
      <Nav></Nav>
      <div class="text">
        <h1 class="subtitle is-1">Empowering knowledge<br>
          <hr class="line">To assist and enhance learnng experience</h1>
      </div>



    </div>
    <div class="each">
      <div class="after_image  row">

        <div class="section">
          <h2 class="subtitle is-1">Simpler and quicker &mdash; the support that is needed</h2>
          <p class="subtitle is-4">
            Get better support with your studies from your classmates that do the same units as you do!
          </p>
        </div>

        <div class="columns">

          <div class="column">

            <h3 class="subtitle is-5">Join community</h3>
            <b-icon icon="account-multiple-outline" class="test" size="is-large"></b-icon>
            <p class="subtitle is-6">
              Meet like minded people and make friends to help you with your studies. Discuss the topics that need more explanation and
              collaborate with others.
            </p>
          </div>

          <div class="column">
            <h3 class="subtitle is-5">Quick access</h3>
            <b-icon icon="clock" class="test" size="is-large">


            </b-icon>
            <p class="subtitle is-6">
              You can quickly access the topics that can help you to understand the material from your university. Explained and delivered
              by your classmates.
            </p>
          </div>

          <div class="column">


            <h3 class="subtitle is-5">Personal assistance</h3>
            <b-icon icon="account-outline" class="test" size="is-large"></b-icon>
            <p class="subtitle is-6">
              Get your personal tutor at your own university to help you with your assignments and studies. Or become a tutor and make
              money by helping others.
            </p>
          </div>


          <div class="column">


            <h3 class="subtitle is-5">Share knowledge</h3>
            <b-icon icon="message-text-outline" class="test" size="is-large"></b-icon>
            <p class="subtitle is-6">
              Create an article and share your knowledge and understanding with your classmates and make some money while studying at university.
            </p>
          </div>

        </div>

      </div>
    </div>
    <div class="each">


      <div class="row ">

        <div class="section">

          <h2 class="subtitle is-1">How does it work?</h2>
          <section>
            <b-tabs position="is-centered" class="block">
              <b-tab-item label="I am a student wanting to learn" @click="selectedComponent='Learn'">

                <article class="message is-info">
                  <div class="message-header">
                    <p>Step 1</p>
                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum
                  </div>
                </article>

                <article class="message is-info">
                  <div class="message-header">
                    <p>Step 2</p>
                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum
                  </div>
                </article>

                <article class="message is-info">
                  <div class="message-header">
                    <p>Step 3</p>
                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum
                  </div>
                </article>

                <article class="message is-info">
                  <div class="message-header">
                    <p>Step 4</p>
                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum
                  </div>
                </article>


                <p class="subtitle is-4">
                  Now it's time to get started
                </p>
                <a class="button is-info">Log-in</a>
                <a class="button is-info">Register</a>
              </b-tab-item>


              <b-tab-item label="I am a student wanting to help" @click="selectedComponent='Teach'">


                <article class="message is-success">
                  <div class="message-header">
                    <p>Step 1</p>

                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                    Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                  </div>
                </article>

                <article class="message is-success">
                  <div class="message-header">
                    <p>Step 2</p>

                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                    Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                  </div>
                </article>

                <article class="message is-success">
                  <div class="message-header">
                    <p>Step 3</p>

                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                    Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                  </div>
                </article>

                <article class="message is-success">
                  <div class="message-header">
                    <p>Step 4</p>

                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                    quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                    Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                  </div>
                </article>
                <p class="subtitle is-4">
                  Now it's time to get started
                </p>
                <a class="button is-success">Log-in</a>
                <a class="button is-success">Register</a>

              </b-tab-item>
            </b-tabs>

          </section>
        </div>


      </div>
    </div>

    <section class="hero is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="subtitle is-1">
        If you have any questions please contact us
      </h1>
      <a class="button is-link">Contact us</a>
    </div>
  </div>
</section>
  </div>
</template>

<script>
  import Nav from './small/Nav'
  import Footer from './small/Footer'

  export default {
    data() {
      return {
        selectedComponent: "Teach"
      }
    },
    components: {
      Nav,
      Footer

    },
    watch: {

    }
  }

</script>
<style lang="css" scoped>
.container h1, h2{
    text-align: center;
    font-weight: 100;

}
  .each:nth-child(odd) {
    background-color: rgba(236, 240, 241, 0.7);
  }

  .section h2,
  p {
    font-weight: 100;
  }

  .section {
    margin-bottom: 35px;
  }

  .each {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 80px;
  }

  .column h3,
  p {
    font-weight: 100;
  }

  .column p {
    line-height: 30px;
  }

  h2::after {
    display: block;
    height: 2px;
    background-color: #3498db;
    content: " ";
    width: 15rem;
    margin: 0 auto;
    margin-top: 30px;
  }


  .test {
    color: rgba(52, 152, 219, 1.0);
    margin-top: -10px;
    margin-bottom: 10px;
  }
  /*good here */

  .text {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }


  .line {
    width: 40%;
    height: 2px;
    background-color: rgba(236, 240, 241, 1.0);
  }

  .text h1 {
    color: rgba(236, 240, 241, 1.0);
    grid-column: 2/10;
    position: relative;
    margin-top: 20%;
    font-weight: 100;
    font-size: 2.5rem;
  }

  .main_image {
    background: #00F260;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(left, #0575E6, #00F260);
    background: -moz-linear-gradient(left, #0575E6, #00F260);
    background: -o-linear-gradient(left, #0575E6, #00F260);
    background: linear-gradient(to right, #0575E6, #00F260);
    /* Chrome 10-25, Safari 5.1-6 */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }

</style>
