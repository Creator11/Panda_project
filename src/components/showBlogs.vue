<template>
  <div id="show-blogs">
    <div class="search-blok">
      <router-link to="/">
        <div class="search-logo">
          <img src="../assets/logotype.png" alt class="logo-img" />
        </div>
      </router-link>
      <div class="box1">
        <input
          class="main-search"
          type="text"
          v-model="search"
          placeholder="Поиск курсов..."
        />
        <button class="search-button">Найти</button>
      </div>
      <div class="box2">
        <div class="box2-section">
          <p>категории</p>
          <p>топ курсов</p>
        </div>
        <p>Войти/регистрация</p>
      </div>
    </div>
    <router-link to="/course1">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <div class="main-blog-description">
          <div class="img-section">
            <img class="blog-img" :src="blog.year" alt />
          </div>
          <div class="blog-description">
            <div class="title-name">
              <h3>{{ blog.title | (to - uppercase) }}</h3>
            </div>
            <div class="description-text">
              <article>{{ blog.body }}</article>
            </div>
            <div class="blog-info-text">
              <p class="info-text__text">{{ blog.lang }}</p>
              <p class="info-text__text">2019 год</p>
              <P class="info-text__text">{{ blog.rate }}</P>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          year:
            "https://sun7-7.userapi.com/6nxuRNgroJjM7mk-GJq-v_2RqH9bMGxUlS5E2A/wmWxmt9E0SI.jpg",
          lang: "Русский",
          rate: "4,8/5",
          title: "Управление личными финансами",
          body:
            "Основной целью данного курса является формирование того, что необходимо  управление финансами",
        },
        {
          year: "https://tvorcheskie-proekty.ru/files/images/reklama.png",
          lang: "Русский",
          rate: "4,6/5",
          title: "Контекстная реклама. Google AdWords",
          body:
            "Курс “Контекстная реклама в Google AdWords” рассказывает об основах рекламы в Google AdWords",
        },
        {
          year:
            "https://guu.ru/wp-content/uploads/Fotolia_105930722_Subscription_Monthly_M.jpg",
          lang: "Русский",
          rate: "4,5/5",
          title: "Специализация Эффективный руководитель",
          body:
            "Эта специализация предназначена для всех, кто интересуется психологией менеджмента ",
        },
        {
          year:
            "https://cdn22.img.ria.ru/images/130058/95/1300589535_0:99:2000:1233_600x0_80_0_0_49cc5a56fb9ea9aa21d1776df47bc5d1.jpg",
          lang: "English",
          rate: "4,7/5",
          title: "Learn English: Intermediate Grammar",
          body:
            "This specialization covers common topics in intermediate grammar, nglish grammar topics that learners of English frustrating",
        },
        {
          year:
            "https://sun9-68.userapi.com/c857216/v857216431/19b5de/SpOiqoZQ48w.jpg",
          lang: "Русский",
          rate: "4,9/5",
          title: "Искусство разработки на современном C++",
          body:
            "В специализации преподаватели делятся своим многолетним опытом создания больших проектов на языке C++.",
        },
        {
          year:
            "https://www.motocms.com/blog/wp-content/uploads/2018/01/web-desi-main.jpg",
          lang: "Русский",
          rate: "4,6/5",
          title: " Разработка инновационного продукта",
          body:
            "курс дает практические знания о поэтапном процессе разработки и вывода на рынок инновационного продукта.",
        },
      ],
      search: "",
    };
  },

  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog .main-search {
  width: 350px;
  padding: 5px;
}
.title-name {
  color: #da8f20;
  margin-left: 30px;
}
.single-blog {
  display: flex;
  margin: 25px 0;
  box-sizing: border-box;
  flex-direction: column;
  width: 600px;
  height: 200px;
}
.img-section {
  width: 500px;
  height: 200px;
}
.blog-img {
  width: 100%;
  height: 100%;
}
.blog-description {
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}
.blog-info-do {
  background: cadetblue;
  display: flex;
}

.description-text {
  width: 250px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-left: 30px;
  margin-bottom: 10px;
}
.main-search {
  width: 350px;
  height: 20px;
  padding: 7px;
  border-radius: 10px;
  border: none;
  background: #363636;
  color: #9c8f8f;
  margin: 18px;
  margin-top: 20px;
  outline: none;
}
.search-blok {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #1b1b1b;
  width: 755px;
  height: 150px;
  margin: 0 auto;
}
.search-logo {
  position: absolute;
  margin-left: 30px;
  top: 17px;
  cursor: pointer;
}
.logo-img {
  widows: 100%;
}
.box1 {
  display: flex;
  justify-content: space-around;
  width: 600px;
  align-items: center;
  margin: 0 auto;
  margin-left: 100px;
}

.box2 {
  display: flex;
  justify-content: space-around;
  color: white;
  width: 600px;
  margin: 0 auto;
  align-items: center;
  margin-left: 70px;
}
.box2-section {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.search-button {
  width: 143px;
  height: 35px;
  background: #ffa31a;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.blog-info-text {
  background: #363636;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.main-blog-description {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #1b1b1b;
  width: 600px;
  height: 200px;
}
.info-text__text {
  color: white;
}
</style>
