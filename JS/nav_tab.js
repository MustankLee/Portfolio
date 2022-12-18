function detail(project_id){
    let temp = document.getElementsByClassName("bound");
    for(let i=0; i<temp.length; i++){
        temp[i].style.display = "none";
    }
    document.getElementById(project_id).style.display = "block";
}

