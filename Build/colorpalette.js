document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Navbar
    const navbarColor = button.getAttribute('data-nav');
    document.querySelector('header').style.backgroundColor = navbarColor;

    // Hero Section(Get Started)
    const heroButton = button.getAttribute('data-hero-button');
    document.querySelectorAll('.hero-buttons .btn-filled').forEach(btn => {
      btn.style.backgroundColor = heroButton;
      btn.style.color = 'white';
    });

    // Hero Section(Learn More)
    document.querySelectorAll('.hero-buttons .btn-outline').forEach(btn => {
      btn.style.borderColor = heroButton;
      btn.style.color = heroButton;
      btn.style.border = 'white';
      btn.style.backgroundColor = 'white';
    });

    // Color Stat(Number)
    const colorStatsNum = button.getAttribute('data-stat-num');
    document.querySelectorAll('.color-stats .stat-number').forEach(stat => {
      stat.style.color = colorStatsNum;
    });

    // Color Stat(Label)
    const colorStatsLabel = button.getAttribute('data-stat-label');
    document.querySelectorAll('.color-stats .stat-label').forEach(stat => {
      stat.style.color = colorStatsLabel;
    });

    // Container Design section
    const containerText = button.getAttribute('data-section-title');
    document.querySelector('.section-title').style.color = containerText;

    // Section-title 
    const iconCircleColor = button.getAttribute('data-icon');
    const iconCircleColor2 = button.getAttribute('data-icon2');
    const iconCircleColor3 = button.getAttribute('data-icon3')

    document.querySelectorAll('.card.outline-card .icon-circle').forEach(circle => {
      circle.style.background = iconCircleColor;
    });
    document.querySelectorAll('.card.soft-shadow-card .icon-circle').forEach(circle => {
      circle.style.background = iconCircleColor2;
    });
    document.querySelectorAll('.card.rounded-corners-card .icon-circle').forEach(circle => {
      circle.style.background = iconCircleColor3;
    });

    // Section-box-title
    const iconText = button.getAttribute('data-icon-text');
    const iconText2 = button.getAttribute('data-icon-text2');
    const iconText3 = button.getAttribute('data-icon-text3');

    document.querySelectorAll('.card.outline-card .icon-text').forEach(text => {
      text.style.color = iconText;
    });
    document.querySelectorAll('.card.soft-shadow-card .icon-text2').forEach(text => {
      text.style.color = iconText2;
    });
    document.querySelectorAll('.card.rounded-corners-card .icon-text3').forEach(text => {
      text.style.color = iconText3;
    });

    // Section-box-para
    const iconPara = button.getAttribute('data-icon-para');
    const iconPara2 = button.getAttribute('data-icon-para2');
    const iconPara3 = button.getAttribute('data-icon-para3');

    document.querySelectorAll('.card.outline-card .icon-para').forEach(para => {
      para.style.color = iconPara;
    });
    document.querySelectorAll('.card.soft-shadow-card .icon-para2').forEach(para => {
      para.style.color = iconPara2;
    });
    document.querySelectorAll('.card.rounded-corners-card .icon-para3').forEach(para => {
      para.style.color = iconPara3;
    });

    // Container header{
    const container1 = button.getAttribute('data-con1');
    const container2 = button.getAttribute('data-con2');

    document.querySelectorAll('.con1').forEach(con => {
      con.style.color = container1;
    });

    document.querySelectorAll('.con2').forEach(con => {
      con.style.color = container2;
    });

    // Container para{
    document.querySelectorAll('.para-1').forEach(para => {
      para.style.color = container1;
    });
    document.querySelectorAll('.para-2').forEach(para => {
      para.style.color = container2;
    });

    // Choose color palette section
    const paletteText = button.getAttribute('palette-text');
    document.querySelector('.section-h3').style.color = paletteText;

    document.querySelectorAll('.palette-section-wrapper .palette-section').forEach(link => {
      link.style.color = paletteText;
    });

    document.querySelectorAll('.palette-section').forEach(palette => {
      palette.style.color = "white";
      palette.style.border = "none";
      palette.style.backgroundColor = paletteText;
    });

    const dayLight = button.getAttribute('daylight-text');
    document.querySelector('.daylight-title').style.color = dayLight;
    
    // Back Button
    const backButton = button.getAttribute('back-button')
    document.querySelectorAll('.back-button').forEach(back => {
      back.style.color = "white";
      back.style.border = "none";
      back.style.backgroundColor = backButton;
    });

    const textElements = document.querySelectorAll('.header-text h3, .header-text p, .note, div.header-text');
    textElements.forEach(el => {
      el.style.color = dayLight;
    });

    const applyBorder = button.getAttribute('apply-button')
    document.querySelectorAll('.apply-btn').forEach(btn => {
      btn.style.background = applyBorder;
      btn.style.color = "white";
      btn.style.border = "none";
    });

    // Footer
    const footerBackground = button.getAttribute('footer-background')
    document.querySelector('.footer-custom').style.backgroundColor = footerBackground;

    document.querySelector('.email-address').style.border = "none";
    document.querySelector('.email-address').style.color = footerBackground;
    document.querySelector('.email-arrow').style.color = footerBackground;
  });
});