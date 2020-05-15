<template>
  <div class="course">
    <div class="search-blok">
      <router-link to="/"
        ><div class="search-logo">
          <img src="../assets/logotype.png" alt class="logo-img" /></div
      ></router-link>
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

    <div class="course-block">
      <h1>Управление личными финансами</h1>
      <div class="course-block-main">
        <div class="main-img-section">
          <img
            class="main-img"
            src="https://sun7-7.userapi.com/6nxuRNgroJjM7mk-GJq-v_2RqH9bMGxUlS5E2A/wmWxmt9E0SI.jpg"
            alt=""
          />
        </div>
        <div class="main-text">
          <div class="main-text-wrapper">
            <div class="text-description">
              <div class="section-text">
                <p class="text-key">Рейтинг:</p>
                <p class="text-value">4.8</p>
              </div>
              <div class="section-text">
                <p class="text-key">Источник:</p>
                <p class="text-value">Coursera</p>
              </div>
              <div class="section-text">
                <p class="text-key">Прошло:</p>
                <p class="text-value">29 441</p>
              </div>
              <div class="section-text">
                <p class="text-key">Язык:</p>
                <p class="text-value">Русский</p>
              </div>
              <div class="section-text">
                <p class="text-key">Сертификат:</p>
                <p class="text-value">есть</p>
              </div>
            </div>

            <a href="#" class="link-main-course">перейти к курсу</a>
          </div>
        </div>
      </div>
      <div class="course-description">
        <p>
          Основной целью данного курса является формирование у слушателей
          понимания того, что в современном мире крайне необходимо грамотное
          управление личными финансами, и это обязательно поможет человеку стать
          финансово состоятельным и независимым. Изучение курса позволит лучше
          ориентироваться в текущих финансовых вопросах, практически ежедневно
          возникающих у людей, и находить оптимальные для каждого человека
          способы управления личным капиталом
        </p>
      </div>
    </div>
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
// Imports
//import showBlogs from "./components/showBlogs.vue";

export default {
  name: "course3",
};
</script>

<style>
body {
  margin: 0;
  font-family: Roboto;
}
.main-img-section {
  width: 290px;
}
.course-block {
  max-width: 756px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.course-block-main {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 20px;
}
.link-main-course {
  width: 145px;
  height: 30px;
  background: #ffa31a;
  color: black;
  padding: 10px 36px;
  border-radius: 17px;
  width: 128px;
  height: 20px;
}
.main-img-section {
  width: 290px;
  height: 246px;
}
.main-img-section img {
  height: 100%;
}
.section-text {
  display: flex;
  justify-content: start;
  height: 35px;
}
p.text-key {
  margin-right: 10px;
  color: #dee3de;
}
p.text-value {
  font-weight: 600;
}
.main-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 245px;
}
</style>
