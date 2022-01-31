const buttonMenuList = document.getElementById("menu-hamburguer")
const menuList = document.getElementById("menuList")



function showmenu(){

const menuList = document.getElementById("menuList")


    if( menuList.style.visibility === "hidden"){
        menuList.style.visibility = "visible"
    }else{
        menuList.style.visibility ="hidden"
    }

}
buttonMenuList.addEventListener('click', showmenu)