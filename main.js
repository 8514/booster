var images=["https://www.clipartmax.com/png/middle/243-2439854_mother-cartoon-clip-art-animated-mom-png.png","https://wallpapercave.com/wp/wp2377581.jpg","https://res.cloudinary.com/scribe-publications/image/upload/w_800,/v1570558557/newcovers/9781912854370.jpg"];
var names=["khushbu patel","yug patel","family book"];
var i=0;
function update(){
document.getElementById("family").src=images[i];
document.getElementById("family_member_name").innerHTML=names[i];
i++;
if(i>2){
i=0;    
}    
}
