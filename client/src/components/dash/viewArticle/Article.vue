<template>
    <div class="grid-wrap">
        <Nav class="navigation"> </Nav>
       
        <div class="article">
             <div class="test">
            <h1>Buy this cours</h1>
            give ratings please
            dummy text
        </div>
           
            <h1 class="subtitle is-2">{{title}} </h1>
           
            <div class=" mainText">
                  <p class="publish">Publsiehd on: {{date}} | By {{author}}</p>
                <p class="subtitle is-5">{{mainText}}</p>
            </div>
            <div class="comments">
               <p>Ratings</p>   
         <star-rating :stars="stars" show-grey class="ratings"> </star-rating>
         
                <h1 class="subtitle is-3" >Comments</h1>
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
export default {
    data(){
        return{
            stars: 4,
            date: '12.03.2013',
            author: 'James Clssssssssark',
            title: 'How to understand OOP in C by example',
            mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
        }
    },
    components:{
        Nav,
        Footer,
        Comments
    }
  
}

</script>
<style scoped>
.grid-wrap{
    display: grid;
    grid-template-columns: repeat(24, 1fr);

}
.navigation{
    grid-column: 1/25;
}
.footer{
    grid-column: 1/25;
}
.article{
    grid-column: 5/20;
    margin-top:3rem;
    text-align: center;

}
.mainText{

    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 3rem;
   
}
.mainText p{
    line-height: 1.9rem;
    word-spacing: 0.5rem;
}
.publish{
    
    margin: 20px 0;
}
.comments{
   
    text-align: left;
}
.test{
    border: 2px solid red;
    background-color: #fff;
    position: fixed;
    top: 120px;
    right: 10%;
    z-index: 1;
    width:200px;
    max-width: 200px;
    
}
</style>


      
