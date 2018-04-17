<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Я фотографирую еще со школьных лет и стать фотографом меня побудили популярные зарубежные фотопроекти. Я восхищался умением изобразить на фотографии, целую историю о человеке, его мысли, радость, возможность передать напряжение момента.">
  <title>Евгений Сваровских - фотограф, обо мне</title>
  <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png">
  <link rel="manifest" href="../images/favicon/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">

  <link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css">
  <script src="../lib/js/jquery-3.3.1.min.js"></script>
  <script src="../lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="../lib/lazy/jquery.lazy.min.js"></script>
  <link rel="stylesheet" href="../lib/fullpage/jquery.fullpage.min.css">
  <script src="../lib/fullpage/jquery.fullpage.min.js"></script>
  <script src="../lib/js/jquery.innerfade.js"></script>
  <link rel="stylesheet" href="../main.css">
  <script src="../js/main.js"></script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115136432-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-115136432-1');
</script>

</head>

<body id="about">
  <?php include "../header.html"; ?>
  
  <main  id = "fullpage" class="about">  
        <div class="container"> 
            <div class="row"> 
              <section class="section about-item item1">
                 <ul id="portfolio" class="col-md-4 col-sm-4"> 
                   <li> <img  src="../images/about/photograph-dnepropetrovsk.jpg" alt="Евгений Сваровских - фотограф, обо мне"> </li>
                   <li class="mobile-about"> <img   src="../images/about/photograph-dnepr.jpg" alt="Евгений Сваровских - фотограф, обо мне"> </li>  
                   <li class="mobile-about"> <img   src="../images/about/svadebniy-photograph.jpg" alt="Евгений Сваровских - фотограф, обо мне"> </li>
                 </ul>
                           
                 <div class="col-md-8 col-sm-8 description">
                   <h3>Привет, меня зовут Женя!</h3>
                   <p>Я фотографирую со школьных лет и стать фотографом
                    меня побудили популярные зарубежные фотопроекты.
                    Я восхищался умением изобразить на фотографии целую
                    историю о человеке, его мысли, радость, возможность
                    передать напряжение момента.</p>
                 </div>

                 </section>
                 <section class="section about-item item1">
                 <div class="col-md-4 col-sm-4"> 
                  <img  class="mobile-about-all" src="../images/about/photograph-dnepr.jpg" alt="Евгений Сваровских - фотограф, обо мне">             
                 </div>
                 <div class="col-md-8 col-sm-8 description">
                   <p>Вспомните, каково это стоять перед камерой и подбирать
                      свои лучшие позы. Согласитесь, так вы не сможете быть
                      спокойными и расслабленными, если вы не
                      профессиональная модель конечно. Имея восьмилетний
                      опыт, я расскажу вам всё, что нужно для фотографии, о
                      которой вы мечтаете.</p>
                 </div>

                 </section>
                   <section class="section about-item item1">
                 <div class="col-md-4 col-sm-4"> 
                  <img  class="mobile-about-all" src="../images/about/svadebniy-photograph.jpg" alt="Евгений Сваровских - фотограф, обо мне">             
                 </div>
                 <div class="col-md-8  col-sm-8 description">
                   <p>Отсняв более тысячи фотопроектов, я понял всю суть
                    фотографии. Часто для удачной фотографии не нужно
                    выставлять 40 минут свет, подбирать фон или оптимальные
                    настройки камеры. Нужно просто остаться незамеченным
                    для всех. И тогда можно сделать самые искрение снимки.
                    Даже если при трогательном моменте у вас помокреют
                    глаза, поверьте, такой кадр будет самым лучшим, и он
                    вам понравится!</p>

                    <p class="city-info">Живу в городе Днепр.<br>
                    Снимаю свадьбы по всей Украине.</p>
                 </div>
                  
                 
                 </section>
                   
              
             
            </div>
        </div>

  </main>

<?php include "../footer.html"; ?>
 
<script>
 $(document).ready(
        function(){
            
          $('ul#portfolio').innerfade({
            speed: 2000,
            timeout: 5000,
            type: 'sequence',
            containerheight: '555px'
          });
          
      });
</script>
</body>
</html>