const bookMarkForm = document.getElementById("bookMarkForm");
const siteNameInput = document.getElementById("siteName");
const siteUrlInput = document.getElementById("siteUrl");
const bookMarkList = document.getElementById("bookMarkList");

bookMarkForm.addEventListener("submit", addBookmark);
document.addEventListener("DOMContentLoaded", displayBookmarks);

function addBookmark(e) {
  e.preventDefault;
  const siteName = siteNameInput.value;
  const siteUrl = siteUrlInput.value;

  if (!validateForm(siteName, siteUrl)) return;

  if (isDuplicateBookmark(siteName, siteUrl)) {
    alert("This bookmark already exists");
    return;
  }

  const bookmark = {
    name: siteName,
    url: siteUrl,
  };

  displayBookmark(bookmark);

  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("Please fill in both feilds");
    return;
  }
  try {
    new URL(siteUrl);
    return true;
  } catch (error) {
    alert("Please enter a valid URL.");
  }
}

function displayBookmark(bookmark) {
  const bookmarkItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = bookmark.url;
  link.textContent = bookmark.name;
  link.target = "_blank";

  // removal items
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  bookmarkItem.appendChild(link);
    bookmarkItem.appendChild(removeButton)
  bookMarkList.appendChild(bookmarkItem);
}

function saveBookmark(bookmark) {
  let bookmarks = getBookmarks();
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function getBookmarks() {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
}

function displayBookmarks() {
  let bookmarks = getBookmarks();
  bookmarks.forEach((bookmark) => {
    displayBookmark(bookmark);
  });
}

function isDuplicateBookmark(siteName, siteUrl) {
  let bookmarks = getBookmarks();
  return bookmarks.some(
    (bookmarks) =>
      bookmarks.name.toLowerCase() == siteName.toLowerCase() &&
      bookmarks.url.toLowerCase() === siteUrl.toLowerCase(),
  );
}

function removeBookmark(bookmark) {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(
    (b) =>
      b.name.toLowerCase() != bookmark.name.toLowerCase() ||
      b.url.toLowerCase() != bookmark.url.toLowerCase(),
  );
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    clearBookmarkList()
    displayBookmarks()
}

function clearBookmarkList() {
  bookMarkList.innerHTML = "";
}
