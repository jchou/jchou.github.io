const numYears = (new Date() - new Date("2016-08-08T08:00:00-07:00")) / (1000 * 3600 * 24 * 365);

document.getElementById('num-dev-exp-years').innerHTML = `<a data-toggle="tooltip" title="${numYears} to be exact!">${Math.round(numYears * 10) / 10}</a>`;

$(function(){$("[data-toggle='tooltip']").tooltip();});

function updateTabs() {
  var url = document.location.toString();
  if (url.match('#')) {
      $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
  }
}
updateTabs()

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = this.href.split('#');
    $('.nav a').filter('[href="#'+target[1]+'"]').tab('show');
})

window.addEventListener('hashchange', updateTabs, false)
