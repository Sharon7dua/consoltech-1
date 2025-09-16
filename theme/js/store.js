$(document).ready(function() {
//updating info
const info = {
    phone: "0762328429",
    email: "info@consoltech.co.ke",
    website: "www.consoltech.co.ke",
    instagram: "https://www.instagram.com/consoltech?igsh=am9tNm9mOG9pdDEy",
    facebook: "https://www.facebook.com/share/1PtLSoV1zM/",
    tiktok: "https://vm.tiktok.com/ZMHnunWabXkgt-NNkVX/",
    address: "The Anchor bldg., Kenyatta st. Eldoret"
};
$('.shop-email').text(info.email);
$('.shop-phone').text(info.phone);
$('.shop-address').text(info.address);

//updating categoriesHtml
  const categories = ["printers","laptops","desktops","monitors","all-in-one","accessories"];
  let categoriesHtml = $('#shop-categories').html();
  $('#shop-categories').html('');
  categories.forEach(element => {
    let append = jQuery(categoriesHtml);
    append.find('a').text(element);
    $('#shop-categories').append(append);
  });

//
});