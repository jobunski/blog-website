//Get the 'home' page
module.exports.homelist = function (req,res,next) {
res.render('index',{
  title1: 'Bromitzvah',
  pageSection1: {
    title1: 'This Is Important',
    content1: 'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',

    title2 : 'Another one',
    content2 : 'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',

    title3 :'Probably Important',
    content3 : 'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',
  },
  pageSection2 :{
    title1 : 'A gigantic heading you can use for whatever',
    content1 : 'With a much smaller subtitle hanging out just below it',
  },
  posts :[{

      title1:'The First Thing',
      content:'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',
    },{

      title:'The Second Thing',
      content:'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',

    },{

      title:'The Third Thing',
      content:'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',
    },{

      title:'The Fourtht Thing',
      content:'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',

    }]

});
};

//Get 'Location info' page
module.exports.locationInfo = function (req,res,next) {
res.render('tech',{
  title: 'TechNews',
  cotent: 'Sidebar on the right, content on the left.',
  mainPage:{
    title2:'Another Subheading',
    content1: '  Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.Consequat etiam lorem ipsum dolor sit amet nullam.',
    content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus.Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.',
    content3: 'Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enigma.Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.',
  },
  sideBar:{
    title: 'Just a Subheading',
    content1:'Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis et nisi etiam.',
    mainLink:'Continue Reading',
    linkTitle : 'Another Subheading',
    link1: 'Amet turpis, feugiat et sit amet',
    link2: 'Amet turpis, feugiat et sit amet',
    link3: 'Amet turpis, feugiat et sit amet',
    link4: 'Amet turpis, feugiat et sit amet',
    link5: 'Amet turpis, feugiat et sit amet',
    link6: 'More Random Links',

  }

});
};

//Get the 'Add review page'
module.exports.addReview = function (req,res,next) {
res.render('indexma',{title: 'Add Review'});
};
