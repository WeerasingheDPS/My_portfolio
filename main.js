var icon = document.getElementById("icon");

 icon.onclick = function(){
    if(document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme");
        icon.src="images/moon.png";
    }
    else{
        document.body.classList.add("dark-theme");
        icon.src="images/sun.png";
    }
    // document.body.classList.add("dark-theme");
    // if(document.body.classList.contains("dark-theme")){
    //     icon.src="images/sun.png";
    // }else{
    //     icon.src="images/moon.png";

 }
