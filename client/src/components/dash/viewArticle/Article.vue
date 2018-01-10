<template>
  <div class="grid-wrap">
    <Nav class="navigation"> </Nav>

    <div class="article">
      <div class="test">

        <star-rating :stars="stars" show-grey class="ratings" color="is-info"> </star-rating>

        <p class="subtitle is-4" style="margin-top:1rem;"> For $5</p>
        <a class="button is-large is-info">Buy this article</a>
      </div>

      <h1 class="subtitle is-2">{{title}} </h1>

      <div class=" mainText">
        <p class="publish">Publsiehd on: {{date}} | By {{author}}</p>
        <p class="subtitle is-5">{{mainText}}</p>
      </div>
      <div class="author">
        <img src="http://www.tippanii.com/images/noprofile.png">
        <p class="subtitle is-3" style="margin-left:1rem;"> {{author}}</p>
        <div class="rest">
          <p> Publications: 38</p>
          <p>Followers: 11</p>
          <p>Degree: Computer science</p>
            
        </div>
        <a class="button is-info is-large">Book tutorial session</a>

      </div>
      <div class="comments" style="margin-top:2rem;">

        <p class="subtitle is-4" style="margin-bottom:2rem;">Ratings</p>
        <star-rating :stars="stars" show-grey class="ratings" color="is-info"> </star-rating>


        <h1 class="subtitle is-3" style="margin-top:2rem;">Comments</h1>
        <Comments></Comments>
      </div>



    </div>



    <Footer class="footer"></Footer>
  </div>

</template>
<script>
  import Nav from '../Nav'
  import Footer from '../../small/Footer'
  import Comments from './Comments'
  import StarRating from '../../../microComponents/Stars.vue'

  export default {
    data() {
      return {
        stars: 4,
        date: '12.03.2013',
        author: 'James Clssssssssark',
        title: 'How to understand OOP in C by example',
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
      }
    },
    components: {
      Nav,
      Footer,
      Comments,
      StarRating

    }

  }

</script>
<style scoped>
  .grid-wrap {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
  }

  .navigation {
    grid-column: 1/25;
  }

  .footer {
    grid-column: 1/25;
  }

  .article {
    grid-column: 5/20;
    margin-top: 3rem;
    text-align: center;
  }

  .mainText {

    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .mainText p {
    line-height: 1.9rem;
    word-spacing: 0.5rem;
  }

  .publish {

    margin: 20px 0;
  }

  .author {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    margin: 0 auto;
    max-width: 900px;
    
    
  }
  .author a{
      margin: 0 auto;
      margin-top:2rem;
  }

  .author img {
    border-radius: 100%;
    width: 80px;
    height: 80px;
   
    margin-bottom:1rem;

  }

  .rest {
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    margin-top:1rem;
    justify-content: space-between;

  }

  .comments {
    text-align: left;

    max-width: 900px;
    margin: 0 auto;
  }

  .test {
    border: 1px solid rgba(149, 165, 166, 0.5);
    border-radius: 20px;
    background-color: #fff;
    position: fixed;
    top: 120px;
    right: 2%;
    z-index: 1;

    padding: 20px;
  }

  @media screen and (max-width: 1000px) {
    .test {
      display: none;
    }
    .author {
            justify-content: center;
    
    
    }
  }


</style>
