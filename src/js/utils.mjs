function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

export function getParam(param) {
  const url = new URL(window.location);
  return url.searchParams.get(param);
}

export async function loadTemplate(path) {
  const response = await fetch(path);
  return convertToText(response);
}

export async function loadHeaderFooter() {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  if (header) {
    header.innerHTML = await loadTemplate("/partials/header.html");
  }

  if (footer) {
    footer.innerHTML = await loadTemplate("/partials/footer.html");
  }
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "beforeend",
  clear = true,
) {
  if (clear) parentElement.innerHTML = "";
  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}