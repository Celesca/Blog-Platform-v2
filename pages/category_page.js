const list = document.getElementById('list')

function addBlog(blog) {

    const item = document.createElement('div');

    item.classList.add('col-xs-12')
    item.classList.add('col-sm-4')

    item.innerHTML = `<div class="card">
    <a class="img-card" href="blog.html">
    <img src="${blog.image}"/>
  </a>
    <div class="card-content">
        <h4 class="card-title">
            <a href="blog.html">${blog.title}
          </a>
        </h4>
        <div class="blog-profile d-flex">
        <a href="profile.html" class="linktoprofile"><img src="${blog.user}" class="user-pic"></a>
          <div class="d-flex user-box">
            <a href="profile.html" class="linktoprofile"><h6 class="ms-3 h6 card-text mt-1 user-name">Sonia</h6></a>
            <h6 class="ms-3 h6 card-text mt-1 min-read">7 min read</h6>
          </div>
        </div>
        <p class="">
            ${blog.content}
        </p>
    </div>
    <div class="card-read-more">
        <a href="blog.html" class="btn btn-link btn-block">
            อ่านเพิ่มเติม
        </a>
    </div>
</div>`
    
    // นำ  item เข้าไปเพิ่มที่ list โดยอ้างอิง list แล้วเพิ่ม element
    list.appendChild(item)

}

const blogData = {
    "blogs": [
      {
        "id": 1,
        "title": "How to Learn JavaScript",
        "category": "Programming",
        "content": "Lorem ipsum...",
        "author": "John Doe",
        "views": 1200,
        "image": "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_640.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 2,
        "title": "Tips for Healthy Living",
        "category": "Health",
        "content": "Lorem ipsum...",
        "author": "Jane Doe",
        "views": 800,
        "image": "https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 3,
        "title": "Go Far Away",
        "category": "Life",
        "content": "Lorem ipsum...",
        "author": "Jane",
        "views": 1500,
        "image": "https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 4,
        "title": "Data Structure",
        "category": "Programming",
        "content": "Lorem ipsum...",
        "author": "ST",
        "views": 1800,
        "image": "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_640.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 5,
        "title": "Fruits",
        "category": "Health",
        "content": "Lorem ipsum...",
        "author": "Xanxe",
        "views": 2500,
        "image": "https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 6,
        "title": "Wara",
        "category": "Life",
        "content": "Lorem ipsum...",
        "author": "Xannnmiuy",
        "views": 1879,
        "image": "https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 7,
        "title": "Coding for what",
        "category": "Programming",
        "content": "Lorem ipsum...", 
        "author": "Jane Doe",
        "views": 1170,
        "image": "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_640.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 8,
        "title": "Wanna go?",
        "category": "Life",
        "content": "Lorem ipsum...",
        "author": "Jane Doe",
        "views": 1200,
        "image": "https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 9,
        "title": "Go near",
        "category": "Health",
        "content": "Lorem ipsum...",
        "author": "Jane Doe",
        "views": 1579,
        "image": "https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      },
      {
        "id": 10,
        "title": "Zani fruits",
        "category": "Health",
        "content": "Lorem ipsum...",
        "author": "Jane Doe",
        "views": 1900,
        "image": "https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg",
        "user": "https://randomuser.me/api/portraits/men/94.jpg"
      }
    ]
  }
  

async function LoadTopBlog() {
    // const res = await fetch('../data/blog.json')
    // const blogData = await res.json()
    // console.log(blogData.blogs)
    const blogDataList = blogData.blogs
    blogDataList.map((data) => {
        addBlog(data);
    })
}
  
  
LoadTopBlog();

async function searchBlogs(keyword) {
    list.innerHTML = ``
    // const res = await fetch('../data/blog.json')
    // const blogData = await res.json()
    const blogDataList = blogData.blogs
    const sortList = blogDataList.filter(blog => blog.category.toLowerCase().includes(keyword.toLowerCase()));
    console.log(sortList)
    sortList.map((data) => {
        addBlog(data);
    })
  };

const FindBlog=()=> {
    console.log(select.value)
    searchBlogs(select.value)
}


const select = document.getElementById('select')
select.addEventListener('change', FindBlog);

