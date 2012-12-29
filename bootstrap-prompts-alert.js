window._originalAlert = window.alert;
window.alert = function(text) {
  bootStrapAlert = function() {
    if(! $.fn.modal.Constructor)
      return false;
    if($('#windowAlertModal').length == 1)
      return true;
    $('body').append(' \
    <div id="windowAlertModal" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> \
      <div class="modal-body"> \
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> \
        <p> alert text </p> \
      </div> \
      <div class="modal-footer"> \
        <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Close</button> \
      </div> \
    </div> \
    ');
    return true;
  }
  if ( bootStrapAlert() ){
    $('#windowAlertModal .modal-body p').text(text);
    $('#windowAlertModal').modal();
  }  else {
    console.log('bootstrap was not found');
    window._originalAlert(text);
  }
}
