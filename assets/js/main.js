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
    // 5# FEEDBACK OBJECT-database
    // 6# LEARNING OBJECT-database
    // 7# POPULAR OBJECT-database
    // 8# PICING OBJECT-database
    // 9# SPONSOR OBJECT-database
    // 10# FOOTER OBJECT-database


  },
  methods:{
    ////////////////////////////////////////
    // ????????????????????????????????
    /////////////////////////////////////////////
  },
  mounted(){

  },
});
