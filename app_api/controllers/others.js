// Gets the 'about' page
module.exports.about = function (req,res) {
  res.render('about',{
    title1 :'About loc8r',
    content1 :'All content, all the time.',
    content2 :"Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.Consequat etiam lorem ipsum dolor sit amet nullam.",
    title2 :'And Yet Another Subheading' ,
    content3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus,at tempus justo.Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.',
    content4 :'  Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enigma.Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.',});
};
