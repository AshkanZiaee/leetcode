title = title.split(" ");

for (let i = 0; i <= title.length - 1; i++) {
  if (title[i].length <= 2) {
    title[i] = title[i].toLowerCase();
  } else {
    title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase();
  }
}
return title.join(" ");
