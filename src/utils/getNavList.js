function getNavList(current_page, page_numbers) {
  const nav_length = page_numbers > 5 ? 7 : page_numbers;

  const list = [];
  const length_left = 2 - (page_numbers - current_page) < 0 ? 0 : 2 - (page_numbers - current_page);
  let start = 0;
  if (current_page - 2 - length_left < 1) {
    start = 1;
  } else {
    start = current_page - 2 - length_left;
  }

  for (let i = 0; i < 5; i++) {
    if (start + i <= page_numbers) {
      list.push(start + i);
    }
  }

  return list;
}

export default getNavList;
