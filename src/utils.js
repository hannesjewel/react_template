import {store} from './store'

export const formatDate = dateString => {

  let date = new Date(dateString)

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export const year = () => {

  const date = new Date()
  const year = date.getFullYear()
  return year
}

export const readableDate = dateString => {

  let date = new Date(dateString)

  return date.toDateString()
}

export const scrollToPosition = (anchorTag, space) => {
  setTimeout(() => {
    const element = document.querySelector(anchorTag)
    if(element){
      let topPos = element.getBoundingClientRect().top + window.pageYOffset
      if(space){
          topPos = element.getBoundingClientRect().top + window.pageYOffset - space
      } 
      
      window.scrollTo({
          top: topPos, // scroll so that the element is at the top of the view
          behavior: 'smooth' // smooth scroll
      })
    }
  }, 300);
}

export const formatPrice = price => {
  const decimalsAdded = Number(price).toFixed(2)
  const priceCleaned = decimalsAdded.replace(/\d(?=(\d{3})+\.)/g, '$& ')
  return priceCleaned
}

export const strip = html => {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

export const capitalizeWord = word => {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export const capitalize = sentence => {
  return sentence
    .split(' ')
    .map(word => {
      return capitalizeWord(word)
    })
    .join(' ')
}

export const renderFilterInfoString = () => {
  let array = []
  let urlSearchParams = new URLSearchParams(window.location.search)
  if(urlSearchParams.has('brand')) {array.push(capitalize(unSlugify(urlSearchParams.get('brand'))))}
  if(urlSearchParams.has('location')) {array.push(unSlugify(urlSearchParams.get('location')))}
  if(urlSearchParams.has('category')) {array.push(unSlugify(urlSearchParams.get('category')))}
  if(urlSearchParams.has('fuel')) {array.push(` that uses ${unSlugify(urlSearchParams.get('fuel'))}`)}
  return `You searched for ${array.join(' ')}`
}

export const unSlugify = slug => {
  return slug
    .split('-').join(' ')
}

export const slugify = ( slug ) => {
  return slug
  .toString()
  .normalize( 'NFD' )                   // split an accented letter in the base letter and the acent
  .replace( /[\u0300-\u036f]/g, '' )   // remove all previously split accents
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-'); 
}

export const setCartExp = () =>  {
  // cookie expires after 30min
  const date = new Date();
  date.setTime(date.getTime() + 86400000);
  let expires = "expires="+date.toUTCString();
  document.cookie = "cart_exp=1800000ms;" + expires + ";path=/";
}

function getCartExp() {
  let name = "cart_exp=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCartExp() {
  let cartExp = getCartExp();
  if (cartExp !== "") 
  return true 

  return false
}

export const clearCartIfExpired = () => {
  if(!checkCartExp()){
    store.dispatch({
      type: 'CLEAR_CART',
      expired: true
    })
  }
}