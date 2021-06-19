import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  "state": {
    "dataJson": {
      "home" : "Верстка сайтов на HTML и CSS HTML5 CSS3 JavaScript Vue.js.",
      "learns" : [ {
        "content" : "Vue.js полный курс",
        "finish" : "",
        "org" : "Udemy.com",
        "start" : "Март 2020"
      }, {
        "content" : "Современный Javascript с нуля на реальных проектах",
        "finish" : "Март 2020",
        "org" : "Udemy.com",
        "start" : "Январь 2020"
      }, {
        "content" : "Курс для начинающих HTML, CSS, JS",
        "finish" : "Январь 2020",
        "org" : "HTML Academy",
        "start" : "Ноябрь 2019"
      }, {
        "content" : "Высшее образование, Специалист по защите информации",
        "finish" : "2015",
        "org" : "БФУ им. И.Канта",
        "start" : "2010"
      } ],
      "slides" : [ {
        "content" : "Верстка одноэкранного  адаптивного лендинга для собеседования",
        "href" : "https://artemf92.github.io/webmedia-test/",
        "src" : "webmedia-test.jpg",
        "title" : "Лендинг Granmar"
      }, {
        "content" : "Верстка адаптивного лендинга для собеседования",
        "href" : "https://artemf92.github.io/kit-test/",
        "src" : "kit-test.jpg",
        "title" : "Лендинг Asenia"
      }, {
        "content" : "Верстка адаптивного лендинга для компании Tukva",
        "href" : "https://artemf92.github.io/tukva/",
        "src" : "tukva-maket.jpg",
        "title" : "Лендинг Tukva"
      }, {
        "content" : "Верстка макета сайта в одно окно с эффектом слайдера на чистом JS.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "usabilitylab.png",
        "title" : "Сайт для компании Usabilitylab."
      }, {
        "content" : "Верстка адаптивного сайта с использованием флексбокс",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "solarbox.jpg",
        "title" : "Макет SolarBox"
      }, {
        "content" : "Верстка адаптивного сайта на Bootstrap. Добавление слайдера Swiper.js",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "theWitcher.jpg",
        "title" : "Макет сайта сериала The Witcher"
      }, {
        "content" : "Верстка интернет-магазина с нуля по дизайн-макету в Figma. Подкгрузка товаров в окне на чистом JS без обновления страницы, имитация работы с сервером.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "spares.png",
        "title" : "Интернет-магазин автозапчастей"
      }, {
        "content" : "Верстка сайта с использованием инструментов: Less, Gulp. Перенос сайта на wordpress и его адапатация.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "surfing.jpg",
        "title" : "Учебный макет сайта про серфинг."
      }, {
        "content" : "Верстка адаптивного сайта с использованием flexbox.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "nemesis.jpg",
        "title" : "Верстка макета Nemesis."
      }, {
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga aperiam rerum voluptatem aliquam. Necessitatibus.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "site-apollo.jpg",
        "title" : "Lorem ipsum dolor sit amet consectetur."
      }, {
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga aperiam rerum voluptatem aliquam. Necessitatibus.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "site-organica.jpg",
        "title" : "Lorem ipsum dolor sit amet consectetur."
      }, {
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga aperiam rerum voluptatem aliquam. Necessitatibus.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "site-webdev.png",
        "title" : "Lorem ipsum dolor sit amet consectetur."
      }, {
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga aperiam rerum voluptatem aliquam. Necessitatibus.",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "grooming-maket.png",
        "title" : "Lorem ipsum dolor sit amet consectetur."
      }, {
        "content" : "Когда-то он был таким :)",
        "href" : "https://artemf92.github.io/portfolio/",
        "src" : "site-personal.jpg",
        "title" : "Мой первая версия этого сайта"
      } ],
      "works" : [ {
        "content" : "веб-разработчик",
        "finish" : "",
        "org" : "ИП Ольховик",
        "start" : "Октябрь 2020"
      }, {
        "content" : "контент-менеджмент, верстка",
        "finish" : "Октябрь 2020",
        "org" : "Фрилансер",
        "start" : "Январь 2020"
      }, {
        "content" : "верстка, ведение сайта",
        "finish" : "Октябрь 2020",
        "org" : "ООО \"УК Морской Бизнес Центр\"",
        "start" : "Январь 2017"
      } ]
    },
    "isHome": false,
    "menuHidden": true,
  }
})