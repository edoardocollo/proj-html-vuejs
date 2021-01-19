let app = new Vue({
  el:'#app',
  data:{
    // DATABASES
    /////////////////////////////////////////
    // 0# HEADER OBJECT-database
    header:{
      logoImg: 'assets/img/logos/logo-light.png',
      links:['home','courses','insctructors','event','pages','elements'],
      icons:['fas fa-search','far fa-clipboard','fas fa-bars'],
    },
    // 1# JUMBOTRON OBJECT-database
    jumbotron:{
      slide1:{
        visible: true,
        title: 'Contemporary Ideas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        button: true,
        buttonText: 'register now',
        img: 'assets/img/people/h5-slide-3-background.jpg',
      },
      slide2:{
        visible: false,
        title: 'Contemporary Ideas',
        text: 'blablablablabla',
        button: true,
        buttonText: 'register now',
        img: 'assets/img/people/h5-slide-3-background.jpg',
      },
      slide3:{
        visible: false,
        title: 'Contemporary Ideas',
        text: 'blablablablabla',
        button: true,
        buttonText: 'register now',
        img: 'assets/img/people/h5-slide-3-background.jpg',
      },

    },
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
        },
        {
          visible: false,
          img:'assets/img/people/testimonials-standard-2.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
          name:'Johan Collins',
          job:'student',
        },
        {
          visible: false,
          img:'assets/img/people/testimonials-standard-3.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
          name:'Johan Collins',
          job:'student',
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
        tipsItem:['lorem','lorem','lorem','lorem'],
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
        img:'assets/img/icons/h12-tabs-icon-1.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Career Achievements',
        img:'assets/img/icons/h12-tabs-icon-1.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Personal Management',
        img:'assets/img/icons/h12-tabs-icon-1.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Steps To Success',
        img:'assets/img/icons/h12-tabs-icon-1.png',
      },
      {
        visible: false,
        title:'Learning Possibilities',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        tips: true,
        tipsItem:['lorem','lorem','lorem','lorem'],
        buttonName: 'Knowledge Transfer',
        img:'assets/img/icons/h12-tabs-icon-1.png',
      },
    ],
    // 7# POPULAR COURSE OBJECT-database
    courses:[
      {
        img:'assets/img/course/course-5-f-img.jpg',
        title:'Android Developer',
        teacher:'David Sanders',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
      },
      {
        img:'assets/img/course/course-6-f-img.jpg',
        title:'Web Designing',
        teacher:'Jennifer Powell',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'yellow',
          text: 'free'
        },
        partecipants: 1,
        category:'programming',
      },
      {
        img:'assets/img/course/course-12-f-img.jpg',
        title:'Financial Modeling',
        teacher:'Edward Bowman',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste expedita corporis excepturi exercitationem aliquam mollitia? Vel incidunt tenetur magnam natus doloremque iusto labore inventore illum modi, quis officia quibusdam quidem.',
        badge:{
          color: 'blue',
          text: '$20'
        },
        partecipants: 4,
        category:'business',
      },
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
    ////////////////////////////////////////
    // ????????????????????????????????
    /////////////////////////////////////////////
  },
  mounted(){

  },
});
