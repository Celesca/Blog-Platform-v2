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

async function LoadTopBlog() {
    const res = await fetch('../data/blog.json')
    const blogData = await res.json()
    console.log(blogData.blogs)
    const blogDataList = blogData.blogs
    blogDataList.map((data) => {
        addBlog(data);
    })
}
  
  
LoadTopBlog();

async function searchBlogs(keyword) {
    list.innerHTML = ``
    const res = await fetch('../data/blog.json')
    const blogData = await res.json()
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

