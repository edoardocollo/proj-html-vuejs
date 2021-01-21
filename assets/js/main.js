let app = new Vue({
  el:'#app',
  data:{
    carouselCounter: 0,
    carouselCounterFeed: 0,
    carouselCounterCourse: 2,
    // DATABASES
    /////////////////////////////////////////
    // 0# HEADER OBJECT-database
    header:{
      logoImg: 'assets/img/logos/logo-light.png',
      links:['home','courses','insctructors','event','pages','elements'],
      icons:['fas fa-search','far fa-clipboard','fas fa-bars'],
    },
    // 1# JUMBOTRON OBJECT-database
    jumbotron:[
      {
        visible: true,
        title: 'Contemporary Ideas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        button: true,
        buttonText: 'register now',
        img: 'assets/img/people/h5-slide-3-background.jpg',
        id:123
      },
      {
        visible: false,
        title: 'Contemporary Ideas',
        text: 'blablablablabla',
        button: false,
        buttonText: 'register now',
        img: 'assets/img/people/h5-slide-2-background.jpg',
        id:23

      },
      {
        visible: false,
        title: 'Contemporary Ideas',
        text: '',
        button: true,
        buttonText: 'register now',
        img: 'assets/img/people/h5-slide-1-background.jpg',
        id:1234

      }

    ],
    // 2# TOPIC OBJECT-database
    topics:[
      {
        img:'assets/img/icons/h5-custom-icon-1.png',
        text:'Languages',
      },
      {
        img:'assets/img/icons/h5-custom-icon-2.png',
        text:'Software',
      },
      {
        img:'assets/img/icons/h5-custom-icon-3.png',
        text:'Business',
      },
      {
        img:'assets/img/icons/h5-custom-icon-4.png',
        text:'Chemestry',
      },
      {
        img:'assets/img/icons/h5-custom-icon-5.png',
        text:'Science',
      },
      {
        img:'assets/img/icons/h5-custom-icon-6.png',
        text:'DIY&Craft',
      }
    ],
    // 3# TRUSTED OBJECT-database
    trusted:[
      {
        visible: true,
        title:'The Trusted Name for In-Home tutoring.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        link: true,
        linkText: 'learn more',
        img:'assets/img/h5-img-1.jpg',
      }
    ],
    // 4# EMPOWERING OBJECT-database
    empowering:[
      {
        title:'Empowering Children to Reach Thei Potential.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        statistics:[
          {
            value: 168,
            label:'User Stories',
          },
          {
            value: 347,
            label:'Events',
          }
        ],
        img:'assets/img/h5-img-2.jpg',
      },
    ],
    // 5# FEEDBACK OBJECT-database
    feedback:{
      img:'assets/img/h5-parallax-img-1.png',
      feedbacks:[
        {
          visible: true,
          img:'assets/img/people/testimonials-standard-1.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
          name:'Johan Collins',
          job:'student',
          id:12343534

        },
        {
          visible: false,
          img:'assets/img/people/testimonials-standard-2.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
          name:'Johan Collins',
          job:'student',
          id:1238798798
        },
        {
          visible: false,
          img:'assets/img/people/testimonials-standard-3.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
          name:'Johan Collins',
          job:'student',
          id:7867888887
        },
      ],
    },
    // 6# LEARNING OBJECT-database
    learning:[
      {
        visible: true,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:[
          'Lorem ipsum dolor sit amet, consectetur adipisicing ',
          'Lorem ipsum dolor sit amet, ',
          'Lorem ipsum dolor sit amet, consectetur ',
          'Lorem ipsum '
        ],
        buttonName: 'What We Do',
        img:'assets/img/icons/h12-tabs-icon-1.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Degree Programme',
        img:'assets/img/icons/h12-tabs-icon-2.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Career Achievements',
        img:'assets/img/icons/h12-tabs-icon-3.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Personal Management',
        img:'assets/img/icons/h12-tabs-icon-4.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Steps To Success',
        img:'assets/img/icons/h12-tabs-icon-5.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Knowledge Transfer',
        img:'assets/img/icons/h12-tabs-icon-6.png',
      },
    ],
    // 7# POPULAR COURSE OBJECT-database
    courses:[
      {
        visible: true,
        img:'assets/img/course/course-1-f-img.jpg',
        title:'Android Developer',
        teacher:'David Sanders',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
        id:1238678678678
      },
      {
        visible: true,
        img:'assets/img/course/course-2-f-img.jpg',
        title:'Web Designing',
        teacher:'Jennifer Powell',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
        id:12309020302930
      },
      {
        visible: true,
        img:'assets/img/course/course-3-f-img.jpg',
        title:'Financial Modeling',
        teacher:'Edward Bowman',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'blue',
          text: '$20'
        },
        partecipants: 4,
        category:'business',
        id:4095830879878
      },
      {
        visible: false,
        img:'assets/img/course/course-4-f-img.jpg',
        title:'Android Developer',
        teacher:'David Sanders',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
        id:1235464560459960459
      },
      {
        visible: false,
        img:'assets/img/course/course-5-f-img.jpg',
        title:'Web Designing',
        teacher:'Jennifer Powell',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
        id:938429304233498320
      },
      {
        visible: false,
        img:'assets/img/course/course-6-f-img.jpg',
        title:'Financial Modeling',
        teacher:'Edward Bowman',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'blue',
          text: '$20'
        },
        partecipants: 4,
        category:'business',
        id:34853940088988989090
      },
      {
        visible: false,
        img:'assets/img/course/course-7-f-img.jpg',
        title:'Android Developer',
        teacher:'David Sanders',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
        id:324234479267678678786
      },
      {
        visible: false,
        img:'assets/img/course/course-8-f-img.jpg',
        title:'Web Designing',
        teacher:'Jennifer Powell',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
        id:3242344792676786

      },
      {
        visible: false,
        img:'assets/img/course/course-9-f-img.jpg',
        title:'Financial Modeling',
        teacher:'Edward Bowman',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'blue',
          text: '$20'
        },
        partecipants: 4,
        category:'business',
        id:3242344

      }
    ],
    // 8# PICING OBJECT-database
    pricing:{
      prices:[
        {
          active: true,
          type:'Standard',
          price:'$12',
          img:'assets/img/price/h5-custom-icon-7.png',
          courses: 2,
          days: 15,
          services:{
            web: true,
            human: true,
            marketing: false,
            python: false,
            android: false,
            english: false,
          },
        },
        {
          active: false,
          type:'Professional',
          price:'$59',
          img:'assets/img/price/h5-custom-icon-8.png',
          courses: 4,
          days: 30,
          services:{
            web: true,
            human: true,
            marketing: true,
            python: true,
            android: false,
            english: false,
          },
        },
        {
          active: false,
          type:'Advance',
          price:'$88',
          img:'assets/img/price/h5-custom-icon-9.png',
          courses: 6,
          days: 30,
          services:{
            web: true,
            human: true,
            marketing: true,
            python: true,
            android: true,
            english: true,
          },
        }
      ],
      index:[
        'Save up to 40% by paying weekly',
        'Number of Courses',
        'Time',
        'Web Designing',
        'Human-Centered Design',
        'Basic Marketing',
        'Python for Everybody',
        'Android Developer',
        'Business English',
      ]
    },
    // 9# PARTNERS OBJECT-database
    partners:[
      'assets/img/partners/h5-client-5.png',
      'assets/img/partners/h5-client-1.png',
      'assets/img/partners/h5-client-2.png',
      'assets/img/partners/h5-client-1.png',
    ],
    // 10# FOOTER OBJECT-database
    footer:{
      contacts:{
        img:'assets/img/logos/logo-light.png',
        text:'Providing life changing experiences through education. Class that fit your dusy life. Closer to home.',
        phone:'1-677-124-44227',
        opening:'Mon -Sat 8.00-18.00',
      },
      popularCourses:{
        title:'Popular Courses',
        courses:[
          {
            course: 'business english',
            teacher: 'Preston Marshall'
          },
          {
            course: 'social computing',
            teacher: 'Preston Marshall'
          },
          {
            course: 'learn spanish',
            teacher: 'jennie king'
          }
        ],
      },
      supports:{
        title:'supports',
        links:[
          'user dashboard',
          'contact us',
          'FAQ',
          'course offer',
          'events'
        ],
      },
      flexible:{
        title: 'flexible learning',
        img: 'assets/img/footer-img-1.png'
      }
    }


  },
  methods:{
    nextJumbotron: function(i){
      if (app.carouselCounter == app.jumbotron.length - 1) {
        app.jumbotron[app.carouselCounter].visible = false;
        app.jumbotron[0].visible = true;
        app.carouselCounter = 0;

      }else{
        app.jumbotron[app.carouselCounter].visible = false;
        app.carouselCounter++;
        app.jumbotron[app.carouselCounter].visible = true;
      }
    },
    carouselJumbotron: function(){
      jumbotronInterval = setInterval(function () {
        app.nextJumbotron();
      }, 5000);
    },
    stopCarouselJumbotron: function(){
      clearInterval(jumbotronInterval);
    },
    nextFeedback: function(){
      if (app.carouselCounterFeed == app.feedback.feedbacks.length - 1) {
        app.feedback.feedbacks[app.carouselCounterFeed].visible = false;
        app.feedback.feedbacks[0].visible = true;
        app.carouselCounterFeed = 0;

      }else{
        app.feedback.feedbacks[app.carouselCounterFeed].visible = false;
        app.carouselCounterFeed++;
        app.feedback.feedbacks[app.carouselCounterFeed].visible = true;
      }

    },
    carouselFeedback: function(){
      feedbackInterval = setInterval(function () {
        app.nextFeedback();
      }, 5000);
    },
    stopCarouselFeedback: function(){
      clearInterval(feedbackInterval);
    },
    nextCourse: function(){
        app.courses[0].visible = false;
        app.courses.push(app.courses.shift())
        app.courses[2].visible = true;
    },
    carouselCourse: function(){
      courseInterval = setInterval(function () {
        app.nextCourse();
      }, 5000);
    },
    stopCarouselCourse: function(){
      clearInterval(courseInterval);
    },
    toTop: function(){
      let scrollPosition = document.documentElement.scrollTop;
      toTopInterval = setInterval(function () {
        scrollPosition -= 10;
        document.documentElement.scrollTop = scrollPosition;
        console.log(scrollPosition);
        if (scrollPosition <= 0) {
          clearInterval(toTopInterval);
        }
      }, 10);

    },
    selectLearning: function(index){
      app.learning.forEach(e=>{
        e.visible = false;
      });
      app.learning[index].visible = true;
    },
    goTo: function(index, array){
      array.forEach(e=>{
        e.visible = false;
      });
      array[index].visible = true;
    },
    ////////////////////////////////////////
    // ????????????????????????????????
    /////////////////////////////////////////////
  },
  mounted(){
    this.carouselJumbotron();
    this.carouselFeedback();
    this.carouselCourse();

  },
});
gsap.to('header',{
  scrollTrigger:{
    trigger:'.header',
    toggleActions: 'restart none reverse none',
    start: '60px 0',
    end:'60px 0',
  },
  backgroundColor: '#40c4ff',
  height: '60px',

});
gsap.from('.topic_card',{
  y:-200,
  duration:3
});
gsap.from('.trusted_title',{
  scrollTrigger:{
    trigger:'.trusted_title',
    toggleActions: 'restart none reverse none',
    start: '0 50%',
    end:'0 50%',
    toggleActions: 'restart none reverse none'
  },
  x: -2000,
  duration: 2.5
});
gsap.from('.trusted_text',{
  scrollTrigger:{
    trigger:'.trusted_text',
    start: '0 50%',
    end:'0 50%',
    toggleActions: 'restart none reverse none'
  },
  x: 2000,
  delay: .5,
  duration: 2.5
});
gsap.from('.trusted_button',{
  scrollTrigger:{
    trigger:'.trusted_button',
    start: '0 50%',
    end:'0 50%',
    toggleActions: 'restart none reverse none'
  },
  opacity: 0,
  delay: 2.5,
  duration: 3
});
gsap.from('.trusted_img',{
  scrollTrigger:{
    trigger:'.trusted_img',
    start: '-1000px 50%',
    end:'-1000px 50%',
    toggleActions: 'restart none reverse none'
  },
  x: 2000,
  y:1000,
  opacity: 0,
  duration: 2.5
});
gsap.from('.empowering_img',{
  scrollTrigger:{
    trigger:'.empowering_img',
    toggleActions: 'restart none reverse none',
    start: '-1200px 50%',
    end:'-1200px 50%'
  },
  y: 1000,
  duration: 2.5
});
gsap.from('.empowering_content',{
  scrollTrigger:{
    trigger:'.empowering_content',
    toggleActions: 'restart none reverse none',
    toggleActions: 'restart none reverse none',
    start: '100px 50%',
    end:'100px 50%'

  },
  x: 2000,
  duration: 2.5
});
gsap.from('.feedback_img',{
  scrollTrigger:{
    trigger:'.feedback_img',
    toggleActions: 'restart none reverse none',
  },
  height: 0,
  duration: 2.5
});
gsap.from('.feedback_text',{
  scrollTrigger:{
    trigger:'.feedback_text',
    toggleActions: 'restart none none none'
  },
  opacity: 0,
  duration: 3
});
gsap.from('.feedback_name',{
  scrollTrigger:{
    trigger:'.feedback_name',
    toggleActions: 'restart none none none'
  },
  opacity: 0,
  duration: 3,
  delay: .5
});
gsap.from('.feedback_job',{
  scrollTrigger:{
    trigger:'.feedback_job',
    toggleActions: 'restart none none none'
  },
  opacity: 0,
  duration: 3,
  delay: 1,
});
gsap.from('.learning_img',{
  scrollTrigger:{
    trigger:'.learning_img',
    toggleActions: 'restart none reverse none',
    start: '-200px 50%',
    end:'-200px 50%'

  },
  x: 1000,
  duration: 3
});
gsap.from('.price_column',{
  scrollTrigger:{
    trigger:'.price_column',
    toggleActions: 'restart none reverse none',
    start: '100px 50%',
    end:'100px 50%'
  },
  x:1500,
  rotationY: 360,
  duration: 3
});
gsap.from('#partners_wrap',{
  scrollTrigger:{
    trigger:'.partners_wrap',
    toggleActions: 'restart none reverse none',
    start: '5700 50%',
    end:'5700 50%'
  },
  y: 300,
  duration: 3
});
