// window.confirm("Confirm yes / no");

window._originalConfirm = window.confirm;
window.confirm = function(text) {
  bootStrapAlert = function() {
    if($('#windowConfirmModal').length == 1)
      return true;
    $('body').append(' \
    <div id="windowConfirmModal" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> \
      <div class="modal-body"> \
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> \
        <p> confirm text </p> \
      </div> \
      <div class="modal-footer"> \
        <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Close</button> \
      </div> \
    </div> \
    ');
    return true;
  }
  if (bootStrapAlert()){
    $('#windowAlertModal .modal-body p').text(text);
    $('#windowAlertModal').modal();
    yield();
  }
  else {
    console.log('bootstrap couldd not alert');
    window._originalAlert(text);
  }
}

