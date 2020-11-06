// src/styles/global-styles.ts
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .logo {
    width: 70px;
    height: auto;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
  /*------------------------------------------------------------------
Project:    IdeaPress
Version:    1.3
Last change:    08/05/2018
Assigned to:    Andrew Noah
Primary use:    ThemeDunk 
-------------------------------------------------------------------*/

@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700&amp;subset=latin-ext');
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css");
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.transitions.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/magicsuggest/2.1.4/magicsuggest-min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.4/quill.bubble.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.4/quill.core.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.4/quill.snow.css"); */

/*------------------------------------------------------------------
[Table of contents]


1. Body
  1.1 Normalize CSS
2. Header / #header
3. Main / #main
    3.1. Layout three / #layout-three
    3.2. Blogs / #blogs
    3.3. Blog Details / #blog-details
    3.4. 404 / #404
    3.5. About us / #about-us
    3.6. Contact us / #contact-us
    3.7. Login / #login
    3.8. Shop Cart / #shop-cart
    3.9. Shop / #shop
    3.10. Coming soon / #coming-soon
    3.11. Campaign Details / #campaign-details
    3.12. Home V2 / #home-v2
    3.13. Explore Layout One / #explore-layout-one
    3.14. Explore Layout Two / #explore-layout-two
    3.15. FAQ / #faq
    3.16. Account / #account
    3.17. Create A Campaign
4. Footer / #footer
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
1. Body
  1.1 Normalize CSS
  normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css
-------------------------------------------------------------------*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}
body {
  font-size: 14px;
  color: #555555;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  color: #222222;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h5 {
  font-size: 14px;
}
h6 {
  font-size: 12px;
}
img {
  border: none;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
a {
  color: #222222;
  display: block;
}
a:hover {
  color: #00a6eb;
  text-decoration: none;
}
a:focus {
  text-decoration: none;
  color: inherit;
  outline: none;
  outline-offset: initial;
  box-shadow: initial;
  border: 0;
}
a,
button,
input {
  transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
}
input[type='text'],
input[type='email'],
input[type='password'],
input[type='number'],
input[type='search'],
textarea {
  border: 1px solid #ededed;
  padding: 8px 15px;
  font-size: 14px;
  color: #222222;
  font-style: italic;
  border-radius: 0;
}
button,
input[type='text']:focus,
input[type='email']:focus,
input[type='password']:focus,
input[type='number']:focus,
input[type='search']:focus,
input[type='checkbox']:focus,
textarea:focus {
  border-color: #00a6eb;
  outline: none;
  outline-offset: 0;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  border-color: #fcd998;
}
.section {
  padding-top: 120px;
}
.rating { 
  border: none;
  float: left;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
  color: #ddd; 
 float: right; 
}

/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 
.btn-primary {
  background-color: #00a6eb;
  padding: 0 20px;
  border-radius: 2px 2px 2px 2px;
  -moz-border-radius: 2px 2px 2px 2px;
  -webkit-border-radius: 2px 2px 2px 2px;
  height: 46px;
  line-height: 46px;
  border: none;
  display: inline-block;
}
.btn-secondary {
  color: #fff;
  border: 2px solid #fff;
  padding: 0 20px;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  height: 46px;
  line-height: 42px;
  display: inline-block;
  margin-right: 17px;
  background-color: initial;
}
.btn-secondary:hover {
  background-color: #0094d2;
  border-color: #0094d2;
  color: #fff;
}
.btn-primary:hover {
  background: #08aded;
  background-color: #0094d2;
}
.title {
  text-align: center;
  font-size: 26px;
  margin-bottom: 15px;
}
.description {
  text-align: center;
  margin-bottom: 45px;
}
.campaign-tabs .tabs {
  display: none;
}
.campaign-tabs .active {
  display: block;
}
.c-hamburger {
  display: none;
  position: absolute;
  top: 20px;
  right: 142px;
  overflow: hidden;
  margin: 1px 0 0 0;
  padding: 0;
  width: 38px;
  height: 38px;
  font-size: 0;
  text-indent: -9999px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}
.c-hamburger:focus {
  outline: none;
}
.c-hamburger span {
  display: block;
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  height: 1px;
  background: #000;
}
.c-hamburger span::before,
.c-hamburger span::after {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
  content: '';
}
.c-hamburger span::before {
  top: -6px;
}
.c-hamburger span::after {
  bottom: -6px;
}
.c-hamburger--htx {
  background-color: initial;
}
.c-hamburger--htx span {
  transition: background 0s 0.3s;
}
.c-hamburger--htx span::before,
.c-hamburger--htx span::after {
  transition-duration: 0.3s, 0.3s;
  transition-delay: 0.3s, 0s;
}
.c-hamburger--htx span::before {
  transition-property: top, transform;
}
.c-hamburger--htx span::after {
  transition-property: bottom, transform;
}
.c-hamburger--htx.is-active {
  background-color: initial;
}
.c-hamburger--htx.is-active span {
  background: none;
}
.c-hamburger--htx.is-active span::before {
  top: 0;
  transform: rotate(45deg);
}
.c-hamburger--htx.is-active span::after {
  bottom: 0;
  transform: rotate(-45deg);
}
.c-hamburger--htx.is-active span::before,
.c-hamburger--htx.is-active span::after {
  transition-delay: 0s, 0.3s;
}
.container:after {
  clear: both;
  content: '';
  display: block;
}
@keyframes preload-show-1 {
  from {
    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-hide-1 {
  to {
    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-cycle-1 {
  5% {
    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  10%,
  75% {
    transform: rotateZ(60deg) rotateY(0) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  80%,
  100% {
    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-show-2 {
  from {
    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-hide-2 {
  to {
    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-cycle-2 {
  10% {
    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  15%,
  70% {
    transform: rotateZ(120deg) rotateY(0) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  75%,
  100% {
    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-show-3 {
  from {
    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-hide-3 {
  to {
    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-cycle-3 {
  15% {
    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  20%,
  65% {
    transform: rotateZ(180deg) rotateY(0) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  70%,
  100% {
    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-show-4 {
  from {
    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-hide-4 {
  to {
    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-cycle-4 {
  20% {
    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  25%,
  60% {
    transform: rotateZ(240deg) rotateY(0) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  65%,
  100% {
    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-show-5 {
  from {
    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-hide-5 {
  to {
    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-cycle-5 {
  25% {
    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  30%,
  55% {
    transform: rotateZ(300deg) rotateY(0) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  60%,
  100% {
    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-show-6 {
  from {
    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-hide-6 {
  to {
    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-cycle-6 {
  30% {
    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  35%,
  50% {
    transform: rotateZ(360deg) rotateY(0) rotateX(0deg);
    border-left-color: #00a6eb;
  }
  55%,
  100% {
    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #00a6eb;
  }
}

@keyframes preload-flip {
  0% {
    transform: rotateY(0deg) rotateZ(-60deg);
  }
  100% {
    transform: rotateY(360deg) rotateZ(-60deg);
  }
}

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  display: block;
  width: 3.75em;
  height: 4.25em;
  margin-left: -1.875em;
  margin-top: -2.125em;
  transform-origin: center center;
  transform: rotateY(180deg) rotateZ(-60deg);
}

.preloader .slice {
  border-top: 1.125em solid transparent;
  border-right: none;
  border-bottom: 1em solid transparent;
  border-left: 1.875em solid #00a6eb;
  position: absolute;
  top: 0px;
  left: 50%;
  transform-origin: left bottom;
  border-radius: 3px 3px 0 0;
}

.preloader .slice:nth-child(1) {
  transform: rotateZ(60deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.82s preload-hide-1 both 1;
}

.preloader .slice:nth-child(2) {
  transform: rotateZ(120deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.74s preload-hide-2 both 1;
}

.preloader .slice:nth-child(3) {
  transform: rotateZ(180deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.66s preload-hide-3 both 1;
}

.preloader .slice:nth-child(4) {
  transform: rotateZ(240deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.58s preload-hide-4 both 1;
}

.preloader .slice:nth-child(5) {
  transform: rotateZ(300deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.5s preload-hide-5 both 1;
}

.preloader .slice:nth-child(6) {
  transform: rotateZ(360deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.42s preload-hide-6 both 1;
}

.preloader.loading {
  animation: 2s preload-flip steps(2) infinite both;
}

.preloader.loading .slice:nth-child(1) {
  transform: rotateZ(60deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-1 linear infinite both;
}

.preloader.loading .slice:nth-child(2) {
  transform: rotateZ(120deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-2 linear infinite both;
}

.preloader.loading .slice:nth-child(3) {
  transform: rotateZ(180deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-3 linear infinite both;
}

.preloader.loading .slice:nth-child(4) {
  transform: rotateZ(240deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-4 linear infinite both;
}

.preloader.loading .slice:nth-child(5) {
  transform: rotateZ(300deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-5 linear infinite both;
}

.preloader.loading .slice:nth-child(6) {
  transform: rotateZ(360deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-6 linear infinite both;
}

.preloading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9999999;
}
.preloader {
  z-index: 9999998;
}
/*------------------------------------------------------------------
2. Header / #header
-------------------------------------------------------------------*/
.top-header {
  padding: 12px 0;
  background-color: #f9fbfb;
}
ul.socials-top {
  float: left;
}
.top-header .phone {
  float: right;
  color: #6a6a6a;
}
ul.socials-top li {
  list-style: none;
  display: inline-block;
  margin-right: 12px;
}
ul.socials-top li:last-child {
  margin-right: 0;
}
ul.socials-top li i {
  color: #6a6a6a;
}
ul.socials-top li:hover i {
  color: #00a6eb;
}
.site-header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 99;
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}
.site-header .container {
  position: relative;
}
.site-header .site-brand {
  float: left;
  line-height: 80px;
}
.site-header .right-header {
  display: flex;
  float: right;
}
.site-header .login .btn-primary {
  height: 38px;
  line-height: 38px;
}
.login-logout {
  display: flex!important;
  align-items: center;
}
.login-username {
  cursor: pointer;
}
.login-logout button {
  margin-left: 20px;
}
.site-header .login,
.site-header .search-icon,
.site-header .main-menu {
  display: inline-block;
  margin-left: 45px;
  line-height: 80px;
}
.site-header .main-menu,
.site-header .main-menu li:first-child {
  margin-left: 0px;
}
.site-header .login a {
  display: inline-block;
}
.site-header .search-icon a {
  font-size: 18px;
  line-height: normal;
  display: inline-block;
  vertical-align: middle;
  padding: 0 5px;
}
.form-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  display: none;
}
.search-icon form {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  max-width: 960px;
  margin: 0 auto;
  line-height: 60px;
  border-radius: 3px;
  overflow: hidden;
  z-index: 9999;
  display: none;
  padding: 0 15px;
}
.search-icon form input {
  width: 100%;
  padding: 0 73px 0 15px;
  line-height: 60px;
  border: 0;
  border-radius: 3px;
  overflow: hidden;
}
.search-icon form button {
  position: absolute;
  top: 0;
  right: 15px;
  bottom: 0;
  border: 0;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 3px;
  overflow: hidden;
}
.search-icon form button span {
  height: 24px;
  width: 24px;
  vertical-align: -6px;
}
.main-menu ul {
  letter-spacing: -0.3em;
}
.main-menu ul li {
  list-style: none;
  display: inline-block;
  letter-spacing: normal;
  margin-left: 35px;
  position: relative;
}
.main-menu ul li i {
  display: none;
}
.main-menu ul li > .sub-menu {
  position: absolute;
  top: 100px;
  z-index: 99;
  width: 200px;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;
}
.main-menu ul li:hover > .sub-menu {
  top: 80px;
  visibility: visible;
  opacity: 1;
}
.main-menu ul li > .sub-menu li {
  line-height: normal;
  display: block;
  margin: 0;
  border-top: 1px solid #ededed;
}
.main-menu ul li > .sub-menu li a {
  padding: 12px 15px;
}
.main-menu ul li a {
  color: #20222b;
}
.main-menu ul li:hover > a {
  color: #00a6eb;
}
/*------------------------------------------------------------------
3. Main / #main
-------------------------------------------------------------------*/
.home .site-main {
  padding-bottom: 0px;
}
.site-main {
  padding-bottom: 120px;
}
.site-main .sideshow {
  position: relative;
  height: 674px;
  background-image: url('src/images/placeholder/1920x680.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.site-main .sideshow:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.sideshow .sideshow-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 570px;
}
.sideshow-content .button a {
  font-weight: 500;
}
.sideshow-content h1 {
  font-size: 46px;
  color: #fff;
  margin-bottom: 25px;
}
.sideshow-content .sideshow-description {
  color: #fff;
  margin-bottom: 30px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.process-model li::after {
  background: #e5e5e5 none repeat scroll 0 0;
  bottom: 0;
  content: '';
  display: block;
  height: 3px;
  margin: 0 auto;
  position: absolute;
  right: -50px;
  top: 50px;
  width: 100%;
  z-index: -1;
  transition: all 0.3s;
}
.process-model li:nth-last-child(2):after,
.process-model li:first-child::after {
  content: '';
  display: none;
}
.process-model li.visited::after {
  background: #08aded;
  transition: all 0.3s;
}
.process .raised {
  width: 100%;
  height: 10px;
  background: #fff;
  border-radius: 25px;
  position: relative;
  margin-bottom: 15px;
  overflow: hidden;
}
.process .raised span {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 25px;
  width: 40%;
  background-color: #00a6eb;
  display: block;
  -webkit-border-top-right-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topright: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-left-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomleft: 25px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #00a6eb;
}
.process .raised span:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: -webkit-gradient(
    linear,
    0 0,
    100% 100%,
    color-stop(0.25, #00a6eb),
    color-stop(0.25, transparent),
    color-stop(0.5, transparent),
    color-stop(0.5, #00a6eb),
    color-stop(0.75, #00a6eb),
    color-stop(0.75, transparent),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    #0799d7 25%,
    transparent 25%,
    transparent 50%,
    #0799d7 50%,
    #0799d7 75%,
    transparent 75%,
    transparent
  );
  background-image: -moz-linear-gradient(
    -45deg,
    #0799d7 25%,
    transparent 25%,
    transparent 50%,
    #0799d7 50%,
    #0799d7 75%,
    transparent 75%,
    transparent
  );
  background-image: -ms-linear-gradient(
    -45deg,
    #0799d7 25%,
    transparent 25%,
    transparent 50%,
    #0799d7 50%,
    #0799d7 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    -45deg,
    #0799d7 25%,
    transparent 25%,
    transparent 50%,
    #0799d7 50%,
    #0799d7 75%,
    transparent 75%,
    transparent
  );
  z-index: 1;
  -webkit-background-size: 20px 20px;
  -moz-background-size: 20px 20px;
  background-size: 20px 20px;
  -webkit-animation: move 2s linear infinite;
  -webkit-border-top-right-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topright: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-left-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomleft: 25px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: hidden;
}
@-webkit-keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 30px 30px;
  }
}
@-moz-keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 30px 30px;
  }
}
.process .process-info {
  letter-spacing: -0.3em;
  margin-bottom: 35px;
}
.process .process-info div {
  color: #fff;
  display: inline-block;
  width: auto;
  letter-spacing: normal;
}
.process .process-info div:last-child span {
  margin-right: 0px;
}
.process .process-info span {
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-right: 80px;
}
.project-love .process-info span {
  font-size: 16px;
  margin-right: 80px !important;
}
.campaign {
  padding-top: 120px;
}
.campaign-item {
  background: #f5f6f6;
  border-radius: 2px 2px 2px 2px;
  -moz-border-radius: 2px 2px 2px 2px;
  -webkit-border-radius: 2px 2px 2px 2px;
}
.campaign-item a.overlay,
.post a.overlay {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  background-color: #00a6eb;
}
.campaign-item a.overlay *,
.featured-places-item a.featured-places-image *,
.post a.overlay * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.campaign-item a.overlay i,
.post a.overlay i {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  font-size: 28px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  -webkit-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
  transition: all 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  color: #00a6eb;
  text-align: center;
}
.campaign-item a.overlay:hover i,
.post a.overlay:hover i {
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
  transition: all 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.campaign-item a.overlay:hover img,
.post a.overlay:hover img {
  opacity: 0.3;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.campaign-item .campaign-box {
  padding: 16px 25px 21px;
}
.campaign-box .raised {
  height: 6px;
  background-color: #ededed;
}
.campaign-box a.category {
  font-size: 12px;
  color: #555;
  margin-bottom: 8px;
  display: inline-block;
}
.campaign-box a.category:hover {
  color: #00a6eb;
}
.campaign-box h3 {
  margin-bottom: 15px;
  height: 20px;
  overflow: hidden;
}
.campaign-box h3 a {
  display: inline-block;
}
.campaign-box .campaign-description {
  margin-bottom: 13px;
  word-break: break-word;
  overflow: hidden;
  white-space: normal;
  height: 4.5em;
  line-height: 1.5;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.campaign-box .author-icon {
  margin-right: 10px;
}
.campaign-box .author-icon img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: inline-block;
}
.campaign-box .campaign-author {
  margin-bottom: 20px;
}
.campaign-box .campaign-author a {
  display: inline-block;
  color: #555555;
}
.campaign-box .campaign-author a:hover {
  color: #00a6eb;
}
.campaign-box .process-info {
  margin-bottom: 0px;
}
.campaign-box .process-info div {
  color: #555555;
  font-size: 12px;
}
.campaign-content .campaign-box .process .process-info span {
  font-size: 14px;
  font-weight: 500;
  margin-right: 65px !important;
}
.campaign-box div:last-child span {
  margin-right: 0px;
}
.explore {
  padding-top: 120px;
}
.explore-item {
  position: relative;
}
.explore-item a:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.explore-item span {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  z-index: 1;
}
.explore-item {
  margin-bottom: 30px;
  border-radius: 3px;
  overflow: hidden;
}
.staff-picks {
  padding-top: 90px;
}
.project-love {
  padding-top: 120px;
}
.project-love .bx-wrapper {
  box-shadow: none;
  border: 0;
  margin-bottom: 0;
}
.project-love .content-tab .active {
  display: block;
}
ul.menu-category {
  border-left: 1px solid #ededed;
  padding: 10px 0;
}
ul.menu-category li {
  list-style: none;
  padding: 0 30px;
  margin-bottom: 10px;
  position: relative;
}
ul.menu-category li a {
  font-weight: 500;
}
ul.menu-category li.active:before {
  height: 15px;
  width: 15px;
  display: block;
  content: '';
  position: absolute;
  left: -8px;
  top: 2px;
  background-color: #00a6eb;
  border-radius: 50%;
  z-index: 9;
}
ul.menu-category li.active:after {
  content: '';
  position: absolute;
  top: 9px;
  left: 0;
  width: 20px;
  height: 1px;
  background-color: #ededed;
}
.tab-row ul.menu-category {
  padding: 0;
  border: 0;
  text-align: center;
  letter-spacing: -0.3em;
}
.tab-row ul.menu-category li {
  display: inline-block;
  margin: 0;
  padding: 0;
  letter-spacing: normal;
}
.tab-row ul.menu-category li a {
  padding: 10px 20px 9px;
}
.tab-row ul.menu-category li.active {
  background-color: #00a6eb;
  border-radius: 3px;
}
.tab-row ul.menu-category li.active a {
  color: #fff;
}
.tab-row ul.menu-category li.active:before {
  content: '';
  display: none;
}
.tab-row ul.menu-category li.active:after {
  content: '';
  display: none;
}
.tab-row {
  margin-bottom: 40px;
}
.pls-col .project-love-image img {
  width: 370px;
}
.pls-col .project-love-item .project-love-item-content {
  padding: 0 0 0 0;
  margin: 0 0 0 390px;
}
.pls-col .project-love-item-content a.category {
  font-size: 12px;
  margin-bottom: 8px;
}
.pls-col .project-love-item .project-love-item-content h3 {
  font-size: 18px;
  margin-bottom: 15px;
}
.pls-col .project-love-item-content .project-love-description {
  margin-bottom: 15px;
  max-height: 65px;
}
.popular-project {
  background-color: #f5f6f6;
  border-radius: 3px;
  text-align: center;
  height: 268px;
  padding-top: 30px;
}
.popular-project span {
  font-size: 70px;
  color: #00a6eb;
  line-height: 75px;
}
.popular-project h4 {
  font-size: 14px;
  margin-bottom: 15px;
}
.popular-project p {
  margin-bottom: 18px;
}
.popular-project .pp-item {
  display: none;
}
.popular-project .pp-item.active {
  display: block;
}
.popular-project .pp-item img {
  width: auto;
  margin-bottom: 20px;
}
.project-love .pls-col .process-info span {
  margin-right: 60px !important;
}
.project-love .tab-menu {
  position: relative;
}
.project-love .tab-menu a.all-project {
  position: absolute;
  top: 10px;
  left: -125px;
  font-weight: 500;
}
.project-love .project-love-title {
  margin-bottom: 35px;
}
.border-title {
  border-bottom: 1px solid #ededed;
  padding-bottom: 11px;
  margin-bottom: 40px;
}
.title.left-title {
  font-size: 26px;
  text-align: left;
  margin-bottom: 10px;
}
.description.left-description {
  text-align: left;
  margin-bottom: 0;
}
.staff-picks-item img,
.project-love-item img,
.campaign-big-item img {
  //width: auto;
}
.staff-picks-item a.staff-picks-image,
.project-love-item a.project-love-image,
.campaign-big-item a.campaign-big-image {
  float: left;
  width: 100%;
  height: 100%;
}
.staff-picks-item .staff-picks-item-content h3,
.project-love-item .project-love-item-content h3,
.campaign-big-item .campaign-big-box h3 {
  clear: none;
}
.staff-picks-item-content h3 a,
.project-love-item-content h3 a {
  display: inline-block;
}
.staff-picks-item .staff-picks-item-content {
  padding: 0 0 0 600px;
}
.campaign-big-item .campaign-big-box {
  margin: 0;
}
.campaign-big-item .campaign-big-box {
  padding: 24px 30px;
  width: 50%;
}
.campaign-big-item {
  background-color: #f5f6f6;
  margin-bottom: 30px;
  display: flex;
}
.campaign-big-item .thumbnail {
  width: 580px;
  height: 410px;
}
.campaign-item .thumbnail {
  width: 100%;
  height: 270px;
}
.campaign-big-item .process .process-info {
  margin-bottom: 0;
}
.project-love-item .project-love-item-content {
  padding: 0 0 0 500px;
}
.staff-picks-item-content a.category,
.project-love-item-content a.category,
.campaign-big-item a.category {
  margin-bottom: 12px;
  display: inline-block;
}
.staff-picks-item-content h3,
.project-love-item-content h3,
.campaign-big-item h3 {
  font-size: 26px;
  margin-bottom: 24px;
  max-height: initial;
}
.staff-picks-item-content .raised,
.project-love-item-content .raised,
.campaign-big-box .raised {
  background-color: #ededed;
  height: 8px;
}
.staff-picks-author .author-address,
.project-love-author .author-address {
  text-align: right;
  display: inline-block;
  float: right;
  line-height: 35px;
}
.staff-picks-author .author-profile,
.project-love-author .author-profile {
  text-align: left;
  display: inline-block;
}
.staff-picks-author,
.project-love-author {
  margin-bottom: 20px;
}
.staff-picks-item .process-info,
.project-love-item .process-info {
  margin-bottom: 0px;
}
.staff-picks-item .process-info div,
.project-love-item .process-info div,
.campaign-big-box .process-info div {
  color: #555555;
}
.author-profile a {
  display: inline-block;
}
.author-profile .author-avatar {
  margin-right: 10px;
}
.author-profile .author-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
}
.staff-picks-item-content .staff-picks-description {
  height: 130px;
  overflow: hidden;
  max-height: 130px;
}
.campaign-big-box .campaign-description {
  line-height: 1.5;
  height: 10.5em;
  overflow: hidden;
  margin-bottom: 30px;
  word-break: break-word;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 7;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.campaign-big-box .process .process-info span {
  font-size: 16px;
}
.project-love-item-content .project-love-description {
  overflow: hidden;
  max-height: 83px;
  margin-bottom: 40px;
}
.staff-picks-item-content .author-address span,
.project-love-item-content .author-address span,
.campaign-big-box .author-address span {
  font-size: 18px;
  line-height: normal;
  margin-right: 6px;
}
.process-info div span {
  margin-right: 100px !important;
}
.process-info div:last-child span {
  margin-right: 0px !important;
}
.slider-controls-top {
  position: relative;
}
.slider-controls-top .owl-nav {
  position: absolute;
  top: -105px;
  right: 0;
}
.slider-controls-top .owl-next,
.slider-controls-top .owl-prev {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #182f57 !important;
  border-radius: 2px;
  color: #fff !important;
  font-size: 18px;
}
.slider-controls-top .owl-prev {
  margin-right: 10px;
}
.latest .campaign-item,
.campaigns .campaign-item {
  background-color: #f5f6f6;
  margin-bottom: 30px;
}
.latest .latest-button {
  text-align: center;
  margin-top: 30px;
}
.latest {
  margin-bottom: 120px;
}
.places {
  padding-top: 120px;
  margin-bottom: 0!important;
}
.partners {
  background-color: #f5f6f6;
  padding: 60px 0;
}
.partners .partners-slider div {
  text-align: center;
}
.partners .partners-slider img {
  width: auto;
  display: inline-block;
}
.blognews-cat {
  font-size: 12px;
  color: #555555;
  margin-bottom: 8px;
}
.blognews-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  height: 20px;
  overflow: hidden;
}
.blognews {
  margin-bottom: 120px;
}
.blognews-thumb {
  margin-bottom: 17px;
  border-radius: 3px;
}
.blognews-content .post {
  margin-bottom: 0;
}
/*------------------------------------------------------------------
3.1. Layout three / #layout-three
-------------------------------------------------------------------*/
.page-title {
  position: relative;
  min-height: 220px;
  margin-bottom: 120px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.page-title.background-page {
  background-image: url('src/images/placeholder/1920x220.png');
}
.page-title.background-blog {
  background-image: url('src/images/placeholder/1920x220.png');
}
.page-title.background-campaign {
  background-image: url('src/images/placeholder/1920x220.png');
}
.page-title.background-cart {
  background-image: url('src/images/placeholder/1920x220.png');
}
.page-title:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.page-title .container {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.page-title h1 {
  font-size: 26px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 12px;
}
.page-title .banner-description {
  color: #fff;
}
.page-title .breadcrumbs li,
.page-title .breadcrumbs li a {
  list-style: none;
  display: inline-block;
  color: #fff;
}
.page-title .breadcrumbs li span {
  margin: 0 7px;
}
.campaigns.section .section-box {
  background-color: #f5f6f6;
}
.campaigns.section .section-item {
  margin-bottom: 30px;
}
.site-main .campaigns {
  padding: 0;
}
.site-main .campaigns .latest-button {
  text-align: center;
  margin-top: 30px;
}
.site-main .campaigns .latest-button a {
  background: none;
  border: 2px solid #00a6eb;
  color: #00a6eb;
  line-height: 42px;
}
.site-main .campaigns .latest-button a:hover {
  background-color: #00a6eb;
  color: #fff;
}
/*------------------------------------------------------------------
3.2. Blogs / #blogs
-------------------------------------------------------------------*/
.blog-grid.full-width .post {
  width: 33.33%;
}
.grid-post {
  margin: 0 -15px;
}
.blog-grid .post {
  padding: 0 15px;
}
.blog-grid.full-width .post {
  padding: 0 15px;
}
.blog-grid .main-content {
  letter-spacing: -0.3em;
}
.blog-grid .post {
  width: 50%;
  display: inline-block;
  letter-spacing: normal;
}
.shop-grid .main-content {
  letter-spacing: -0.3em;
}
.shop-grid-fillter {
  margin-bottom: 40px;
}
.shop-grid-fillter p {
  letter-spacing: normal;
  float: left;
  line-height: 42px;
}
.shop-grid-fillter .field-select {
  letter-spacing: normal;
  float: right;
}
.shop-grid-fillter select {
  padding: 0 45px 0 15px;
  height: 42px;
  border-radius: 2px;
  overflow: hidden;
}
.shop-grid-fillter .field-select:after {
  border-left: 0px;
  line-height: 42px;
}
.grid-product {
  margin: 0 -15px;
}
.product {
  width: 25%;
  display: inline-block;
  letter-spacing: normal;
  padding: 0 15px;
}
.product .product-price {
  font-size: 14px;
  color: #555555;
  overflow: hidden;
  height: 4.5em;
  line-height: 1.5;
  word-break: break-word;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.product .product-title {
  font-size: 16px;
  max-height: 18px;
  overflow: hidden;
}
.post,
.product {
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 30px;
}
.post-desc {
  max-height: 60px;
  overflow: hidden;
}
.post-info,
.product-info {
  background-color: #f5f6f6;
  padding: 27px 25px;
  height: 160px;
}
.post-title,
.product-title {
  margin-bottom: 11px;
  max-height: 40px;
  overflow: hidden;
}
.post-meta li,
.post-meta li a,
.post-meta li span {
  list-style: none;
  display: inline-block;
  color: #555555;
  font-size: 12px;
}
.post-meta li:hover a {
  color: #00a6eb;
}
.post-meta li {
  margin-right: 28px;
}
.post-meta li:last-child {
  margin-right: 0;
}
.post-meta li i,
.post-meta li span {
  margin-right: 4px;
}
.post-meta {
  margin-bottom: 20px;
}
.page-navigation {
  text-align: center;
  margin-top: 60px;
}
.page-navigation a,
.page-navigation span {
  height: 42px;
  width: 42px;
  display: inline-block;
  background-color: #ededed;
  line-height: 42px;
  text-align: center;
  font-weight: 500;
  color: #555;
  border-radius: 2px;
  margin-right: 8px;
  letter-spacing: normal;
}
.page-navigation span {
  background-color: #00a6eb;
  color: #fff;
}
.page-navigation a:last-child {
  margin-right: 0px;
}
.widget {
  margin-bottom: 40px;
  border-radius: 2px;
  background-color: #f5f6f6;
  padding: 40px 25px;
}
.widget-search {
  padding: 0;
}
.widget-search form {
  position: relative;
}
.widget-search form input {
  width: 100%;
  background-color: #f5f6f6;
  border: 0;
  height: 50px;
  padding: 0 62px 0 15px;
}
.widget-search form button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  padding: 0 17px;
}
.widget-title {
  font-size: 16px;
  margin-bottom: 41px;
}
.widget li {
  list-style: none;
  font-size: 16px;
}
.widget li:last-child {
  margin-bottom: 0px;
}
.widget li a {
  color: #333;
}
.widget li:hover a {
  color: #00a6eb;
}
.widget-category li {
  border-bottom: 1px solid #ededed;
  padding: 10px 0;
}
.widget-category li:first-child {
  padding-top: 0px;
}
.widget-category li:last-child {
  border-bottom: 0px;
  padding-bottom: 0px;
}
.widget-popular li:after {
  content: '';
  clear: both;
  display: block;
}
.widget-popular li {
  margin-bottom: 25px;
}
.widget-popular li img {
  width: auto;
  float: left;
  border-radius: 2px;
}
.widget-popular li h4 {
  clear: none;
  font-weight: 400;
  font-size: 16px;
  margin-left: 75px;
  line-height: 1.6;
  max-height: 51px;
  overflow: hidden;
}
.widget-recent li {
  margin-bottom: 20px;
}
/*------------------------------------------------------------------
3.3. Blog Details / #blog-details
-------------------------------------------------------------------*/
.entry-content ul.post-meta {
  margin-top: 35px;
}
.entry-content ul.post-meta li a,
.entry-content ul.post-meta li span {
  font-size: 14px;
}
.entry-content ul.post-meta li:hover a {
  color: #00a6eb;
}
.entry-content p {
  color: #555555;
  margin-bottom: 15px;
}
.entry-content ul.list {
  margin-left: 55px;
  margin-bottom: 18px;
}
.entry-content ul.list li {
  list-style: square;
  line-height: 1.9;
}
.entry-content .quote {
  background: #fafafa;
  border-left: 5px solid #ecf0f1;
  margin-left: 40px;
  padding: 15px 25px;
  margin-bottom: 20px;
}
.entry-content .quote p {
  margin-bottom: 0px;
  color: #222222;
  font-size: 18px;
  font-style: italic;
}
.entry-footer {
  margin-top: 50px;
}
.entry-footer .tags-links {
  margin-bottom: 35px;
}
.entry-footer .tags-links a {
  background-color: #f7f7f7;
  margin-right: 10px;
  padding: 2px 6px;
  border-radius: 2px;
}
.entry-footer .tags-links span {
  text-transform: uppercase;
}
.entry-footer .tags-links a,
.entry-footer .tags-links span {
  display: inline-block;
  font-weight: 500;
  color: #555;
}
.entry-footer .tags-links a:hover {
  color: #00a6eb;
}
.entry-footer .author-info {
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  padding: 25px 0;
}
.entry-footer .author-info img,
.comment-area .comment-avatar img {
  width: auto;
  float: left;
  border-radius: 2px;
}
.entry-footer .author-info .author-bio,
.comment-area .comment-info {
  margin-left: 100px;
}
.entry-footer .author-info h3,
.comment-area .comment-author {
  clear: none;
  font-size: 16px;
  margin-bottom: 7px;
  font-style: normal;
  color: #222222;
  font-weight: 500;
}
.entry-footer .author-info .author-bio div,
.comment-area .comment-info .comment-content {
  line-height: 1.6;
  color: #555555;
}
.comments-list li {
  list-style: none;
}
.comment-area {
  margin-top: 58px;
}
.comment-area .comments-title {
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 35px;
}
.comment-info .comment-inline {
  margin-bottom: 10px;
}
.comment-area span.comment-date,
.comment-area a.comment-reply {
  display: inline-block;
  font-size: 12px;
}
.comment-area a.comment-reply {
  float: right;
}
#respond {
  margin-top: 51px;
}
#respond h3 {
  font-size: 16px;
  margin-bottom: 36px;
}
#respond form input,
#respond form textarea {
  width: 100%;
  border-radius: 2px;
  resize: none;
}
#respond form textarea {
  margin-bottom: 25px;
}
#respond form input {
  height: 46px;
}
#respond form input[placeholder],
#respond form textarea[placeholder] {
  font-style: normal;
}
/* #respond form .inline{
  letter-spacing: -0.3em;
  margin: 0 -12px;
}
#respond form .inline .field{
  width: 33.33%;
  display: inline-block;
  letter-spacing: normal;
  padding: 0 12px;
} */
/*------------------------------------------------------------------
3.4. 404 / #404
-------------------------------------------------------------------*/
.main-404 {
  text-align: center;
}
.main-404 img {
  width: auto;
  margin-bottom: 13px;
}
.main-404 h2 {
  font-size: 26px;
  margin-bottom: 34px;
}
.main-404 .button .btn-secondary {
  color: #00a6eb;
  border-color: #0094d2;
}
.main-404 .button .btn-secondary:hover {
  color: #fff;
}
/*------------------------------------------------------------------
3.5. About us / #about-us
-------------------------------------------------------------------*/
.top-site {
  background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3108&q=80');
  height: 860px;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.top-site:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.top-site .container {
  position: absolute;
  top: 286px;
  left: 0;
  right: 0;
}
.top-site h1 {
  color: #fff;
  text-align: center;
  max-width: 930px;
  font-size: 32px;
  margin: 0 auto;
}
.video {
  text-align: center;
}
.video .video-wrapper {
  border: 10px solid #fff;
  display: inline-block;
  border-radius: 3px;
  margin-top: -220px;
  position: relative;
  z-index: 8;
  -webkit-box-shadow: 0px 11px 15px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 11px 15px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 11px 15px 4px rgba(0, 0, 0, 0.1);
}
.video iframe {
  width: 750px;
  height: 420px;
}
.team-item {
  position: relative;
}
.avatar:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 47, 87, 0.6);
  transition: all 0.5s;
  visibility: hidden;
  opacity: 0;
}
.team-item:hover .avatar:after {
  visibility: visible;
  opacity: 1;
}
.team-item:hover .team-info {
  display: block;
  bottom: 20px;
  opacity: 1;
  visibility: visible;
}
.team-info {
  position: absolute;
  left: 0;
  bottom: 10px;
  right: 0;
  z-index: 9;
  opacity: 0;
  transition: all 0.4s;
  visibility: hidden;
}
.team-info .socials {
  text-align: center;
}
.team-info .socials li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}
.team-info .socials li:last-child {
  margin-right: 0;
}
.team-info .socials li a {
  display: block;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  line-height: 38px;
  color: #fff;
  text-align: center;
  font-size: 16px;
}
.team-info .socials li a:hover {
  background-color: #fff;
  color: #00a6eb;
}
.team-info .team-name {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  margin-bottom: 5px;
  text-align: center;
  margin-top: 10px;
  color: #fff;
}
.team-info .team-job {
  font-weight: 500;
  color: #222;
  text-align: center;
  display: block;
  color: #fff;
}
.statics-content .statics-item {
  text-align: center;
  background-color: #f5f6f6;
  border-radius: 3px;
  padding: 40px 20px;
}
.statics-content .statics-item h3 {
  margin-bottom: 13px;
  font-size: 26px;
}
.partners-about {
  background: none;
  padding: 120px 0 0;
}
.partners-about ul {
  letter-spacing: -0.3em;
}
.partners-about li {
  margin-bottom: 25px;
  list-style: none;
  display: inline-block;
  width: 16.667%;
  letter-spacing: normal;
  text-align: center;
}
.partners-about li a {
  height: 62px;
  line-height: 62px;
}
.partners-about li img {
  width: auto;
}
/*------------------------------------------------------------------
3.6. Contact us / #contact-us
-------------------------------------------------------------------*/
.form-contact,
.contact-info {
  background-color: #f5f6f6;
  padding: 42px 25px;
  border-radius: 3px;
  height: 418px;
}
.form-contact h2,
.contact-info h3 {
  margin-bottom: 20px;
  font-size: 18px;
}
.form-contact input {
  height: 46px;
}
.form-contact input,
.form-contact textarea {
  width: 100%;
  background-color: #fff !important;
}
.form-contact textarea {
  height: 100px;
  margin-bottom: 20px;
}
textarea {
  resize: none;
}
input[placeholder],
textarea[placeholder] {
  font-style: normal;
}
form .align-left {
  float: left;
  width: 50%;
  padding-right: 15px;
}
form .align-right {
  float: right;
  width: 50%;
  padding-left: 15px;
}
.contact-info li {
  list-style: none;
  margin-bottom: 15px;
  color: #555555;
}
.contact-info li i {
  margin-right: 15px;
}
.contact-info .contact-desc {
  margin-top: 32px;
}
.contact-content .entry-content {
  height: 418px;
}
.contact-us .site-main {
  padding-bottom: 0px;
}
.maps #map {
  height: 560px;
  margin-top: 80px;
}
#google-map {
  max-height: 300px;
  max-width: 600px;
  height: 300px;
  width: 600px;
  position: relative;
}
/*------------------------------------------------------------------
3.7. Login / #login
-------------------------------------------------------------------*/
.form-login {
  max-width: 430px;
  margin: 0 auto;
}
.form-login h2 {
  font-size: 18px;
  margin-bottom: 20px;
}
.form-login input {
  border: 1px solid #ededed;
  width: 100%;
  height: 46px;
}
.form-login .btn-primary {
  float: left;
}
.form-login .inline {
  margin-top: 10px;
}
.form-login .inline p {
  float: right;
  display: inline-block;
  line-height: 46px;
  color: #222222;
}
.form-login .inline p a {
  display: inline-block;
  text-decoration: underline;
}
/*------------------------------------------------------------------
3.8. Shop Cart / #shop-cart
-------------------------------------------------------------------*/
.product-table tr th {
  background-color: #a6c6c7;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 24px 30px;
}
.product-table tr td {
  padding: 20px 30px;
  background-color: #f5f6f6;
  border-top: 1px solid #ededed;
  font-size: 16px;
  color: #222222;
  font-weight: 500;
}
.product-table tr td img {
  width: auto;
  display: inline-block;
  border-radius: 3px;
}
.product-table tr td h3 {
  clear: none;
  font-size: 16px;
  line-height: 100px;
  margin-left: 20px;
  display: inline-block;
}
.product-table table {
  width: 100%;
}
.product-table tr td a.controls-quatity,
.product-table tr td span.number-quatity {
  display: inline-block;
}
.product-table tr td a.controls-quatity {
  width: 32px;
  height: 32px;
  border: 1px solid #ededed;
  border-radius: 2px;
  text-align: center;
  line-height: 32px;
  color: #999999;
  font-size: 16px;
}
.product-table tr td span.number-quatity {
  height: 32px;
  width: 50px;
  border: 1px solid #ededed;
  border-radius: 2px;
  text-align: center;
  line-height: 32px;
  margin: 0 3px;
}
.product-table tr td span.ion-ios-close-empty {
  font-size: 32px;
  line-height: auto;
  vertical-align: -6px;
}
.product-table {
  margin-bottom: 30px;
}
.calculate-shipping h3,
.cart-totals h3 {
  font-size: 18px;
  margin-bottom: 20px;
}
select,
.field input {
  width: 100%;
  height: 46px;
  padding: 0 15px;
  z-index: 1;
  position: relative;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #ededed;
  background-color: transparent;
}
.calculate-shipping .field {
  margin-bottom: 20px;
}
.field-select {
  position: relative;
}
.field-select:after {
  content: '\\02C5';
  position: absolute;
  top: 3px;
  right: 0;
  line-height: 46px;
  padding: 0 18px;
  bottom: 0;
  z-index: 0;
  border-left: 1px solid #ededed;
}
.calculate-shipping .align-left.field-select:after {
  right: 15px;
}
.calculate-shipping .btn-primary {
  margin-top: 10px;
  background-color: #182f57;
}
.cart-totals ul {
  padding: 0 20px;
  background-color: #f5f6f6;
}
.cart-totals ul li {
  list-style: none;
  padding: 15px 0;
  border-bottom: 1px solid #ededed;
}
.cart-totals ul li:last-child {
  border-bottom: 0px;
}
.cart-totals ul li .price {
  font-weight: 500;
}
.cart-totals ul li p {
  display: inline-block;
  width: 50%;
}
.coupon-form {
  margin-top: 30px;
  background-color: #f5f6f6;
  padding: 20px 30px;
}
.coupon-form form {
  position: relative;
  height: 46px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.coupon-form form input {
  height: 46px;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 72%;
}
.coupon-form form button {
  background-color: #182f57;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}
.coupon-form .button {
  float: right;
}
.coupon-form .button .update-cart {
  background-color: #a6c6c7;
  margin-right: 18px;
}
.billing-detail h2 {
  font-size: 18px;
  margin-bottom: 17px;
}
.billing-detail label {
  color: #222222;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
}
select {
  padding: 0 10px;
}
form .field {
  margin-bottom: 26px;
}
form .create-account input[type='checkbox'] {
  margin-right: 15px;
}
.create-account {
  position: relative;
  margin-top: 40px;
}
.create-account label {
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
  padding-left: 30px;
  position: relative;
  z-index: 9;
  display: inline-block;
}
.create-account input[type='checkbox'] {
  position: absolute;
  visibility: hidden;
}
.create-account .checkbox {
  display: block;
  position: absolute;
  background-color: #00a6eb;
  border-radius: 2px;
  height: 15px;
  width: 15px;
  top: 0;
  margin: 0;
  left: 0;
  margin-top: 1px;
  z-index: 1;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
}
.create-account input[type='checkbox']:checked ~ .form-create-account {
  display: block;
  transition: all 0.6s;
}
.create-account .form-create-account {
  margin-top: 20px;
  display: none;
  transition: all 0.6s;
}
.create-account .checkbox:before {
  position: absolute;
  content: '\f3fd';
  color: #fff;
  font-family: 'Ionicons';
  border-radius: 100%;
  font-size: 28px;
  top: 0;
  left: 2px;
  margin: auto;
  height: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
  line-height: 15px;
  display: none;
}
.create-account input[type='checkbox']:checked ~ .checkbox:before {
  display: block;
}
.different-address {
  margin-top: 40px;
}
.different-address label {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
}
.different-address input {
  display: inline-block;
  border: 1px solid #cccccc;
  margin-left: 20px;
}
.order-notes {
  margin-top: 20px;
}
.order-notes textarea {
  width: 100%;
  height: 120px;
}
.payment {
  margin-top: 55px;
}
.payment li {
  list-style: none;
  position: relative;
}
.payment input[type='radio'] {
  position: absolute;
  visibility: hidden;
}
.payment label {
  font-weight: normal;
  font-size: 14px;
  color: #222;
  padding-left: 30px;
  z-index: 9;
  position: relative;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
}
.payment .payment-check {
  display: block;
  position: absolute;
  border: 2px solid #dbdbdb;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 2px;
  left: 0px;
  z-index: 1;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
}
.payment .payment-check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 5px;
  width: 5px;
  top: 3px;
  left: 3px;
  background-color: #00a6eb;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
  display: none;
}
.payment input[type='radio']:checked ~ .payment-check {
  border: 2px solid #00a6eb;
}
.payment input[type='radio']:checked ~ .payment-check::before {
  display: block;
}
.payment .payment-desc {
  background-color: #f5f6f6;
  padding: 20px;
  color: #555555;
  line-height: 1.6;
  margin-bottom: 18px;
  display: none;
  transform: all 0.6s;
}
.payment input[type='radio']:checked ~ .payment-desc {
  display: block;
}
.billing-detail form .btn-primary {
  margin-top: 47px;
}
/*------------------------------------------------------------------
3.9. Shop / #shop
-------------------------------------------------------------------*/
.shop-details .shop-details-content {
  background-color: #f5f6f6!important;
  padding: 36px 30px;
}
.shop-details .shop-details-content span {
  margin-bottom: 10px;
  display: block;
}
.shop-details .shop-details-content h2 {
  font-size: 26px;
  margin-bottom: 30px;
}
.inline-img {
  letter-spacing: -0.3em;
  margin: 20px -8px 36px;
}
.inline-img img {
  display: inline-block;
  width: 25%;
  letter-spacing: normal;
  padding: 0 8px;
}
.shop-details .shop-details-content h3 {
  font-size: 16px;
  margin-bottom: 18px;
}
.shop-details .shop-details-content p,
.shop-details .shop-details-content .shop-detail-img {
  margin-bottom: 20px;
}
.shop-details .shop-details-content .reviews {
  margin-top: 40px;
}
.reviews input,
.reviews textarea {
  width: 100%;
  background-color: #fff;
}
.reviews .reviews-vote {
  line-height: 46px;
}
.reviews .reviews-vote .vote {
  float: left;
}
.reviews .reviews-vote span {
  display: inline-block;
  margin-right: 20px;
  color: #999999;
  margin-bottom: 0;
}
.reviews .reviews-vote ul {
  display: inline-block;
}
.reviews .reviews-vote li {
  list-style: none;
  display: inline-block;
  color: #999999;
}
.reviews .reviews-vote li i {
  color: #999;
}
.reviews .reviews-vote li:hover i {
  color: #000;
}
.reviews .reviews-vote .btn-primary {
  float: right;
}
.widget-action h3 {
  margin-bottom: 18px;
}
.widget-action .btn-primary {
  width: 100%;
  margin-top: 35px;
  font-weight: 500;
}
.widget-action .btn-primary span {
  margin-right: 10px;
  vertical-align: 1px;
}
.widget-share h3 {
  margin-bottom: 18px;
}
.widget-share li {
  list-style: none;
  display: inline-block;
  margin-right: 8px;
}
.widget-share li:hover a {
  background-color: #00a6eb;
  color: #fff;
}
.widget-share li a {
  height: 36px;
  width: 36px;
  text-align: center;
  line-height: 34px;
  border: 1px solid #ededed;
  border-radius: 2px;
  background-color: #fff;
}
/*------------------------------------------------------------------
3.10. Coming soon / #coming-soon
-------------------------------------------------------------------*/
.coming-soon #wrapper {
  background-image: url('src/images/placeholder/1920x1080.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.coming-soon .site-header {
  height: auto;
  text-align: center;
  padding: 100px 0;
  margin-bottom: 10px;
}
.coming-soon .site-header,
.coming-soon .site-main,
.coming-soon .site-footer {
  z-index: 9;
  position: relative;
}
.coming-soon .site-header .site-brand {
  float: none;
  line-height: normal;
}
.coming-soon .site-brand img {
  width: auto;
}
.coming-soon .site-main h2 {
  font-size: 26px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;
}
.coming-soon .site-main h1 {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 30px;
}
.coming-soon .site-main .desc {
  color: #fff;
  text-align: center;
  width: 40%;
  margin: 0 auto;
}
.coming-soon .site-main .time {
  max-width: 690px;
  margin: 115px auto 0;
}
.coming-soon .site-main .time ul {
  margin: 0 -15px;
}
.coming-soon .site-main .time li {
  list-style: none;
  display: inline-block;
  width: 25%;
  padding: 0 15px;
}
.coming-soon .site-main .time .time-item {
  background-color: #182f57;
  color: #fff;
  text-align: center;
  height: 150px;
  border-radius: 3px;
}
.coming-soon .site-main .time .time-item p {
  font-size: 80px;
  font-weight: 500;
}
.coming-soon .site-footer .footer-copyright p {
  margin-top: 21px;
  float: left;
}
.coming-soon .site-footer .footer-copyright .follow {
  float: right;
}
.coming-soon .site-main .time .time-item span {
  display: block;
  margin-top: -14px;
}
.coming-soon .site-main .button {
  display: block;
  margin: 60px auto 0;
  text-align: center;
}
.coming-soon .site-footer .footer-copyright {
  background-color: initial;
  padding: 44px 60px 80px 60px;
}
.coming-soon #wrapper {
  position: relative;
}
.coming-soon #wrapper:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;
}
.popup.open {
  visibility: visible;
  opacity: 1;
}
.newsletter-popup {
  background: repeating-linear-gradient(
    135deg,
    #4251db,
    #4251db 10px,
    #fff 10px,
    #fff 20px,
    #f84d3b 20px,
    #f84d3b 30px,
    #fff 30px,
    #fff 40px
  ) !important;
  position: relative;
  height: 320px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 640px;
  margin: 0 auto;
}
.newsletter-popup .close {
  position: absolute;
  top: -10px;
  right: -10px;
  color: #222;
  opacity: 1;
  height: 30px;
  width: 30px;
  background-color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  font-size: 14px;
}
.popup-wrapper {
  background-color: #fff;
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
}
.form-header {
  position: relative;
  padding: 30px;
}
.form-content:before {
  background: linear-gradient(
      45deg,
      transparent 33.33%,
      #ffffff 33.333%,
      #ffffff 66.66%,
      transparent 66.66%
    ),
    linear-gradient(-45deg, transparent 33.33%, #ffffff 33.33%, #ffffff 66.66%, transparent 66.66%) !important;
  top: -5px;
  left: 0;
  width: 100%;
  height: 10px;
  background-size: 20px 40px !important;
  content: '';
  position: absolute;
}
.form-header img {
  width: auto;
  float: left;
}
.form-header .form-text h2 {
  clear: none;
  color: #222;
}
.form-header .form-text {
  padding-left: 180px;
}
.form-header .form-text h2 {
  text-align: left;
}
.form-content {
  padding: 30px;
  position: relative;
}
.form-content form {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42px;
}
.form-content form input {
  width: 70%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 42px;
  border-radius: 3px;
}
.form-content form button {
  position: absolute;
  right: 0;
  top: 0;
  height: 42px;
  line-height: 42px;
  width: 25%;
}
/*------------------------------------------------------------------
3.11. Campaign Details / #campaign-details
-------------------------------------------------------------------*/
.site-main .campaign-content .campaign {
  padding: 0;
}
.campaign-detail .campaign-image {
  width: 570px;
  height: 400px;
  float: left;
  padding-right: 15px;
}
.campaign-detail .campaign-image .item {
  width: 100%;
  height: 100%;
}
.campaign-detail .campaign-box {
  float: right;
  width: 50%;
  padding: 0 0 0 15px;
}
.campaign-detail .campaign-box a.category {
  font-size: 14px;
}
.campaign-detail .campaign .process .raised {
  height: 8px;
}
.campaign-detail .campaign-box h3 {
  margin-bottom: 22px !important;
  font-size: 26px;
  height: initial !important;
}
.campaign-detail .campaign-box .campaign-description {
  max-height: 95px !important;
}
.campaign-detail .campaign-author {
  margin-top: 40px;
}
.campaign-detail .process-info span {
  margin-right: 110px !important;
  font-size: 16px !important;
  margin-bottom: 6px;
}
.campaign-detail .process .process-info {
  margin-bottom: 10px;
}
.campaign-detail .process .process-info div {
  font-size: 14px !important;
}
.campaign-detail .process .process-info div:last-child span {
  margin-right: 0px !important;
}
.campaign-detail .button .btn-primary {
  font-weight: 500;
  margin-right: 13px;
}
.campaign-detail .campaign-price {
  border-radius: 2px;
  display: inline-block;
}
.campaign-detail .campaign-price input {
  width: 120px;
  border: 0;
  line-height: normal;
  height: 100%;
  padding: 0 8px 0 15px;
  height: 46px;
  line-height: 42px;
  border: 2px solid #ededed;
  margin-right: 13px;
}
.campaign-detail .campaign-price .campaign-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
}
.campaign-detail .campaign-item {
  background-color: initial;
}
.campaign-detail .campaign-price .campaign-controls a {
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  display: block;
  background-color: #f5f6f6;
}
.campaign-detail .button .btn-secondary {
  border-color: #00a6eb;
  background-color: initial;
  color: #00a6eb;
  font-weight: 500;
}
.campaign-detail .button .btn-secondary:hover {
  background-color: #0094d2;
  border-color: #0094d2;
  color: #fff;
}
.campaign-detail .button .btn-secondary i {
  margin-right: 8px;
}
.campaign-detail .campaign-author .author-profile {
  float: left;
}
.campaign-detail .campaign-author .author-address {
  float: right;
  line-height: 35px;
}
.campaign-detail .campaign-author .author-address span {
  margin-right: 10px;
}
.campaign-detail .campaign-image img {

}
.campaign-detail .campaign-image .inline-img {
  margin-bottom: 0px;
}
.campaign-detail .share {
  margin-top: 46px;
}
.campaign-detail .share p {
  color: #555555;
  font-weight: 500;
  margin-bottom: 15px;
}
.campaign-detail .share li {
  list-style: none;
  display: inline-block;
  margin-right: 8px;
}
.campaign-detail .share li a {
  height: 38px;
  width: 38px;
  text-align: center;
  line-height: 36px;
  border: 1px solid #ededed;
  border-radius: 2px;
  overflow: hidden;
}
.campaign-detail .share li.share-facebook i {
  color: #3b5998;
}
.campaign-detail .share li.share-facebook:hover a {
  background-color: #3b5998;
}
.campaign-detail .share li.share-facebook:hover i,
.campaign-detail .share li.share-twitter:hover i,
.campaign-detail .share li.share-google-plus:hover i,
.campaign-detail .share li.share-linkedin:hover i,
.campaign-detail .share li.share-code:hover i {
  color: #fff;
}
.campaign-detail .share li.share-twitter i {
  color: #1da1f2;
}
.campaign-detail .share li.share-twitter:hover a {
  background-color: #1da1f2;
}
.campaign-detail .share li.share-google-plus i {
  color: #dd4b39;
}
.campaign-detail .share li.share-google-plus:hover a {
  background-color: #dd4b39;
}
.campaign-detail .share li.share-linkedin i {
  color: #0077b5;
}
.campaign-detail .share li.share-linkedin:hover a {
  background-color: #0077b5;
}
.campaign-detail .share li.share-code i {
  color: #555555;
}
.campaign-detail .share li.share-code:hover a {
  background-color: #555555;
}
.campaign-slider .owl-controls .owl-page,
.shop-slider .owl-controls .owl-page {
  position: relative;
  display: inline-block;
  width: 33.33%;
  height: 130px;
  outline: none;
  transition: all 0.1s ease-in-out;
}
.shop-slider .owl-controls .owl-page {
  width: 25%;
}
.campaign-slider .owl-controls .owl-page:focus,
.shop-slider .owl-controls .owl-page:focus {
  outline: none;
}
.campaign-slider .owl-controls .owl-page span,
.shop-slider .owl-controls .owl-page span {
  display: none;
}
.campaign-slider .owl-controls,
.shop-slider .owl-controls {
  position: relative;
  margin-top: 20px;
}
.campaign-slider .owl-controls .owl-buttons,
.shop-slider .owl-controls .owl-buttons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
}
.campaign-slider .owl-controls .owl-buttons .owl-next,
.campaign-slider .owl-controls .owl-buttons .owl-prev,
.shop-slider .owl-controls .owl-buttons .owl-next,
.shop-slider .owl-controls .owl-buttons .owl-prev {
  border-radius: 0;
  background: none;
  border: 1px solid #00a6eb;
  color: #00a6eb;
  opacity: 1;
  margin: -13px 0 0 0;
}
.shop-slider .owl-controls .owl-buttons .owl-next span,
.shop-slider .owl-controls .owl-buttons .owl-prev span {
  margin-bottom: 0px;
}
.campaign-slider .owl-controls .owl-buttons .owl-next:hover,
.campaign-slider .owl-controls .owl-buttons .owl-prev:hover,
.shop-slider .owl-controls .owl-buttons .owl-next:hover,
.shop-slider .owl-controls .owl-buttons .owl-prev:hover {
  background-color: #00a6eb;
  color: #fff;
}
.campaign-slider .owl-controls .owl-buttons .owl-next,
.shop-slider .owl-controls .owl-buttons .owl-next {
  right: 10px;
  position: absolute;
}
.campaign-slider .owl-controls .owl-buttons .owl-prev,
.shop-slider .owl-controls .owl-buttons .owl-prev {
  left: 10px;
  position: absolute;
}
.campaign-slider .owl-controls .owl-page,
.shop-slider .owl-controls .owl-page {
  position: relative;
  display: inline-block;
  outline: none;
  transition: all 0.1s ease-in-out;
}
.campaign-history {
  margin-top: 71px;
}
.campaign-history .tabs-controls {
  border-bottom: 1px solid #ededed;
  margin-bottom: 35px;
}
.campaign-history .tabs-controls li.active {
  border-bottom: 1px solid #00a6eb;
}
.campaign-history .tabs-controls li {
  list-style: none;
  display: inline-block;
  margin-right: 75px;
  padding-bottom: 9px;
}
.campaign-history .tabs-controls li:last-child {
  margin-right: 0px;
}
.campaign-history .tabs-controls li {
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}
.campaign-history .campaign-content p,
.campaign-history .campaign-content img {
  margin-bottom: 20px;
}
.campaign-history .campaign-content p:last-child {
  margin-bottom: 0px;
}
.support-campaign {
  background-color: initial;
  padding: 0;
}
.support-campaign select {
  height: initial;
}
.support-campaign h3 {
  border-bottom: 1px solid #ededed;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 15px;
  position: relative;
  margin-bottom: 40px;
}
.support-campaign h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 155px;
  background-color: #00a6eb;
  display: block;
  height: 1px;
}
.support-campaign .plan {
  border: 2px solid #ededed;
  border-radius: 2px;
  margin-bottom: 30px;
}
.support-campaign .plan a {
  display: block;
  background-color: #f5f6f6;
  padding: 40px 25px;
}
.support-campaign .plan a:focus {
  background-color: #00a6eb;
  color: #fff;
}
.support-campaign .plan a:focus:hover {
  color: #fff;
}
.support-campaign .plan a:focus h4 {
  color: #fff;
}
.support-campaign .plan a:hover {
  color: #555555;
}
.support-campaign .plan h4 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 22px;
}
.support-campaign .plan .plan-desc {
  margin-bottom: 16px;
}
.support-campaign .plan .backer {
  margin-top: 18px;
  font-weight: 500;
}
#backer table {
  width: 100%;
}
#backer table tr th,
#backer table tr td {
  border: 1px solid #ededed;
  padding: 15px;
}
#updates li {
  list-style: none;
  padding-bottom: 46px;
  padding-left: 30px;
  position: relative;
  border-left: 2px solid #ededed;
}
#updates li:last-child {
  padding-bottom: 0px;
}
#updates li:before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #ededed;
  border-radius: 50%;
  left: -13px;
  top: 0;
  transition: all 0.6s;
  z-index: 9;
}
#updates li:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 25px;
  background-color: #ededed;
  left: 0;
  top: 10px;
}
#updates li:hover:before {
  background-color: #00a6eb;
}
#updates li p {
  margin-bottom: 5px;
}
#updates li h3 {
  margin-bottom: 10px;
}
#comments h3,
#faq h2 {
  margin-bottom: 20px;
}
/*------------------------------------------------------------------
3.12. Home V2 / #home-v2
-------------------------------------------------------------------*/
.how-it-work {
  padding: 120px 0;
  background-color: #f5f6f6;
  margin-top: 120px;
}
.item-work .item-icon {
  float: left;
  height: 64px;
  width: 64px;
  display: block;
  text-align: center;
  border: 2px solid #00a6eb;
  border-radius: 50%;
  line-height: 60px;
  font-size: 18px;
  color: #00a6eb;
  position: relative;
}
.item-work .item-icon span {
  font-size: 10px;
  font-weight: 500;
  height: 22px;
  text-align: center;
  width: 22px;
  display: block;
  background-color: #182f57;
  line-height: 22px;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  right: -2px;
  top: -2px;
}
.item-work .item-content {
  margin-left: 84px;
}
.item-work .item-content h3 {
  clear: none;
  margin-bottom: 15px;
}
.item-work .item-content .item-desc {
  max-height: 60px;
  overflow: hidden;
}
.campaign-tabs {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 3px;
}
.campaign-history .campaign-tabs {
  text-align: left;
}
.campaign-tabs button {
  border: 0;
  background-color: initial;
  margin-right: 35px;
  padding: 0 0 3px 0;
  cursor: pointer;
}
#respond button {
  background-color: #00a6eb;
  padding: 0 20px;
}
.campaign-tabs button:last-child {
  margin-right: 0;
}
.campaign-tabs .button {
  border-bottom: 2px solid #fff;
}
.campaign-tabs .button.is-checked {
  color: #00a6eb;
  border-bottom: 2px solid #00a6eb;
}
.story {
  margin-bottom: 120px;
}
.story-item .story-thumb {
  position: relative;
}
.story-item .story-thumb h3 {
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 99;
}
.story-item .story-thumb:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
}
.story-item .story-thumb h3 a {
  color: #fff;
}
.story-item .story-thumb h3 a:hover,
.story-info .author-name:hover {
  color: #00a6eb;
}
.story-info {
  background-color: #f5f6f6;
  padding: 0 25px 25px;
  text-align: center;
}
.story-info .author-avatar {
  margin-top: -35px;
  position: relative;
  z-index: 99;
}
.story-info .author-avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
}
.story-info .author-name {
  font-size: 16px;
  color: #222222;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 5px;
}
.author-name {
  margin-left: 5px;
}
.story-info .story-desc {
  max-height: 80px;
  overflow: hidden;
  text-align: left;
}
.story-info .read-more {
  font-weight: 500;
  color: #fff;
  padding: 9px 20px;
  background-color: #182f57;
  display: inline-block;
  border-radius: 3px;
  margin-top: 15px;
}
.story-info .read-more:hover {
  background-color: #00a6eb;
}
.story-slider .owl-controls {
  margin-top: 40px;
}
.story-slider .owl-controls .owl-dot {
  display: inline-block;
  margin-right: 8px;
}
.story-slider .owl-controls .owl-dot:last-child {
  margin-right: 0;
}
.story-slider .owl-controls .owl-dot.active span {
  background-color: #00a6eb;
}
.story-slider .owl-controls .owl-dot span {
  height: 12px;
  width: 12px;
  border: 2px solid #00a6eb;
  display: block;
  border-radius: 50%;
}
/*------------------------------------------------------------------
3.13. Explore Layout One / #explore-layout-one
-------------------------------------------------------------------*/
.find-city {
  background-color: #f5f6f6;
  padding: 25px;
  border-radius: 3px;
}
.find-city h3 {
  margin-bottom: 16px;
  font-size: 16px;
}
.find-city form {
  position: relative;
}
.find-city form input {
  width: 100%;
  height: 46px;
}
.find-city form input[placeholder] {
  font-style: italic;
  padding: 0 130px 0 15px;
}
.find-city form button {
  position: absolute;
  top: 0;
  right: 0;
}
.featured-places-item,
.explore-item {
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  box-sizing: border-box;
}
.featured-places-item a.featured-places-image,
.explore-item a.explore-overlay,
.product a {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 200px;
  width: 270px;
}
.featured-places-item a.featured-places-image:after,
.explore-item a.explore-overlay:after {
  content: ' ';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  -webkit-transition: all 0.27s;
  -moz-transition: all 0.27s;
  -o-transition: all 0.27s;
  transition: all 0.27s;
}
.featured-places-item:hover a.featured-places-image:after,
.explore-item:hover a.explore-overlay:after {
  background: rgba(40, 40, 46, 0.3);
}
.featured-places-item a.featured-places-image img {
  -webkit-transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);
  -moz-transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);
  -o-transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);
  transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);
  border-radius: 0;
  box-sizing: border-box;
  display: block;
  transform-style: preserve-3d;
}
.explore-item a.explore-overlay img,
.product a img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.explore-item:hover a.explore-overlay img,
.product a:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.featured-places-item:hover a.featured-places-image img {
  -moz-transform: scale(1.05);
  -o-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
.featured-places-item h3 {
  color: #ffffff;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}
.featured-places-item h3 a {
  color: #fff;
}
/*------------------------------------------------------------------
3.14. Explore Layout Two / #explore-layout-two
-------------------------------------------------------------------*/
.campaigns-action {
  margin-bottom: 25px;
}
.campaigns-action .sort {
  float: left;
}
.campaigns-action .sort span {
  color: #222;
  font-weight: 500;
  margin-right: 10px;
  line-height: 38px;
}
.campaigns-action .sort span,
.campaigns-action .sort ul,
.campaigns-action .filter span,
.campaigns-action .filter form,
.campaigns-action .filter form .field-select {
  display: inline-block;
}
.campaigns-action .filter form .field-select {
  margin-left: 10px;
}
.campaigns-action .filter form .field-select select {
  padding: 0 30px 0 15px;
  height: 38px;
  border: 2px solid #ededed;
}
.campaigns-action .filter form .field-select:after {
  line-height: 38px;
  font-size: 16px;
  border-left: 0;
  padding: 0 18px 0 0;
}
.campaigns-action .sort li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}
.campaigns-action .sort li a {
  font-weight: 500;
  border-bottom: 2px solid #fff;
}
.campaigns-action .sort li.active a {
  border-bottom: 2px solid #00a6eb;
  color: #00a6eb;
}
.campaigns-action .filter {
  float: right;
}
/*------------------------------------------------------------------
3.15. FAQ / #faq
-------------------------------------------------------------------*/
.list-faq li {
  list-style: none;
  margin-bottom: 20px;
}
.list-faq li:last-child {
  margin-bottom: 0;
}
.list-faq li span,
.list-faq li a {
  display: inline-block;
}
.list-faq li a {
  font-size: 16px;
  font-weight: 500;
}
.list-faq li span {
  color: #00a6eb;
  margin-right: 15px;
  font-size: 16px;
}
.list-faq li.open span.ion-plus:before {
  content: '\f209';
}
.list-faq li .faq-desc {
  margin: 12px 0 30px;
  /*  display: none; */
}
.list-faq li .faq-desc p {
  margin-bottom: 10px;
}
/*------------------------------------------------------------------
3.16. Account / #account
-------------------------------------------------------------------*/
.account-bar,
.account-content {
  background-color: #f5f6f6;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  overflow: hidden;
}
.account-bar li {
  list-style: none;
}
.account-bar li a,
.account-content .account-title {
  font-weight: 500;
  padding: 15px 30px;
}
.account-bar li.active a {
  background-color: #00a6eb;
  color: #fff;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
}
.account-content .account-title {
  background-color: #ededed;
  font-size: 14px;
}
.account-content .account-main {
  padding: 40px 30px;
}
.my-campaigns .campaign-item:after {
  content: '';
  clear: both;
  display: block;
}
.my-campaigns .campaign-item {
  margin-bottom: 25px;
}
.my-campaigns .campaign-item img {
  width: auto;
  border-radius: 5px;
}
.my-campaigns .campaign-image {
  float: left;
}
.my-campaigns .campaign-box {
  padding: 0 0 0 170px;
}
.my-campaigns .campaign-category a {
  color: #555;
  font-size: 12px;
  margin-bottom: 6px;
}
.my-campaigns .campaign-category a:hover {
  color: #00a6eb;
}
.my-campaigns .campaign-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.account-table table {
  text-align: left;
  width: 100%;
  border-top: 1px solid #f0f0f0;
  border-bottom: none;
}
.account-table table td,
.account-table table th {
  text-align: left;
  padding: 10px 5px;
  border-bottom: 1px solid #f0f0f0;
  border-top: none;
  font-size: 14px;
}
.account-table table th {
  font-weight: 700;
  background: #f5f5f5;
}
.profile .author-avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.dashboard img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.dashboard .dashboard-latest img {
  width: auto;
  height: auto;
}
.dashboard .author-avatar,
.profile .author-avatar {
  float: left;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.author .author-content h3,
.profile .author-content h3 {
  clear: none;
  padding-top: 15px;
  font-size: 16px;
  display: inline-block;
  margin-bottom: 30px;
}
.author .edit-profile {
  float: right;
}
.author {
  margin-bottom: 30px;
}
.author .author-content {
  margin-left: 140px;
}
.dashboard .dashboard-latest {
  margin-bottom: 57px;
}
.dashboard .dashboard-latest h3 {
  font-size: 16px;
  margin-bottom: 22px;
}
.dashboard-latest li {
  list-style: none;
  margin-bottom: 20px;
}
.dashboard-latest li:after {
  content: '';
  clear: both;
  display: block;
}
.dashboard-latest li img {
  float: left;
  border-radius: 3px;
}
.dashboard-latest .dashboard-latest-box {
  margin-left: 170px;
}
.dashboard-latest .dashboard-latest-box h4 {
  clear: none;
}
.dashboard-latest .dashboard-latest-box .category {
  padding-top: 10px;
  margin-bottom: 8px;
}
.dashboard .payment-info p {
  font-size: 16px;
  font-weight: 500;
  color: #222222;
  margin-bottom: 15px;
}
.dashboard .payment-info p:last-child {
  margin-bottom: 0;
}
.dashboard .payment-info p a {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #555555;
  font-weight: 400;
}
.dashboard .payment-info p a:hover {
  color: #00a6eb;
}
.profile-box {
  margin-bottom: 60px;
}
.profile-box h3 {
  font-size: 16px;
  margin-bottom: 20px;
}
.profile-box li {
  list-style: none;
  margin-bottom: 20px;
}
.profile-box li:after {
  content: '';
  clear: both;
  display: block;
}
.profile-box li strong {
  font-size: 14px;
  color: #222222;
  font-weight: 500;
  width: 20%;
  float: left;
}
.profile-box li .profile-text {
  width: 80%;
  float: left;
}
/*------------------------------------------------------------------
3.17. Create A Campaign
-------------------------------------------------------------------*/
.campaign-form form {
  max-width: 570px;
  margin: 0 auto;
}
.campaign-form form h4 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
}
.campaign-form form label {
  color: #555555;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
}
.campaign-form form span {
  margin-top: 5px;
  display: block;
}
.field-money {
  position: relative;
  z-index: 1;
}
.field-money .select {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100px;
}
.field-money select {
  border: 0;
  text-align: center;
  background-color: #172f57;
  color: #fff;
  font-weight: 500;
  border-radius: 3px;
  padding: 0 30px 0 10px;
}
.field-money .select:after {
  content: '\f107';
  font: normal normal normal 14px/1 FontAwesome;
  color: #fff;
  top: 16px;
  right: 25px;
  position: absolute;
  z-index: 9999;
}
.form-update form label {
  font-weight: 500;
  color: #222;
}
.form-update form span {
  margin-top: 0;
  margin-bottom: 10px;
}
.form-update form textarea {
  width: 100%;
}
.list-upload {
  letter-spacing: -0.3em;
  margin: 0 -8px;
}
.list-upload .file-upload {
  position: relative;
  width: 33.33%;
  display: inline-block;
  padding: 0 8px;
  letter-spacing: normal;
  text-align: center;
}
.choicefile {
  display: block;
  background: #f5f6f6;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 120px;
  line-height: 120px;
  border-radius: 3px;
}
#uploadfile,
.removeimg {
  display: block;
}
#thumbbox {
  position: relative;
}
.removeimg {
  background: url('http://png-3.findicons.com/files/icons/2181/34al_volume_3_2_se/24/001_05.png')
    repeat scroll 0 0 transparent;
  height: 24px;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 24px;
}
.choicefile1,
.choicefile4,
.choicefile5,
.choicefile6,
.choicefile3 {
  display: block;
  background: #f5f6f6;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 120px;
  line-height: 120px;
  border-radius: 3px;
}
#uploadfile1,
.removeimg1 {
  display: none;
}
#thumbbox1 {
  position: relative;
}
.removeimg1 {
  background: url('http://png-3.findicons.com/files/icons/2181/34al_volume_3_2_se/24/001_05.png')
    repeat scroll 0 0 transparent;
  height: 24px;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 24px;
}
.choicefile2 {
  display: block;
  background: #f5f6f6;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 120px;
  line-height: 120px;
  border-radius: 3px;
}
#uploadfile2,
.removeimg2,
#uploadfile3,
#uploadfile4,
.removeimg4,
.removeimg3,
#uploadfile5,
.removeimg5,
#uploadfile6,
.removeimg6 {
  display: none;
}
#thumbbox2,
#thumbbox4,
#thumbbox5,
#thumbbox6,
#thumbbox3 {
  position: relative;
}
.removeimg2,
.removeimg4,
.removeimg5,
.removeimg6,
.removeimg3 {
  background: url('http://png-3.findicons.com/files/icons/2181/34al_volume_3_2_se/24/001_05.png')
    repeat scroll 0 0 transparent;
  height: 24px;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 24px;
}
/*------------------------------------------------------------------
4. Footer / #footer
-------------------------------------------------------------------*/
.payment-img {
  float: left;
}
.payment-img img {
  width: auto;
}
.site-footer .footer-top {
  padding-top: 60px;
}
.footer-top:after {
  content: '';
  display: block;
  clear: both;
}
.footer-top .copyright {
  float: left;
  color: #fff;
  line-height: 46px;
  opacity: 0.7;
}
.footer-top .footer-top-right {
  float: right;
}
.footer-top-right .follow,
.footer-top-right .dropdow {
  display: inline-block;
  margin-left: 20px;
  background: #fff;
}
.footer-top-right .dropdow select {
  background-color: initial;
  padding: 0 50px 0 10px;
}
.footer-top-right .dropdow select:focus {
  outline: none;
  outline-offset: inherit;
}
.site-footer .footer-menu {
  background-color: #202020;
  padding: 80px 0;
}
.footer-menu .footer-menu-item h3 {
  text-transform: uppercase;
  color: #f5f6f6;
  font-size: 14px;
  margin-bottom: 24px;
  opacity: 0.8;
}
.footer-menu .footer-menu-item li {
  list-style: none;
  margin-bottom: 12px;
  opacity: 0.5;
}
.footer-menu .footer-menu-item li:hover {
  opacity: 1;
}
.footer-menu .footer-menu-item li:hover a {
  color: #fff !important;
}
.footer-menu .footer-menu-item li:last-child {
  margin-bottom: 0px;
}
.footer-menu .footer-menu-item li a {
  color: #f5f6f6;
  font-weight: 400;
}
.site-footer .footer-menu .footer-menu-item li:hover a {
  color: #00a6eb;
}
.footer-menu-item.newsletter .newsletter-description {
  color: #f5f6f6;
  margin-bottom: 12px;
  opacity: 0.5;
}
#newsletterForm {
  position: relative;
  border-radius: 3px;
  height: 50px;
  margin-bottom: 40px;
}
#newsletterForm input {
  width: 100%;
  border-radius: 3px;
  height: 100%;
  padding: 0 65px 0 15px;
}
#newsletterForm input[placeholder] {
  font-style: italic;
}
#newsletterForm button {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background: #00a6eb;
  bottom: 0;
  padding: 0 18px;
  border-radius: 3px;
  cursor: pointer;
}
#newsletterForm button span {
  color: #fff;
  font-size: 16px;
}
.follow li {
  display: inline-block;
  height: 36px;
  width: 36px;
  line-height: 38px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  opacity: 1 !important;
}
.follow li:last-child {
  margin-right: 0px;
}
.follow li.facebook i {
  color: #3b5998;
}
.follow li.facebook:hover {
  background-color: #3b5998;
  transition: 0.3s all;
}
.follow li.facebook:hover i,
.follow li.twitter:hover i,
.follow li.instagram:hover i,
.follow li.google:hover i,
.follow li.youtube:hover i {
  color: #fff;
}
.follow li.twitter i {
  color: #1da1f2;
}
.follow li.twitter:hover {
  background-color: #1da1f2;
  transition: 0.3s all;
}
.follow li.instagram i {
  color: #f56040;
}
.follow li.instagram:hover {
  background-color: #f56040;
  transition: 0.3s all;
}
.follow li.google i {
  color: #dd4b39;
}
.follow li.google:hover {
  background-color: #dd4b39;
  transition: 0.3s all;
}
.follow li.youtube i {
  color: #cd201f;
}
.follow li.youtube:hover {
  background-color: #cd201f;
  transition: 0.3s all;
}
.follow li i {
  font-size: 18px;
}
.site-footer .footer-copyright {
  background-color: #1c1c1c;
  padding: 30px 0;
}
.site-footer .footer-copyright p {
  color: #ffffff;
  float: left;
  opacity: 0.7;
}
.site-footer .footer-copyright a.back-top {
  float: right;
  color: #fff;
  opacity: 0.7;
}
.site-footer .footer-copyright a.back-top i {
  margin-left: 10px;
  width: 10px;
  height: 10px;
  margin-bottom: 5px;
  vertical-align: middle;
  line-height: normal;
  
  opacity: 1;
}
.site-footer .footer-copyright a.back-top:hover {
  color: #00a6eb;
}
/* Start a Campaign */
.process-model {
  list-style: none;
  padding: 0;
  position: relative;
  width: 100%;
  margin: 20px auto 80px;
  border: none;
  z-index: 0;
}
.process-model li:last-child::after {
  width: 0;
}
.process-model li {
  display: inline-block;
  width: 14.2%;
  text-align: center;
  float: none;
  position: relative;
}
.nav-tabs.process-model > li.active > a,
.nav-tabs.process-model > li.active > a:hover,
.nav-tabs.process-model > li.active > a:focus,
.process-model li a:hover,
.process-model li a:focus {
  border: none;
  background: transparent;
}
.process-model li a {
  padding: 0;
  border: none;
  color: #6bd3ff;
}
.process-model li a p {
  color: #222;
}
.process-model li.active,
.process-model li.visited {
  color: #00a6eb;
}
.process-model li.active span,
.process-model li.visited span,
.process-model li.active a:focus,
.process-model li.visited a,
.process-model li.visited a:hover,
.process-model li.visited a:focus {
  color: #6bd3ff;
}
.process-model li span {
  display: block;
  height: 100px;
  width: 100px;
  text-align: center;
  margin: 0 auto;
  background-color: #08aded;
  border: 8px solid #08aded;
  line-height: 84px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}
.process-model li span img {
  width: auto;
  height: auto;
}
.process-model li:nth-child(1).active span,
.process-model li:nth-child(1).visited span {
  border-color: #00a6eb;
}
.process-model li.active span,
.process-model li.visited span {
  border-color: #6bd3ff;
  background-color: #00a6eb;
  transition: all 0.3s ease-in-out;
}
.process-model li p {
  font-size: 14px;
  margin-top: 11px;
}
.process-model.contact-us-tab li.visited a,
.process-model.contact-us-tab li.visited p {
  color: #606060 !important;
  font-weight: normal;
}
.process-model.contact-us-tab li::after {
  display: none;
}
.process-model.contact-us-tab li.visited span {
  border-color: #e5e5e5;
}
.start-form .field {
  margin-bottom: 20px;
}
.start-form .field-inline {
  margin: 0 -10px;
}
.start-form .field-inline:after {
  content: '';
  display: block;
  clear: both;
}
.start-form .field-inline .field {
  width: 50%;
  display: inline-block;
  float: left;
  padding: 0 10px;
}
.start-form .field textarea {
  width: 100%;
}
.start-form .field-p p,
.start-form .field-p label {
  display: inline-block;
}
.start-form .field-p p {
  font-weight: 500;
}
.start-form label {
  margin-bottom: 10px;
  display: block;
  font-weight: 400;
}
.start-form label span {
  color: #ff324b;
}
.start-form input {
  font-style: normal;
}
.start-form .field span.label-desc {
  color: #a8a8a8;
  margin-bottom: 10px;
  display: inline-block;
}
.start-form .field span.label-desc a {
  display: inline-block;
  color: #a8a8a8;
  text-decoration: underline;
}
.field-light {
  position: relative;
}
.field-light .light,
.verification-main .light {
  margin-left: 5px;
  color: #00a6eb;
}
.verification-main .light {
  font-size: 14px;
}
.ver-content {
  display: inline-block;
  position: relative;
}
.start-form .field .ql-editor {
  height: 100px;
}
.field-light .light:hover + .light-hover,
.verification-main .light:hover + .light-hover {
  display: block;
}
.field-light .light-hover,
.verification-main .light-hover {
  position: absolute;
  width: 300px;
  background-color: #323232;
  color: #fff;
  padding: 10px 20px;
  text-align: justify;
  z-index: 9;
  top: -10px;
  left: 170px;
  display: none;
}
.ver-content .light-hover {
  left: 30px;
  font-size: 14px;
}
#ms-tagbox,
#start-tag,
#key-featuries,
#key-features {
  padding: 0;
  border-radius: 0;
  padding: 12px 0;
  box-shadow: none;
  border: 1px solid #ededed;
}
.campaign-detail #key-features,
.campaign-detail .key-features .kf-menu li {
  border: 0;
}
#ms-tagbox .ms-sel-ctn,
#key-features .ms-sel-ctn,
#key-featuries .ms-sel-ctn,
#start-tag .ms-sel-ctn {
  margin-left: 0;
  padding-left: 10px;
}
#ms-tagbox .ms-sel-ctn input,
#key-features .ms-sel-ctn input,
#key-featuries .ms-sel-ctn input,
#start-tag .ms-sel-ctn input {
  border: 0;
  height: auto;
  float: none;
  /*  width: 100% !important; */
  padding: 0 5px;
}
#ms-tagbox .ms-trigger .ms-trigger-ico,
#key-features .ms-trigger .ms-trigger-ico,
#key-featuries .ms-trigger .ms-trigger-ico,
#start-tag .ms-trigger .ms-trigger-ico {
  margin-top: 23px;
  margin-left: 18px;
}
#ms-tagbox.ms-ctn .ms-trigger,
#key-features.ms-ctn .ms-trigger,
#key-featuries.ms-ctn .ms-trigger,
#start-tag.ms-ctn .ms-trigger {
  width: 45px;
  border-left: 1px solid #ededed;
  display: none;
}
.reminder {
  margin-bottom: 60px;
}
.reminder p {
  margin-bottom: 20px;
}
.reminder h4 {
  font-weight: 400;
  margin-bottom: 8px;
}
#story .pane-box {
  display: none;
}
#story .pane-box.active {
  display: block;
}
.pane-tab {
  margin-bottom: 40px;
}
.pane-tab ul {
  letter-spacing: -0.3em;
}
.pane-tab li.active {
  background-color: #2a2a2a;
  color: #fff;
  border-color: #2a2a2a;
}
.pane-tab li {
  display: inline-block;
  list-style: none;
  padding: 7px 12px;
  letter-spacing: normal;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #dddddd;
  cursor: pointer;
}
.perk-shipping,
.pane-overview {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #eee;
}
.perk-shipping {
  margin-bottom: 40px;
}
.pane-overview h4,
.perk-shipping h4 {
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 24px;
}
.perk-shipping p,
.pane-overview p {
  margin-bottom: 30px;
}
.pane-overview a.learn-more {
  display: inline-block;
  text-decoration: underline;
}
.pane-overview #editor {
  margin-bottom: 50px;
}
.perk-title p a,
.perk-text p a {
  display: inline-block;
  text-decoration: underline;
}
.perk-title p {
  margin-bottom: 60px;
}
.perk-text p:nth-child(3) {
  margin-bottom: 20px;
}
.field-radio:after,
.start-popup .spopup-title:after,
.perk-action:after {
  content: '';
  display: block;
  clear: both;
}
.field-radio input {
  width: auto;
  -webkit-appearance: radio;
  -ms-appearance: radio;
  -moz-appearance: radio;
  float: left;
  height: 21px;
}
.field-radio label {
  margin-left: 23px;
}
.field-price {
  position: relative;
}
.field-price input {
  padding: 0 70px 0 40px;
}
.field-price .price-unit,
.field-price .price-character {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  line-height: 46px;
  padding: 0 15px;
}
.field-price .price-unit {
  left: inherit;
  right: 1px;
  top: 1px;
  bottom: 1px;
  z-index: 1;
  background-color: #fff;
}
#perks .start-form {
  display: none;
}
.perk-action .perk-button {
  float: left;
}
.perk-action .perk-select {
  float: right;
  margin-top: -31px;
}
.perk-action .perk-select label {
  margin-bottom: 10px;
}
.perk-action .perk-select select {
  width: 200px;
}
.perk-title {
  margin-bottom: 30px;
}
.perk-table table {
  width: 100%;
}
.perk-table table th,
.perk-table table td {
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  padding: 15px;
}
.perk-table table th:first-child,
.perk-table table td:first-child {
  border-left: 1px solid #c8c8c8;
}
.perk-table table th:last-child,
.perk-table table td:last-child {
  border-right: 1px solid #c8c8c8;
}
.spopup-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: none;
}
.start-popup {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  max-width: 500px;
  background-color: #fff;
  z-index: 100;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: none;
}
.start-popup .spopup-title {
  background-color: #fbfbfa;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px 20px;
}
.start-popup .spopup-title h3 {
  float: left;
  line-height: 42px;
}
.start-popup .spopup-title .spopup-close {
  float: right;
  font-size: 28px;
  cursor: pointer;
}
.start-popup .spopup-content,
.spopup-desc {
  padding: 20px;
}
.spopup-desc {
  padding-bottom: 0;
}
.item-popup .field-checkbox label {
  width: 95%;
}
.spopup-desc a {
  display: inline-block;
  text-decoration: underline;
}
.start-popup .spopup-content li {
  list-style: none;
  margin-top: 20px;
}
.start-popup .spopup-content li h4 {
  margin-bottom: 10px;
}
.field-cat,
.reward-title {
  margin-bottom: 20px;
}
.reward-top:after {
  content: '';
  display: block;
  clear: both;
}
.reward-title {
  float: left;
}
.reward-delete {
  float: right;
}
.field-checkbox label {
  float: right;
  width: 98%;
  font-weight: 400;
}
.field-checkbox {
  position: relative;
}
.field-checkbox input {
  visibility: hidden;
  padding: 0;
  height: auto;
  width: auto;
}
.field-checkbox label span {
  height: 14px;
  width: 14px;
  border: 1px solid #ddd;
  display: block;
  position: absolute;
  top: 3px;
  left: 0;
  background-color: #fff;
}
.field-checkbox input[type='checkbox'] {
  -webkit-appearance: checkbox;
  -ms-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  height: auto;
  width: auto;
  float: left;
  margin-top: 4px;
}
.field-checkbox input:checked + label span:before {
  content: '\f00c';
  font-family: fontAwesome;
  position: absolute;
  top: -4px;
  color: #00a6eb;
}
.field-checkbox:after {
  content: '';
  display: block;
  clear: both;
}
.item-table {
  width: 300px;
  margin-bottom: 20px;
}
.item-table th,
.item-table td {
  border: 1px solid #ededed;
  padding: 10px 20px;
}
.item-table td:first-child {
  width: 60%;
}
.add-reward {
  text-align: center;
  border: 1px dashed #ccc;
  padding: 30px 0;
  margin-bottom: 40px;
}
.add-reward:hover {
  background-color: #00a6eb;
  color: #fff;
  border-color: #00a6eb;
}
.start-box {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ededed;
}
.start-box h4 {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
}
.start-box p {
  margin-bottom: 20px;
}
.start-box p a {
  display: inline-block;
  text-decoration: underline;
}
.start-form .field-a a {
  display: inline-block;
}
.fb-content {
  display: none;
}
/* Home Gradient */
.home-gradient .btn-primary {
  background: #08aded;
  background: linear-gradient(90deg, #20ccdf, #00a6eb);
}
.home-gradient .btn-secondary {
  border: 0;
  line-height: 42px;
  border: 2px solid #20ccdf;
  border-image-source: linear-gradient(90deg, #20ccdf, #00a6eb);
  border-image-slice: 2;
  position: relative;
}
.home-gradient .btn-primary:hover,
.home-gradient .btn-secondary:hover {
  background: linear-gradient(90deg, #20ccdf, #00a6eb);
}
.home-gradient .campaign-item a.overlay,
.home-gradient .post a.overlay {
  background: #08aded;
  background: linear-gradient(90deg, #20ccdf, #00a6eb);
}
.home-gradient .item-work .item-icon {
  border: 0;
  background: linear-gradient(90deg, #20ccdf, #00a6eb);
}
.home-gradient .item-work .item-icon:before {
  position: absolute;
  border-radius: 50%;
  content: '';
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: #f5f6f6;
}
.home-gradient .item-work .item-icon i {
  position: relative;
  background: -webkit-linear-gradient(90deg, #20ccdf, #00a6eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-gradient #newsletterForm button {
  background: #08aded;
  background: linear-gradient(90deg, #20ccdf, #00a6eb);
}
#thumbbox img,
#thumbbox1 img,
#thumbbox2 img {
  display: none;
}
#boxchoice p,
#boxchoice1 p,
#boxchoice2 p {
  clear: both;
}
@media screen and (min-width: 1200px){
	.container{
		max-width: 1200px;
	}
}
@media screen and (max-width: 1200px){
	.site-header .login,
	.site-header .search-icon,
	.site-header .main-menu{
		margin-left: 30px;
	}
	.site-header .main-menu ul li{
		margin-left: 20px;
	}
	.site-main .sideshow .sideshow-content h1{
		font-size: 38px;
	}
	.section .section-item .section-box .process .process-info div span{
		margin-right: 55px;
	}
	.staff-picks.section .staff-picks-item .staff-picks-item-content .process-info div span{
		margin-right: 60px !important;
	}
	.campaign-big-box .process .process-info span,
	.campaign-content .campaign-box .process .process-info span{
		margin-right: 45px !important;
	}
	.top-site{
		height: 600px;
	}
	.top-site .container{
		top: 140px;
	}
	.statics-content .statics-item{
		min-height: 210px;
	}
	.campaign-detail .button .btn-secondary,
	.campaign-detail .button .btn-primary{
		margin-right: 0;
	}
	.product-table tr td,
	.product-table tr th{
		padding: 15px;
	}
	.coupon-form form input{
		width: 65%;
	}
	.project-love-item a.project-love-image,
	.project-love-item a.project-love-image img{
		width: 100%;
	}
	.pls-col .project-love-item a.project-love-image,
	.pls-col .project-love-item a.project-love-image img{
		width: 370px;
	}
	.project-love-item a.project-love-image{
		margin-bottom: 20px;
	}
	.project-love-item .project-love-item-content{
		padding: 0;
	}
	.project-love .col-lg-4,
	.project-love .col-lg-8{
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
	.popular-project{
		margin-bottom: 40px;
	}
	.popular-project{
		height: auto;
		padding: 20px 0 30px;
	}
}
@media screen and (max-width: 992px){
	.payment-img{
		float: none;
		margin-bottom: 30px;
	}
	.footer-top .footer-top-right{
		float: none;
	}
	.footer-top-right .dropdow:nth-child(1){
		margin: 0;
		width: 48%;
		float: left;
	}
	.footer-top .footer-top-right:after{
		content: '';
		display: block;
		clear: both;
	}
	.footer-top-right .dropdow:nth-child(2){
		margin: 0;
		width: 48%;
		float: right;
	}
	.pls-col .project-love-item a.project-love-image,
	.pls-col .project-love-item a.project-love-image img{
		width: 100%;
	}
	.pls-col .project-love-item .project-love-item-content{
		margin: 30px 0 0 0;
	}
	.pls-col .project-love-item a.project-love-image{
		float: none;
	}
	.bx-wrapper{
		margin-bottom: 0;
	}
	.site-header{
		height: auto;
		z-index: 9;
		position: relative;
		background-color: #fff;
	}
	.c-hamburger{
		display: block;
	}
	.main-menu ul{
		position: fixed;
		z-index: 999999;
		background-color: #fff;
		top: 80px;
		left: -240px;
		margin-left: 0;
		border-top: 1px solid #00a6eb;
		width: 240px;
		transition: all 0.4s;
	}
	.home-top .main-menu ul{
		top: 125px;
	}
	.main-menu.open ul{
		left: 0;
	}
	body.menu-open:before{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
		background: rgba(0, 0, 0, 0.6);
		content: "";
		z-index: 9;
		transition: all 0.3s ease-in-out 0s;
		-moz-transition: all 0.3s ease-in-out 0s;
		-o-transition: all 0.3s ease-in-out 0s;
		-webkit-transition: all 0.3s ease-in-out 0s;
		-ms-transition: all 0.3s ease-in-out 0s;
	}
	.site-header .main-menu ul li{
		display: block;
		margin-left: 0;
		line-height: normal;
		border-bottom: 1px dashed #ccc;
	}
	.site-header .main-menu ul li:last-child{
		border-bottom: 0;
	}
	.site-header .main-menu ul li a{
		padding: 13px 15px;
	}
	.site-header .login,
	.site-header .search-icon{
		margin-left: 15px;
	}
	.site-main .sideshow .sideshow-content{
		max-width: 100%;
		width: auto;
		padding-right: 15px;
	}
	.site-main .sideshow{
		height: 400px;
	}
	.site-main .section,
	.campaign,
	.explore,
	.project-love{
		padding: 60px 0 0;
	}
	.staff-picks{
		padding: 30px 0 0;
	}
	.campaign .campaign-item{
		margin-bottom: 30px;
	}
	.campaign-box .process .process-info div span{
		margin-right: 150px !important;
	}
	.staff-picks .staff-picks-item a.staff-picks-image{
		float: none;
	}
	.staff-picks .staff-picks-item a.staff-picks-image img{
		width: 100%;
	}
	.staff-picks .staff-picks-item .staff-picks-item-content{
		padding: 0;
		margin-top: 15px;
	}
	.staff-picks-item-content .staff-picks-description{
		height: auto;
		max-height: initial;
		overflow: initial;
		margin-bottom: 10px;
	}
	.staff-picks.section .staff-picks-item .staff-picks-item-content .process-info div span{
		margin-right: 150px !important; 
	}
	.main-menu ul li i{
		display: inline-block;
		float: right;
		line-height: 18px;
	}
	.main-menu ul li > .sub-menu{
		position: static;
		width: auto;
		opacity: 1;
		visibility: visible;
		border-top: 1px dashed #ccc;
		display: none;
		transition: all 0.4s;
	}
	.main-menu ul li > .sub-menu li{
		padding-left: 20px;
		border-top: 0;
	}
	.partners{
		padding: 30px 0;
	}
	.footer-menu-item.newsletter,
	.campaign-history{
		margin-top: 30px;
	}
	.site-footer .footer-menu{
		padding: 30px 0 20px;
	}
	.video iframe{
		max-width: 100%;
	}
	.statics-content .statics-item{
		min-height: 161px;
		margin-bottom: 30px;
	}
	.team-item,
	.comment-respond{
		margin-bottom: 30px;
	}
	.blog-grid.full-width .post{
		width: 50%;
	}
	.page-title,
	.latest{
		margin-bottom: 60px;
	}
	.site-main{
		padding-bottom: 60px;
	}
	.main-content{
		margin-bottom: 30px;
	}
	.campaign-detail .campaign-image,
	.campaign-detail .campaign-image img,
	.campaign-detail .campaign-box{
		width: 100%;
		float: none;
	}
	.campaign-detail .campaign-box{
		padding-left: 0;
		margin-top: 10px;
	}
	.campaign-detail .button .btn-secondary{
		margin-left: 8px;
	}
	.campaign-detail .campaign-box .campaign-description{
		max-height: 100% !important;
	}
	.campaign-tabs .campaign-content{
		margin-bottom: 30px;
	}
	.calculate-shipping{
		margin-bottom: 30px;
	}
	.coupon-form form input{
		width: 78%;
	}
	.coupon-form form{
		margin-bottom: 15px;
	}
	.coupon-form .button{
		float: none;
	}
	.order-notes{
		margin-bottom: 30px;
	}
	.coming-soon .site-header{
		background-color: initial;
	}
	.contact-content .entry-content,
	.form-contact,
	.contact-info{
		height: auto;
	}
	.form-contact,
	.blognews{
		margin-bottom: 30px;
	}
	.maps #map{
		margin-top: 30px;
	}
	.how-it-work{
		padding: 60px 0;
		margin-top: 60px;
	}
	.item-work .item-content h3{
		margin-bottom: 5px;
	}
	.item-work:after{
		content: '';
		clear: both;
		display: block;
	}
	.item-work,
	.blognews-content .post{
		margin-bottom: 30px;
	}
	.campaign-big-item a.campaign-big-image {
    float: none;
  }
	.campaign-big-item a.campaign-big-image img{
    width: 100%;
	}
	.campaign-big-item .campaign-big-box{
		padding: 20px;
		margin: 0;
	}
	.campaign-big-box .process .process-info span{
		margin-right: 100px !important;
	}
	.process-model li{
		padding: 0 10px;
	}
	.process-model li span{
		width: auto;
		height: 80px;
		line-height: 68px;
		border: 6px solid #08aded;
	}
	.process-model li span img{
		width: 24px;
	}
	.process-model li::after{
		top: 40px;
	}
	.field-checkbox label{
		width: 96%;
	}
}
@media screen and (max-width: 767px){
	.site-main .sideshow .sideshow-content h1{
		font-size: 32px;
	}
	.site-main .sideshow .sideshow-content .sideshow-description{
		font-size: 14px;
	}
	.campaign-box .process .process-info div span{
		margin-right: 90px !important;
	}
	.campaign-history .tabs-controls li a{
		font-size: 14px;
	}
	.campaign-history .tabs-controls li{
		margin-right: 30px;
	}
	.product-table{
		overflow-x: auto; 
	}
	.product-table table{
		width: 767px;
	}
	.coupon-form form input{
		width: 100%;
		padding: 0 145px 0 15px;
	}
	.coming-soon .site-header{
		padding: 40px 0;
	}
	.coming-soon .site-footer .footer-copyright{
		padding: 40px;
	}
	.coming-soon .site-main .time{
		margin-top: 60px;
	}
	.coming-soon .site-main{
		padding: 0;
	}
	.coming-soon .site-main .time .time-item p{
		font-size: 60px;
	}
	.coming-soon .site-main .time .time-item span{
		margin-top: 10px;
	}
	.product{
		width: 33.33%;
	}
	.newsletter-popup{
		width: auto;
		margin: 0 30px;
	}
	.top-header{
		display: none;
	}
	.description.left-description{
		width: 65%;
	}
	.campaigns-action .sort,
	.campaigns-action .filter{
		float: none;
	}
	.campaigns-action .sort{
		margin-bottom: 15px;
	}
	.process-model li span{
		height: 52px;
		border-width: 4px;
		line-height: 44px;
	}
	.process-model li::after{
		top: 26px;
	}
	.process-model li span img{
		width: 18px;
	}
	.process-model li a p{
		font-size: 12px;
	}
	.site-footer .footer-top{
		padding-top: 0px;
	}
	.footer-top .copyright{
		float: none;
	}
	.footer-menu .footer-menu-item li{
		margin-bottom: 20px;
	}
	.campaign-content .col-6{
		width: 100%;
		flex: initial;
		max-width: 100%;
	}
	.home-top .main-menu ul{
		top: 80px;
	}
	.campaign-content .campaign-box .process .process-info span{
		margin-right: 100px !important;
	}
}
@media screen and (max-width: 576px){
	.site-header .login a{
		font-size: 0;
		padding: 0 14px;
	}
	.site-header .login-button a:before{
		content: "\f13e";
		font-size: 16px;
		font-family: FontAwesome;
	}
	.site-header .login,
	.site-header .search-icon{
		margin-left: 10px;
	}
	.c-hamburger{
		right: 100px;
	}
	.site-main .sideshow{
		height: 450px;
	}
	.process .process-info div{
		margin-bottom: 20px;
	}
	.section .section-item .section-box .process .process-info div span{
		margin-right: 70px;
	}
	.explore .col-6,
	.team-content .col-6,
	.statics-content .col-6{
		width: 100%;
		flex: initial;
		max-width: 100%;
	}
	.project-love .process .process-info span,
	.project-love .campaign-big-box .process .process-info span{
		font-size: 14px;
		margin-right: 0px !important;
	}
	.project-love .process .process-info div{
		width: 50%;
	}
	.process .process-info{
		margin-bottom: 20px;
	}
	.campaign-item .process .process-info div,
	.campaign-item .process .process-info{
		margin-bottom: 0px;
	}
	.staff-picks-content .owl-controls{
		display: none;
	}
	.staff-picks-author .author-address,
	.staff-picks-author .author-profile{
		float: none;
		display: block;
	}
	.staff-picks-author .author-address{
		text-align: left;
		margin-top: 10px;
	}
	.latest{
		margin-bottom: 30px;
	}
	.latest .latest-button{
		margin-top: 0;
	}
	.footer-menu .col-4{
		width: 50%;
		margin-bottom: 30px;
	}
	.footer-menu .col-12{
		width: 50%;
	}
	.footer-menu-item.newsletter{
		margin: 0;
	}
	.site-footer .footer-menu,
	.project-love{
		padding: 30px 0 0 0;
	}
	.site-footer .footer-copyright{
		padding: 20px 0;
	}
	.page-title{
		margin-bottom: 60px;
		min-height: 180px;
	}
	.site-main{
		padding-bottom: 60px;
	}
	.top-site h1{
		font-size: 24px;
		max-width: 100%;
	}
	.top-site{
		height: 500px;
	}
	.top-site .container{
		top: 100px;
	}
	.video iframe{
		height: 300px;
	}
	.video .video-wrapper{
		margin-top: -150px;
	}
	.statics-content .statics-item{
		min-height: auto;
	}
	.page-title h1{
		font-size: 24px;
	}
	.blog-grid.full-width .post,
	.blog-grid .post{
		width: 100%;
	}
	.page-navigation{
		margin-top: 0;
	}
	.page-title,
	.story{
		margin-bottom: 30px;
	}
	.site-main{
		padding-bottom: 30px;
	}
	.campaign-detail .campaign-price{
		margin-bottom: 15px;
	}
	.campaign-detail .button .btn-secondary{
		margin-left: 0;
	}
	.campaign-detail .button .btn-primary{
		margin-right: 8px;
	}
	.campaign-history{
		margin-top: 0;
	}
	.campaign-history .tabs-controls li{
		margin-right: 20px;
	}
	.campaign-history .tabs-controls li a{
		font-size: 12px;
	}
	.cart .main-content .col-6{
		width: 100%;
		flex: initial;
		max-width: 100%;
	}
	.coupon-form .button .update-cart{
		margin-right: 8px;
	}
	.coming-soon .site-main .desc{
		width: 100%;
	}
	.time .col-3{
		width: 50%;
		margin-bottom: 30px;
	}
	.coming-soon .site-main .button{
		margin-top: 20px;
	}
	.coming-soon .site-footer .footer-copyright p{
		float: none;
		margin: 0 0 15px 0;
		text-align: center;
	}
	.coming-soon .site-footer .footer-copyright .follow{
		float: none;
		text-align: center;
	}
	.campaigns .campaign-content .col-6{
		width: 100%;
		flex: initial;
		max-width: 100%;
	}
	.product{
		width: 50%;
	}
	.newsletter-popup{
		height: 380px;
	}
	.form-content form input{
		position: relative;
		width: 100%;
	}
	.form-content form button{
		position: relative;
		width: 100%;
		margin-top: 20px;
	}
	.coming-soon .site-main .time li{
		width: 50%;
		margin-bottom: 30px;
	}
	.project-love .col-9,
	.project-love .col-3{
		width: 100%;
		flex: initial;
		max-width: 100%;
	}
	.project-love .tab-menu{
		padding-left: 100px;
	}
	.project-love .tab-menu{
		padding: 0;
		margin-top: 20px;
	}
	ul.menu-category{
		border-left: 0;
		border-top: 1px solid #ededed;
		letter-spacing: -0.3em;
	}
	ul.menu-category li{
		display: inline-block;
		width: 33.33%;
		letter-spacing: normal;
	}
	ul.menu-category li.active::before,
	ul.menu-category li.active::after{
		display: none;
	}
	ul.menu-category li{
		padding: 0 5px;
	}
	ul.menu-category li.active a{
		color: #00a6eb;
	}
	.project-love .tab-menu a.all-project{
		left: 5px;
		top: -30px;
	}
	.how-it-work{
		padding: 30px 0;
		margin-top: 0;
	}
	.process-model li span{
		width: 50px;
		height: 50px;
		line-height: 40px;
	}
}
@media screen and (max-width: 450px){
	.footer-menu .col-4,
	.footer-menu .col-12{
		width: 100%;
		flex: initial;
		max-width: 100%;
	}
	.site-footer .footer-copyright p,
	.site-footer .footer-copyright a.back-top{
		font-size: 12px;
	}
	.campaign-box .process .process-info div span{
		margin-right: 50px !important;
	}
	.btn-secondary{
		margin-right: 10px;
	}
	.entry-content ul.post-meta li{
		margin-bottom: 5px;
	}
	.widget li,.widget li a{
		font-size: 14px;
	}
	.widget.widget-recent{
		margin-bottom: 0;
	}
	.widget.widget-search{
		padding: 0;
	}
	.widget{
		padding: 15px;
	}
	.widget-title{
		margin-bottom: 15px;
	}
	.campaign-history .tabs-controls{
		border: 0;
	}
	.campaign-history .tabs-controls li{
		display: block;
		padding-bottom: 5px;
		margin-bottom: 5px;
	}
	.campaign-history .tabs-controls li a{
		font-size: 14px;
	}
	.coupon-form .button button{
		width: 100%;
	}
	.coupon-form .button .update-cart{
		margin-right: 0;
		margin-bottom: 15px;
	}
	form .align-left,
	form .align-right{
		float: none;
		width: 100%;
		padding: 0;
	}
	form .align-left{
		margin-bottom: 30px;
	}
	.different-address label{
		font-size: 14px;
	}
	.maps #map{
		height: 300px;
	}
	.form-login .inline p,
	.form-login .btn-primary{
		float: none;
		display: block;
	}
	.form-login .inline p{
		margin-top: 10px;
	}
	.shop-slider .owl-controls .owl-page{
		height: 80px;
	}
	.reviews .reviews-vote .vote,
	.shop-grid-fillter p{
		float: none;
		margin-bottom: 10px;
	}
	.reviews .reviews-vote .btn-primary{
		float: none;
		display: block;
	}
	.product{
		width: 100%;
	}
	.shop-grid-fillter p,
	.shop-grid-fillter .field-select,
	.form-header img{
		float: none;
	}
	.form-header img{
		display: block;
		margin: 0 auto;
		margin-bottom: 10px;
		width: 60px;
		height: 60px;
	}
	.form-header{
		padding: 20px 30px;
	}
	.form-header .form-text{
		padding: 0;
	}
	ul.menu-category li{
		width: 50%;
	}
	.pls-col .process .process-info div{
		width: 50%;
	}
	.project-love .pls-col .process-info span{
		margin: 0 !important;
	}
	.process-model li{
		width: 20%;
	}
	.process-model{
		position: relative;
		padding-top: 100px;
		margin: 20px auto;
	}
	.process-model li:first-child{
		position: absolute;
		top: 0;
		left: 0;
	}
	.process-model li:last-child{
		position: absolute;
		top: 0;
		right: 0;
	}
	.list-upload .file-upload{
		width: 50%;
	}
	.footer-top-right .dropdow:nth-child(1){
		margin: 0;
		width: 100%;
	}
	.footer-top-right .dropdow:nth-child(2){
		margin: 20px 0 0 0;
		width: 100%;
	}
	.sideshow-content .process .process-info span,
	.sideshow-content .campaign-big-box .process .process-info span{
		margin-right: 0 !important;
	}
	.sideshow-content .process .process-info div{
		width: 50%;
	}
	.sideshow-content .process .process-info{
		margin-bottom: 0;
	}
	.campaign-tabs button{
		margin-right: 25px;
	}
	.campaign-content .campaign-box .process .process-info span{
		margin-right: 50px !important;
	}
}
@media screen and (max-width: 360px){
	.site-header .login,
	.site-header .search-icon{
		margin-left: 6px;
	}
	.c-hamburger{
		right: 90px;
	}
	.site-main .sideshow{
		height: 500px;
	}
	.btn-secondary,
	.btn-primary{
		height: 38px;
		line-height: 34px;
		padding: 0 15px;
	}
	.btn-primary{
		line-height: 38px;
	}
	.site-main .section,
	.campaign,
	.explore{
		padding: 30px 0 0;
	}
	.staff-picks{
		padding: 10px 0 0;
	}
	.site-footer .footer-copyright a.back-top{
		font-size: 0;
	}
	.main-404 .btn-secondary,
	.main-404 .btn-primary{
		width: 100%;
		line-height: 42px;
		height: 42px;
	}
	.main-404 .btn-secondary{
		margin: 0 0 15px 0;
		line-height: 38px;
	}
	.top-site{
		height: 400px;
	}
	.top-site .container{
		top: 60px;
	}
	.statics-content .statics-item h3,
	.page-title h1,
	.coming-soon .site-main h2{
		font-size: 18px;
	}
	.title,.coming-soon .site-main h1{
		font-size: 24px;
	}
	.entry-content ul.list,
	.entry-content .quote{
		margin-left: 30px;
	}
	.title.left-title{
		font-size: 18px;
	}
	.entry-content ul.post-meta{
		margin: 15px 0;
	}
	.campaign-detail .campaign-price input{
		width: 100px;
		height: 38px;
	}
	.campaign-detail .process .process-info{
		margin-bottom: 0px;
	}
	.calculate-shipping .field .align-left,
	.calculate-shipping .field .align-right{
		float: none;
		padding: 0;
		width: 100%;
	}
	.calculate-shipping .align-left.field-select::after{
		right: 0;
	}
	.calculate-shipping .field .align-left{
		margin-bottom: 20px;
	}
	.coming-soon .site-main .time .time-item p{
		font-size: 40px;
		display: inline-block;
		line-height: 100px;
	}
	.coming-soon .site-main .time .time-item span{
		margin-top: 0;
	}
	ul.menu-category li{
		width: 50%;
	}
	.find-city form button{
		height: 46px;
	}
	.campaigns-action .filter span{
		margin-bottom: 10px;
	}
	.list-faq li a{
		font-size: 14px;
	}
	.campaign-tabs button{
		margin-right: 15px;
		font-size: 13px;
	}
	.campaign-content .campaign-box .process .process-info span{
		margin-right: 40px !important;
	}
}
.preview-btn {
  margin-top: 20px;
}

.autherN {
	font-size: 18px;
}

`;
