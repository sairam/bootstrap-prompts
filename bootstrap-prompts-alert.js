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
window._originalConfirm = window.confirm;
window.confirm = function(text, cb) {
    if(!cb){
      console.log('callback not set up');
      window._originalConfirm(text);
      return false;
    }
    bootStrapConfirm = function() {
          if(! $.fn.modal.Constructor)
            return false;
          if($('#windowConfirmModal').length == 1)
            return true;
          $('body').append(' \
          <div id="windowConfirmModal" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> \
          <div class="modal-body"> \
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> \
          <p> alert text </p> \
          </div> \
          <div class="modal-footer"> \
          <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Close</button> \
          <button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Ok</button> \
          </div> \
          </div> \
          ');
          return true;
    };
    if ( bootStrapConfirm() ){
        $("#windowConfirmModal .btn-primary").bind('click', confirm);
        $("#windowConfirmModal .btn-danger").bind('click', deny);
        $('#windowConfirmModal .modal-body p').text(text);
        $('#windowConfirmModal').modal();
    } else {
        console.log('bootstrap was not found');
        window._originalConfirm(text);
    }
    function unbind() {
      $("#windowConfirmModal .btn-primary").unbind('click', confirm);
      $("#windowConfirmModal .btn-danger").unbind('click', deny);
    }
    function confirm() { cb(true);unbind();}
    function deny() { cb(false);unbind();}
};
