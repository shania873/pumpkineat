/*!
 * pumpkin
 * 
 * 
 * @author Caroline van Aerschot
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
(function ($, window, document, boostrap) {
  "use strict";

  function posts() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var DBPosts = JSON.parse(this.response);
        var childrenPosts = document.querySelector(".posts-instagramLatestWorks").children.length;


        document.getElementById("img1").style.backgroundImage = "url(" + DBPosts.posts[0].img + ")";
        document.getElementById("img2").style.backgroundImage = "url(" + DBPosts.posts[1].img + ")";
        document.getElementById("img3").style.backgroundImage = "url(" + DBPosts.posts[2].img + ")";


        document.getElementById("title1").innerText = DBPosts.posts[0].Titre;
        document.getElementById("title2").innerText = DBPosts.posts[1].Titre;
        document.getElementById("title3").innerText = DBPosts.posts[2].Titre;

        document.getElementById("footer-title1").innerText = DBPosts.posts[0].Titre;
        document.getElementById("footer-title2").innerText = DBPosts.posts[1].Titre;
        document.getElementById("footer-title3").innerText = DBPosts.posts[2].Titre;

        document.getElementsByTagName("a")[7].setAttribute("href", DBPosts.posts[0].url);
        document.getElementsByTagName("a")[8].setAttribute("href", DBPosts.posts[1].url);
        document.getElementsByTagName("a")[9].setAttribute("href", DBPosts.posts[2].url);

        document.getElementById("link-footer1").setAttribute("href", DBPosts.posts[0].url);
        document.getElementById("link-footer2").setAttribute("href", DBPosts.posts[0].url);
        document.getElementById("link-footer3").setAttribute("href", DBPosts.posts[0].url);

        document.getElementById("p-footer1").innerText = DBPosts.posts[0].Description_Recette;
        document.getElementById("p-footer2").innerText = DBPosts.posts[1].Description_Recette;
        document.getElementById("p-footer3").innerText = DBPosts.posts[2].Description_Recette;
      }
    };
    xmlhttp.open("GET", "http://carolinevanaerschot.be/pumpkineat/assets/json/posts.json", true);
    xmlhttp.send();

  }

  function formContact() {
    var nom = document.getElementById("nom");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var msg = document.getElementById("message");
    var btn = document.getElementById("envoyer");
    var form = document.getElementById('form');
    var oOutput = document.getElementById("output");
    var oData = new FormData(form);

    btn.addEventListener("click", function loadDoc(ev) {   
      console.log(email.value);

      if (!email.checkValidity()) {
        email.style.border = "solid 3px #ad0000";
        oOutput.innerHTML = "Votre e-mail est requis";
      } else {
        oOutput.innerHTML = "";
        email.setCustomValidity("");
        var oReq = new XMLHttpRequest();
        oReq.open("POST", "http://carolinevanaerschot.be/pumpkineat/assets/php/contact.php", true);
        email.style.border = "solid 0px #ad0000";
        var oData = new FormData(form);
        oReq.onload = function (oEvent) {
          if (oReq.status == 200) {
            oOutput.innerHTML = oReq.response;
            console.log(oReq);
          } else {
            oOutput.innerHTML = oReq;
          }
        };
        console.log(oData);
        oReq.send(oData);
        ev.preventDefault();
      }
    });
  }




  function mapbox() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbmlhODczIiwiYSI6ImNqbGFqdmh6MjA2eTEzcW1lM3FmZWd4dnEifQ.Iaci52-nPZH_Sx_rIl15Fg';

    var monument = [4.351697, 50.8465573];
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/shania873/ck1wjqgk30lwm1cnx53rjvgt4',
      center: [4.218656, 50.834322],
      zoom: 10
    });

    console.log(map);
    var popup = new mapboxgl.Popup({
        closeOnClick: false,
        maxWidth: "300px",
        offsetX: 11150
      })
      .setLngLat(monument)
      .setHTML("<h1 class='title-popup'>Ouvert</h1><h2> 7 JOURS SUR 7</h2><p style='font-size: 15px;'>Le restaurant et situé au Rue du Marché aux Fromages 15, 1000 Bruxelles. Ouvert tous les jours</p>")
      .remove(true)
      .addTo(map);

    popup.__proto__.isOpen(true);



    var el = document.createElement('div');
    el.id = 'marker';


    new mapboxgl.Marker(el).setLngLat(monument).addTo(map);
    map.scrollZoom.disable();
  }

  function init() {
    mapbox();
    formContact();
    posts();
    scrollreveal();
  }

  function scrollreveal() {

    window.sr = ScrollReveal({
      reset: true
    }); 

    sr.reveal('.foo-2', {
      origin: 'right',
      duration: 2000
    });

    sr.reveal('.img-logo', {
      origin: 'bottom',
      distance: '100px',
      opacity: 0,
      duration:2000

    });

    sr.reveal('.img-sectionintro', {
   
      origin: 'left',
      distance: '100px',
      opacity: 0,
      duration:2000

    });
    sr.reveal('.ourstory-text', {
      origin: 'right',
      distance: '100px',
      opacity: 0,
      duration:2000

    });

    sr.reveal('.waste-column1', {
      origin: 'left',
      distance: '100px',
      opacity: 0,
      duration:2000

    });
    sr.reveal('.waste-column2', {
      origin: 'right',
      distance: '100px',
      opacity: 0,
      duration:2000

    });
    sr.reveal('.homework-step1', {
      origin: 'left',
      distance: '100px',
      opacity: 0,
      duration:2000
    });
    sr.reveal('.homework-step2', {
      origin: 'left',
      distance: '200px',
      opacity: 0,
      duration:2500
    });
    sr.reveal('.homework-step3', {
      origin: 'left',
      distance: '300px',
      opacity: 0,
      duration:3000
    });

    sr.reveal('.instagramLatestWorks-Post1', {    
      opacity: 0,
      duration:3000
    });
    sr.reveal('.instagramLatestWorks-Post2', {    
      opacity: 0,
      duration:3000
    });
    sr.reveal('.instagramLatestWorks-Post3', { 
      opacity: 0,
      duration:3000
    });

    sr.reveal('.contact-column1', { 
      origin: 'left',
      distance: '300px',
      opacity: 0,
      duration:3000
    });
    sr.reveal('.contact-column2', { 
      origin: 'right',
      distance: '300px',
      opacity: 0,
      duration:3000
    });
  }

  $(function () {
    $(function () {
      $('.nav-link').on('click', function () {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate({
          scrollTop: $(page).offset().top
        }, speed);
        return false;

      });
      $('.scrollup').on('click', function () {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate({
          scrollTop: $(page).offset().top
        }, speed);
        return false;

      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
          $('.scrollup').fadeIn();
          console.log("ok");
        } else {
          $('.scrollup').fadeOut();
          console.log("nook");
        }
      });

    });
  });

  init();

})(jQuery, window, document, bootstrap);