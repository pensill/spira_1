jQuery(function($) {

/*SELECT*/
  $('input, select').styler();
/*SELECT END*/

/*SLIDER*/
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
  });

  $('.slider').on('edge', function(event, slick, direction){
    console.log('конец')
  });
/*SLIDER END*/

/*LEFT MENU*/
  $('.left-menu').scroolly([
    {
      from: 'doc-top',
      to: 'doc-top + 730px',
      cssFrom: { position: 'absolute', top:'10px'},
      cssTo: { position: 'fixed', top:'10px'}
    },
    {
      from: 'doc-top + 730px',
      css: { position: 'fixed', top:'10px'}  /*для того чтобы стили подхватывались при перезагрузки страницы с якорем*/
    }
  ]);

  $('.left-menu a[href^="#"]').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
        scrollTop: $(el).offset().top}, 1000);
    return false;
  });
/*LEFT MENU END*/

/*MAPS POPOVER*/
  $('[data-toggle="popover"]').popover({
      placement : 'top'
  });
/*MAPS POPOVER END*/


 
  ymaps.ready(function(){
    var mapSPB = new ymaps.Map('maps-spb', {
        center: [59.93, 30.31],
        zoom: 16
    }, {
          searchControlProvider: 'yandex#search'
      }),
    myPlacemark = new ymaps.Placemark(mapSPB.getCenter(), {
        hintContent: '17 линия В.О. 31, БЦ «Сенатор», офис 73'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/maps.png',
        iconImageSize: [99, 99],
        iconImageOffset: [-200, -100]
    });
    mapSPB.geoObjects.add(myPlacemark);
  });

  ymaps.ready(function(){
    var mapMSK = new ymaps.Map('maps-msk', {
        center: [59.93, 30.31],
        zoom: 16
    }, {
          searchControlProvider: 'yandex#search'
      }),
    myPlacemark = new ymaps.Placemark(mapMSK.getCenter(), {
        hintContent: 'А это Москва'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/maps.png',
        iconImageSize: [99, 99],
        iconImageOffset: [-200, -100]
    });
  });
/*CONTACT MAPS END*/


  

}) /*ready end*/


