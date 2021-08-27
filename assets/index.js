// Images from unsplash array
const images = [
    "https://images.unsplash.com/photo-1629934680935-9dad78d0de29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzI2OA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629048125171-3192bf5f4f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzI4Nw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1628429842402-df7206a54678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzI5NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627844570809-afbbb6028fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzM0MQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629018406978-5c8f1da48c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzM1NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629887571501-ac588e591d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzM2NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627336284014-0a8b0ccd3534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzM3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1628677419910-c1246f8eaf0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzM4NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627995058354-b824034342e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzM5NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627819376920-9faac124cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzQ0NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629058161906-e6b253fa2ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzQ4Mw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627729115599-cde66a14eb74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzQ5Mg&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629240579371-8e40539c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzUwMA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1628069410828-effad0eca3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzU0NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629532658406-fa4d96ffc670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzU1NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627440765112-680c1633c4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzU2Mg&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1628689814107-61cff402f7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzU3MA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627677244072-bb3b97b4c36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzU3Ng&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1628972799193-1a6be77e183e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzU4Mw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629666448297-56b25188f330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzYwMg&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1627933673020-3f1d67a557ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDA4NzY0Mg&ixlib=rb-1.2.1&q=80&w=1080"
];
//Desktop menu interaction
let navitems = document.getElementsByClassName("nav-button");
for (let i = 0; i < navitems.length; i++) {
  navitems[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("navbar-active");
  current[0].className = current[0].className.replace(" navbar-active", "");
  this.className += " navbar-active";
  });
}
let search_button = document.getElementsByClassName("search-button");

search_button[0].addEventListener("click", function() {
    let searchinput = document.getElementById("search-input");
    if(searchinput.classList.contains('hidden')){
       searchinput.classList.remove('hidden'); 
    }else{
        searchinput.classList.add('hidden');
    }
     
    
});


//Mobile menu interaction
let linkToggle = document.querySelector('.menu-ico');
linkToggle.addEventListener('click', function(event){
    event.preventDefault();
    let container = document.getElementById('mobile-menu');
    if (!container.classList.contains('active')) { 
      container.classList.add('active');
      container.style.height = 'auto';
      let height = container.clientHeight + 'px';
      container.style.height = '0px';
      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.style.height = '0px';
      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      });
    }
  });

  // Portfolio view change
  const btn_block = document.querySelector("#btn_block");
  const btn_col = document.querySelector("#btn_col");
  const gallery = document.querySelector("#gallery");

  btn_block.addEventListener('click', (e)=>{
      e.preventDefault();
      gallery.classList.remove('list-container');
      gallery.classList.add('masonry-container');
  });
  
  btn_col.addEventListener('click', (e)=>{
      e.preventDefault();
      gallery.classList.remove('masonry-container');
      gallery.classList.add('list-container');
  });







  //
  for(let i=0; i<15; i++){ 
    let img = document.createElement('img');
    img.src = images[i];
    let div = document.createElement('div');
    div.appendChild(img);
    gallery.appendChild(div);
  }
    const lookmore = ()=>{
        for(let i=15; i<images.length; i++){ 
            let img = document.createElement('img');
            img.src = images[i];
            let div = document.createElement('div');
            div.appendChild(img);
            gallery.appendChild(div);
          }
    }

