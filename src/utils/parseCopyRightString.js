function parseCopyRightString() {
  const this_year = new Date().getFullYear();

  const year_term = this_year === 2020 ? '2020' : `2020 - ${this_year}`;

  return `@${year_term} wingtree`;
}

export default parseCopyRightString;
