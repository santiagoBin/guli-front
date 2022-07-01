<template>
  <div>
<!--     幻灯片 开始 -->
    <div  v-swiper:mySwiper="swiperOption" v-if="bannerList.length>0">
      <div class="swiper-wrapper" >
        <div class="swiper-slide " style="background: #040B1B;" v-for="banner in bannerList" :key="banner.id" >
          <a target="_blank " >
            <img :src="banner.imageUrl" :alt="banner.title" :href="banner.linkUrl" >
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
    <!-- 幻灯片 结束 -->
    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="(course, index) in courseList" v-bind:key="index">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        class="img-responsive"
                        :alt="course.title"
                      >
                      <div class="cc-mask">
                        <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始
                          学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a href="#" :title="course.title" class="course-title fsize18 c333">{{course.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
<span class="fr jgTag bg-green" v-if="Number(course.price) ===0">
<i class="c-fff fsize12 f-fA">免费</i>
</span>
                      <span class="fr jgTag bg-green" v-else>
<i class="c-fff fsize12 f-fA"> ￥{{course.price}}</i>
</span>
                      <span class="fl jgAttr c-ccc f-fA" >
<i class="c-999 f-fA">{{course.buyCount}} 人学习</i>
 |
<i class="c-999 f-fA">{{course.viewCount}}人评论</i>
</span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="(teacher,index) in teacherList" v-bind:key="index">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href='"/teacher/"+teacher.id' :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href='"/teacher/"+teacher.id' :title="teacher.name" class="fsize18 c-666">{{teacher.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{teacher.intro}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p
                        class="c-999 f-fA"
                      >{{teacher.career}}</p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import banner from "@/api/banner";
import index from "@/api/index"
export default {

  data () {
    return {
      swiperOption: {
//配置分页
        pagination: {
          el: '.swiper-pagination', //分页的dom节点
        },
        loop:true,
        freeMode : true, //根据惯性滑动可能不止一格且不会贴合
        observer : true, //修改swiper自己或子元素时，自动初始化swiper
        speed : 1000, //速度
        autoPlay: {
          delay:0,
          disableOnInteraction : false //用户操作swiper之后，是否禁止autoplay
        },
        autoplay:true,
        autoplayDisableOnInteraction : false,
        noSwiping : true, //设为true时，可以在slide上（或其他元素）增加类名'swiper-no-swiping'，使该slide无法拖动
        autoHeight : true, //自动高度


//配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev',//前一页dom节点
        }
      },
      teacherList: {},
      courseList: {},
      bannerList: []
    }
  },
  created() {
    this.initDataBanner()
    this.initDataObj()
  },
  methods:{
    initDataBanner() {
      banner.getList().then(response => {
        this.bannerList = response.data.data.indexBannerList
      })
    },
    initDataObj() {
      index.getList().then(response => {
        this.teacherList = response.data.data.teacherList
        this.courseList = response.data.data.courseList
      })
    }
  }
}
</script>

<style>

</style>

