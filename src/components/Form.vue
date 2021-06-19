<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-2 col-md-6">
          <AnimItem 
            class="contact__form--social"
            :typeAnim="'_fadeIn'"
            :delay="30">
            <div class="row">
              <div class="col-md-12">
                <a href="https://vk.com/id7001520">
                  <icon-vk 
                    class="social-logo"
                    :size="size"/>
                  <div class="social-name">
                    <a href="#">id7001520</a>
                  </div>
                </a>
              </div>
              
              <div class="col-md-12">
                <a href="https://www.facebook.com/information.sec0">
                  <icon-fb 
                    class="social-logo"
                    :size="size"/>
                  <div class="social-name">
                    <a href="#">XXXXXXXXX</a>
                  </div>
                </a>
              </div>
              
              <div class="col-md-12">
                <a href="https://www.instagram.com/artemf92/">
                  <icon-in 
                    class="social-logo"
                    :size="size"/>
                  <div class="social-name">
                    <a href="#">@artemf92</a>
                  </div>
                </a>
              </div>
              
              <div class="col-md-12">
                <a href="https://t.me/artemf92">
                  <icon-tg 
                    class="social-logo"
                    :size="size"/>
                  <div class="social-name">
                    <a href="#">@artemf92</a>
                  </div>
                </a>
              </div>
              
            </div>
          </AnimItem>
        </div>
        <!-- <AnimItem 
          :typeAnim="'_fadeIn'"
          :delay="27">
          <div class="v-hr"></div>
        </AnimItem> -->
        <div class="col-sm-10 col-md-6">
          <div class="contact__form">
            <form action="javascript:void(0)" ref="form" @submit.prevent="sendForm()">
              <div class="contact__form--input">
                <input 
                  type="text"
                  name="name" 
                  placeholder="Ваше имя *"
                  v-model="name"
                  @blur="$v.name.$touch()"
                  :class="{ 'error' : $v.name.$error }">
                  <div class="error-msg" v-if="$v.name.$error">Это поле должно быть заполнено (мин. 2 символа).</div>
              </div>
              <div class="contact__form--input">
                <input 
                  type="email"
                  name="email"
                  placeholder="Ваш email *"
                  v-model="email"
                  :class="{ 'error' : $v.email.$error } "
                  @blur="$v.email.$touch()">
                  <div class="error-msg" v-if="$v.email.$error">Это поле должно содержать email</div>
              </div>
              <div class="contact__form--input">
                <input 
                  v-model="tel"
                  type="tel" 
                  pattern="+[0-9]{11}" 
                  name="phone" 
                  placeholder="Ваш номер телефона"
                  ref="phone">
              </div>
              <div class="contact__form--input">
                <textarea v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Ваше сообщение"></textarea>
              </div>
              <button 
                type="submit"
                :disabled="$v.$invalid">Отправить</button>
            </form>
          </div>
        </div>
      </div>

      <div class="toast"
            :class="send">
          Ваше сообщение отправлено!
      </div>
    </div>
  </div>
</template>

<script>
import AnimItem from './Animations/AnimItem.vue';
import iconIn from './Icons/inst.vue';
import iconTg from './Icons/tg.vue';
import iconFb from './Icons/fb.vue';
import iconVk from './Icons/vk.vue';
import { required, minLength, email } from 'vuelidate/lib/validators';
import InputMask from 'inputmask';
import querystring from 'querystring'

export default{
  name: 'Form',
  components: {
    AnimItem,
    iconIn,
    iconTg,
    iconFb,
    iconVk,
  },
  data(){
    return{
      send: '',
      size: '50px',
      name: '',
      email: '',
      tel: '',
      message: '',
    }
  },
  methods: {
    sendForm() {
      const data = new FormData();
      data.append('name', this.name);
      data.append('email', this.email);
      if (this.message != '') data.append('message', this.message);
      if (this.tel != '') data.append('tel', this.tel);

      this.$http
            .post('/mail.php', data)
            .then(response => { 
              if(response.status) 
              this.$refs.form.reset();
              return this.send = '_active' ;
            })
            .catch( error => console.log(error));
      this.send = '';
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    }
  },
  mounted() {
    var imPhone = new Inputmask("+7(999) 999-99-99");
    imPhone.mask(this.$refs.phone);
  }
}
</script>

<style lang="scss">
.contact__form {
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  // background-color: red;
  margin: 0 auto;
  &--input {
    margin-bottom: 12px;
    position: relative;
  }
  &--input input,
  &--input textarea {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 5px;
    padding: 5px 10px;
    background-color: #808080;
    border-color: transparent;
    color: white;
  }
  &--input input:active {
    border: none;
  }
  &--input input::placeholder,
  &--input textarea::placeholder {
    color: white;
  }
  &--input textarea {
    height: 150px;
  }
  button {
    background-color: transparent;
    outline: none;
    border: 1px solid #808080;
    color: #808080;
    border-radius: 10px;
    padding: 10px 40px;
    text-transform: uppercase;
    transition: .3s ease-in-out;
  }
  button:hover,
  button:active {
    border-color: transparent;
    color: white;
  }
  &--social {
    // max-height: 120px;
    display: none;

    @media (min-width: 576px) {
      display: block;
    }
  }
  &--social svg {
    fill: white;
    // margin-bottom: 5px;
    width: 20px;
    @media (min-width: 992px) {
      width: 50px;
      margin-bottom: 20px;
    }
  }
}
.social-name a {
  color: black;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  
  font-family: 'Josefin Sans', serif;
  color: white;
  font-size: 16px;
  @media (min-width: 992px) {
    font-size: 30px;
  }
}
.social-name a:hover {
  color: #d3d3d3;
  transition: 0.3s ease-in-out;
  text-decoration: none;;
}
.v-hr {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  height: 300px;
  width: 1px;
  background-color: #fff;
}
.social-name {
  display: none;
  a {
    width: 135px;
  }
  @media (min-width: 768px) {
    display: inline-block;
  } 
}
.social-logo {
  display: inline-block;
}
input.error {
  border: 1px solid red;
}
.error-msg {
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -12px;
  left: 10px;
}
button:disabled {
  cursor:default;
  opacity: 0.3;
}
button:disabled:hover {
  border-color: #808080;
  color: #808080;
}
.toast {
  position: absolute;
  opacity: 0;
  transform: translateX(100%);
  top: 85px;
  padding: 10px;
  color: white;
  background-color: black;
  font-weight: 400;
  right: 0;
}
.toast._active {
  animation: showToast 4s ease-in-out;
}
@keyframes showToast {
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  80% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
  
}
</style>
