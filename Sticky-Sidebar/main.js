const sidebar = document.querySelector(".sidebar");
const sidebar_content = document.querySelector(".content-wrapper");

function sidebarSticky() {
  let scrollTop = window.scrollY;
  let viewportHeight = window.innerHeight;
  //   let contentHeight = sidebar_content.getBoundingClientRect().height;
  let contentHeight = sidebar_content.offsetHeight;
  let sidebarTop = sidebar.getBoundingClientRect().top + scrollTop; //distance from top to sidebar

  if (scrollTop >= contentHeight - viewportHeight) {
    sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
    sidebar_content.style.position = "fixed";
  } else {
    sidebar_content.style.transform = "";
    sidebar_content.style.position = "";
  }
}

window.addEventListener("scroll", sidebarSticky);

// window.onscroll = () => {
//   let scrollTop = window.scrollY;
//   let viewportHeight = window.innerHeight;
//   let contentHeight = sidebar_content.getBoundingClientRect().height;
//   let sidebarTop = sidebar.getBoundingClientRect().top + scrollTop; //distance from top to sidebar

// //   console.log(sidebar.getBoundingClientRect().top , scrollTop);
// //   console.log(scrollTop, viewportHeight, contentHeight);

//   if(scrollTop >= contentHeight - viewportHeight ) {
//     sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
//     sidebar_content.style.position = 'fixed';
//   } else {
//     sidebar_content.style.transform = '';
//     sidebar_content.style.position = '';
//   }

// }
