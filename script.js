const switchToggle = document.querySelector('input[type="checkbox"]')

// เราเข้าถึง Toggle Icon ซึ่งรวมอยู่ใน span
const toggleIcon = document.querySelector('#toggle-icon')

// Nav bar ให้มันเปลี่ยนสี
const nav = document.getElementById('nav');

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
    }
}

function darkMode() {
    toggleIcon.children[0].textContent="โหมดกลางคืน";
}

function lightMode() {
    toggleIcon.children[0].textContent="โหมดกลางวัน";
}

switchToggle.addEventListener('change', switchMode)

// Parts of Static and Blog

const blog_number = document.getElementById('blog-number');
const visitor_number = document.getElementById('visitor-number');
const current_number = document.getElementById('current-number');

function LoadStatics() {
    const staticData = {
        "statistics": {
          "totalBlogs": 10,
          "totalViews": 10279,
          "currentVisitors": 25
        }
      }
    // const res = await fetch('https://github.com/Celesca/Blog-Platform-v2/blob/main/data/static.json')
    // const staticData = await res.json();
    // console.log(staticData)
    
  blog_number.textContent = `${staticData.statistics.totalBlogs}`
  visitor_number.textContent = `${staticData.statistics.totalViews}`
  current_number.textContent = `${staticData.statistics.currentVisitors}`
}


LoadStatics();