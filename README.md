<h1 align="left">Holla Amigos !</h1>

![Logos](/public/assets/image/logo-baru.png)



In this digital era, integration and connectifity are important. Both of them are important for modern enterprises because software is the ultimate value driver. Without software, enterprises got lack of important tools for growing or expanding their business.

But a software without integration and connectify ability are also have disadvantage. Imagine you have several databases and applications, but they can't communicating each other.

The purpose of this product is we offer the digital backbone made up of integration & API management, IoT & analytics and business transformation technologies.

## Overview
![Logos](/public/assets/image/overview.png)

## INGREDIENTS
- HTML
- CSS
- JavaScript
- External/Internal Source
  - Icon
  - Image
  - BBImages
  - Jquery
  - OwlCarousel
  - Materialize Icon set


## Development 
Before jump into code, we need to get an idea for designing a website. There are a lot of design sources out there. In this case, i using Dribble

![Logos](/public/assets/image/dribble.png)

### DESIGN
---
#### WEBSITE DESIGN
In my website design, i separate the design for several section like :
<ul>
  <li>Header</li>
  <li>Banner</li>
  <li>Main</li>
  <ul>
    <li>Feature Client</li>
    <li>Feature product 1</li>
    <li>Feature product 2</li>
    <li>Our Client</li>
  </ul>
  <li>Footer</li>
</ul>

![Logos](/public/assets/image/section.png)

#### HTML SLICING DESIGN
---
After separate the design for specific section, now we do design slicing from image to static HTML

<ol>
  <li>
       The header section include website logo and navigation bar. The navigation bar itself have 2 types, there are navigation for desktop and mobile ( hamburger ). The idea of this section is make parent-child structure. So the navigation bar will have same parent at header class

![Logos](/public/assets/image/code-header.png)

  </li>
  <li>
       The main section is wrapping product information include additional product feature and the existing clients of product

![Logos](/public/assets/image/code-main.png)

  </li>
  <li>
       The client highlight section is showing the highlight companies that use the product. In this section also have parent-child structure. So the clients images have sme parent class

![Logos](/public/assets/image/code-feature.png)

  </li>
  <li>
       The orchestra section is showing the product feature for orchestration data.

![Logos](/public/assets/image/code-orchestra.png)

  </li>
  <li>
       The integrate section is showing the product feature for integration data feature.

![Logos](/public/assets/image/code-integrate.png)

  </li>  
  <li>
       The client section is showing all companies that using this product. Clients section using carousel to showcase companies logo

![Logos](/public/assets/image/code-client.png)

  </li>
  <li>
       The footer section is showing company information include address, phone number and email

![Logos](/public/assets/image/code-footer.png)

  </li>
</ol>

### CSS STYLING
---
The CSS styling is following responsive website design pattern.
So the website can access normally from cross-device


![Logos](/public/assets/image/responsive.jpg)

#### Header
---

Basically responsive for header part is make navigation bar for desktop hidden and the hamburger icon will shown. And also for overlay menu mobile will be shown when we click the hamburger button.

![Logos](/public/assets/image/header-resp-576.png)

I did the tablet style same as mobile. So at the tablet, the desktop menu will be hidden and the hamburger icon will shown.

![Logos](/public/assets/image/header-resp-768.png)

For the rest ( Desktop style ) , navigation desktop will be shown and the mobile will be hidden include the overlay menu.

![Logos](/public/assets/image/header-resp-1201.png)

#### Body / Main
---

For this section, the styling for each section mostly using flex. Why i choose flex over grid? Simplicity. For responsive design, you can simply set the flex direction and flex wrap and the rest will be adjust

At the mobile device, the flex direction will become to column, so the div will be stack up and down. The rest element like paragraph, heading size will be adjust to the minimal size due to readability

![Logos](/public/assets/image/global-resp-576.png)

At the tablet device, the style same as mobile. The difference only at font size

![Logos](/public/assets/image/global-resp-768.png)

And the rest at desktop, the style will be back from flex direction column to row and also the font size will be adjust

![Logos](/public/assets/image/global-resp-1201.png)

### JS Integration
The role of JS on a website is allows us to add dynamic behavior to the webpage and add special effects to the webpage. Like smooth scrolling when we click a link page, carousel ( slider image ) and also scrolling effect

#### Jquery
---
> jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax ( Wikipedia )

There are several ways to install and use jQuery. The simplest way is using CDN<br>
Copy paste this code and put at the head tag
```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

#### The Magic of Jquery
---
As we know that Jquery is a JavaScript library that used for building dynamic UI and CSS animation, so i used Jquery in several feature

<ol>
  <li>
      Navigation Bar ( Hamburger ) <br>
      This snippet explain that when hamburger icon clicked, the close icon will be shown and the hamburger icon will be hide


  ![Logos](/public/assets/image/js-header.png)
  ![](/public/assets/gif/header-navbar.gif)

  </li>
  <li>
      Scrolling Effect <br>
      This snippet explain when we scroll until specific div class, the opacity value will be set to "1" and it makes Fade In effect to div itself. And also when we click a link, it will scroll with animation to the link target


  ![Logos](/public/assets/image/js-scroll.png)
  ![](/public/assets/gif/smooth-scroll.gif)

  </li>
  <li>
      Image Carousel <br>
      This snippet explain about OwlCarousel settings like autoloop, autoplay and also image shown for each breakpoints. Don't forget to embed the OwlCarousel plugin to your head tag html

```html
 <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
```

  And also embed the OwlCarousel stylesheet then put at the head tag html

```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css">
```

  ![Logos](/public/assets/image/js-carousel.png)
  ![](public/assets/gif/client-carousel.gif)
  </li> 
</ol>

## Reach Me Out

[![Linkedin Badge](https://img.shields.io/badge/-Ade_Kresna_D-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ade-kresna-dewantara/)
[![Gmail Badge](https://img.shields.io/badge/-kresnafti2013@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:kresnafti2013@gmail.com)
