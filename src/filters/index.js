export const toCapitalize = value => {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};
// export const toDividedMoney = value => {
//   if (!value) return "";
//   value = value.toString();
//   let str = value.split("");
//   return str.splice(2, 0, ",").join(" ");
// };
// export function getByKeyword(list, keyword) {
//   const search = keyword.trim().toLowerCase();
//   if (!search.length) return list;
//   return list.filter(item => item.name.toLowerCase().indexOf(search) > -1);
// }
//
// export function getByCategory(list, category) {
//   if (!category) return list;
//   return list.filter(item => item.category == category);
// }
//
// export function getByType(list, type) {
//   if (!type) return list;
//   return list.filter(item => item.type == type);
// }
//
// export function getByState(list, state) {
//   if (!state) return list;
//   return list.filter(item => item.stateCode == state);
// }
//
// export function getByCountry(list, country) {
//   if (!country) return list;
//   return list.filter(item => item.countryCode == country);
// }
