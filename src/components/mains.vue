<template>
  <div class="mains">
    <div class="search-blok">
      <div class="search-logo">
        <img src="../assets/logotype.png" alt class="logo-img" />
      </div>
      <div class="box1">
        <input class="main-search" type="text" placeholder="Поиск курсов..." />
        <router-link to="/showBlogs">
          <button class="search-button">Поиск курсов</button>
        </router-link>
      </div>
      <div class="box2">
        <div class="box2-section">
          <p>категории</p>
          <p>топ курсов</p>
        </div>
        <p>Войти/регистрация</p>
      </div>
    </div>
    <section>
      <!--Начало "категорий курсов"-->
      <div class="categories">
        <h2 class="header" align="left">Категории курсов</h2>
        <div class="categoriesWrapper">
          <div class="categoryCard">
            <div>
              <img src="https://sun9-68.userapi.com/c857216/v857216431/19b5de/SpOiqoZQ48w.jpg" />
            </div>
            <div class="courseNameWrapper">
              <p>pic №1</p>
            </div>
          </div>

          <div class="categoryCard">
            <div>
              <img src="https://tvorcheskie-proekty.ru/files/images/reklama.png" />
            </div>
            <div class="courseNameWrapper">
              <p>pic №1</p>
            </div>
          </div>

          <div class="categoryCard">
            <div>
              <img src="https://sun7-7.userapi.com/6nxuRNgroJjM7mk-GJq-v_2RqH9bMGxUlS5E2A/wmWxmt9E0SI.jpg" />
            </div>
            <div class="courseNameWrapper">
              <p>pic №1</p>
            </div>
          </div>

          <div class="categoryCard">
            <div>
              <img src="https://guu.ru/wp-content/uploads/Fotolia_105930722_Subscription_Monthly_M.jpg" />
            </div>
            <div class="courseNameWrapper">
              <p>pic №1</p>
            </div>
          </div>
        </div>
        <a href="#" class="buttonToCourses">Больше категорий...</a>
      </div>
      <!--Конец "категории курсов"-->
    </section>
    <section>
      <!--Начало "популярных курсов"-->
      <div class="Popular">
        <h2>Популярные курсы</h2>
        <div class="popularWrapper">
          <div class="imgcontainer">
            <img src="https://www.motocms.com/blog/wp-content/uploads/2018/01/web-desi-main.jpg" />
          </div>

          <div class="popularText">
            <h2>Разработка инновационного продукта</h2>
            <p>курс дает практические знания о поэтапном процессе разработки и вывода на рынок инновационного продукта.</p>
            <div>
              <a class="buttonToCourses">Подробнее</a>
            </div>
          </div>
        </div>
        <div align="left" class="taglist">
          <a class="tag tagPurple">#Экономика</a>
         <!-- <a class="tag tagYellow">#Программирование</a>
          <a class="tag tagPink">#Дизайн</a>
          <a class="tag tagGreen">#реклама</a>
          <a class="tag tagOrange">#языки</a> -->
        </div>
      </div>
      <!--Конец "полулярных курсов"-->
    </section>
    <footer>
      <div class="footerWrapper">
        <div class="footerItem">
          <h3>Навигатор курсов</h3>
          <h4>В разработке учавствовали:</h4>
          <div class="imgRow">
            <img src="../assets/TimeOut.png" />
            <img src="../assets/KidsOut.png" />
            <img src="../assets/TAOMout.png" />
          </div>
          <br />
          <div class="copyright">
            <p>Копирайт 2020</p>
          </div>
        </div>

        <div class="footerItem">
          <h3>Категории</h3>
          <p>Категории</p>
          <p>Категории</p>
          <p>Категории</p>
        </div>

        <div class="footerItem">
          <h3>Топ курсов</h3>
          <p>Веб-дизайн</p>
          <p>Веб-дизайн</p>
          <p>Веб-дизайн</p>
        </div>

        <div class="footerItem">
          <h3>Контакты</h3>
          <p>Почта:</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "mains"
};
</script>

<style>
:root {
  --main-menu-color: black;
  --overall-text-color: white;
  --button-color: gray;
}
a {
  text-decoration: none;
}

section {
  width: 70vw;
  margin: 0 auto;
}

body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  overflow-x: hidden;
  background-color: var(--main-menu-color);
  color: var(--overall-text-color);
}
img{
  max-width: 100%;
  max-height: 100%;
}
.categoryCard img{
  width: 100%;
  height: 275px;
  object-fit: fill;
}

h1 {
  font-size: 49px;
}

h2 {
  font-size: 36px;
}

h3 {
  color: #da8f20;
}
h4 {
  color: #da8f20;
}

.imgRow {
  display: flex;
  justify-content: space-around;
}
.imgRow img {
  border-radius: 85px;
  width: 37px;
  height: 37px;
}

.categories {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  height: 40%;
}

.categoriesWrapper {
  display: flex;
  flex-flow: row wrap;
  align-content: space-around;

  flex: 2;
  justify-content: space-between;
}

.categoryCard {
  display: flex;
  width: 45%;
  height: 100%;
  flex-flow: column nowrap;
  /* background-size: 100% 100%; */
  /* color: var(--overall-text-color); */
  margin: 1% 0;
  z-index: 0;
  position: relative;
}

.buttonToCourses {
  align-self: flex-end;
  background: transparent;
  color: gray;
  font-weight: bold;
  font-size: 18px;
  border: 0;
}

.courseNameWrapper {
  display: flex;
  background-color: black;
  filter: opacity(80%);
  min-width: 100%;
  max-height: 20%;
  align-content: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  bottom: 0;
}

.Popular {
  display: flex;
  align-content: space-around;
  justify-content: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
}
.popularWrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.popularText {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: inherit;
  height: inherit;
}
.taglist {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-start;
  margin-top: 24px;
}
.imgcontainer {
  width: inherit;
  height: inherit;
  margin-right: 3rem;
}

.tag {
  color: var(--main-menu-color);
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 4px;
}
.tagPurple {
  background-color: #a9a3a9;
}
.tagYellow {
  background-color: #d3b17c;
}
.tagPink {
  background-color: #cb9694;
}
.tagGreen {
  background-color: #3c8781;
}
.tagOrange {
  background-color: #d67a1b;
}
.Element {
  width: 33%;
}
footer {
  margin-top: 5rem;
  display: flex;
  flex-flow: column wrap;
  background: #1b1b1b;
  /* padding: 0 71px 5px 71px; */
}
.footerItem {
  display: flex;
  flex-flow: column wrap;
}

.search-txt {
  background: #363636;
  border-radius: 8px;
}

header {
  display: flex;
  height: 146px;
  background: #333333;
  padding: 0 20px;
  margin: 0 auto;
  width: 75vw;
}
.headerWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
}
.TimeOut {
  border-radius: 85px;
  height: 85px;
  width: 85px;
}

.search-screen {
  display: flex;
  flex: 2;
  justify-content: center;
}

.footerWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 70vw;
  margin: 0 auto;
}

.copyright {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #fcfcfc;
}
.middleWrapper {
  display: flex;
  flex-flow: column wrap;
}
.categoryChoice {
  border: 0;
  background: transparent;
  color: white;
}
</style>
