const searchInput = document.getElementById("search-input")
const itemList = document.getElementById("item-list").getElementsByTagName("li")

searchInput.addEventListener("input", ()=>{
  const searchText = searchInput.value.toLocaleLowerCase()
  for(let i = 0; i < itemList.size ; i++){
    const itemName = itemList[i].value.toLocaleString()
    if(itemName.includes(searchText)){
      itemList[i].style.display = 'block'
    }
    else{
      itemList[i].style.display = 'none'
    }
  }
})
