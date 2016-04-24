var slid_event = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
console.log(slid_event)

$('#carousel').on('slid.bs.carousel', function () {
  console.log("Switch image")
})
