function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 &&xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile1(data.basics);
  career(data.career);
  education(data.education);
  skill(data.skills);
})
var profile=document.querySelector(".profile");
var resume=document.querySelector(".resume");
var resume1=document.querySelector(".resume1");

function profile1(pro){
  var image=document.createElement("img");
  image.src=pro.img;
  resume.appendChild(image);
  profile.appendChild(resume);
  var head=document.createElement("h2");
  head.textContent=pro.name;
  resume.append(head);
  var head=document.createElement("h2");
  head.textContent=pro.designation;
  resume.append(head);
  var head=document.createElement("h2");
  head.textContent=pro.contact;
  resume.append(head);


}
  function career(c){
    var rh0=document.createElement("h1");
    rh0.textContent="resume";
    resume1.append(rh0);
    var hh=document.createElement("hr");
    resume1.append(hh);
    var rh1=document.createElement("h2");
      rh1.textContent="career objective";
    resume1.append(rh1);
    var rh2=document.createElement("p");
    rh2.textContent=c.info;
    resume1.append(rh2);

  }
  function education(edu) {
    var h2=document.createElement("h2");
    h2.textContent="education details";
    resume1.append(h2);
    var hh=document.createElement("hr");
    resume1.append(hh);

var table=document.createElement("table");
    let row='';
      row +="<tr><th>"+"s.no" +"</th>"+
      "<th>"+"institute"+"</th>"+
      "<th>"+"course"+"</th>"+
      "<th>"+"yearofpassing"+"</th></tr>";

    for (i in edu){
      row +="<tr><td>"+edu[i].sno +"</td>"+
      "<td>"+edu[i].institute +"</td>"+
      "<td>"+edu[i].course+"</td>"+
      "<td>"+edu[i].yearofpassing+"</td></tr>";

    }
    table.innerHTML=row;
    resume1.append(table);
    profile.append(resume1);
  }
function skill(l) {
  var sq=document.createElement("h2");
  sq.textContent="skills set";
  resume1.append(sq);
  var ul=document.createElement(ul);
  resume1.append(ul);
  for(i in l){
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);
  }

}
