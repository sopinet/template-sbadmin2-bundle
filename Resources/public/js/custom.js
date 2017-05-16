/**
 * Created by aarrabal on 16/05/17.
 */

$('[data-toggle="confirmation"]').confirmation({popout: true, singleton: true});
for(var i=0;i<$('[data-toggle="confirmationChange"]').length;i++){
    var url=$('#'+$('[data-toggle="confirmationChange"]')[i].id).attr('changeVisibility');
    var options=[
        {
            popout: true
            ,singleton: true
            ,onConfirm: function(){
            $(location).attr('href',this.replace('replace',2));
        }.bind(url)
            ,btnOkLabel:""
            ,btnOkClass:"btn btn-warning fa fa-eye-slash"
            ,onCancel:function(){
            $(location).attr('href',this.replace('replace',1));
        }.bind(url)
            ,btnCancelLabel:""
            ,title: "Cambiar privacidad"
            ,btnCancelClass:"btn btn-danger fa fa-lock"
        },

        {
            popout: true
            ,singleton: true
            ,onConfirm: function(){
            $(location).attr('href',this.replace('replace',2));
        }.bind(url)
            ,btnOkLabel:""
            ,btnOkClass:"btn btn-warning fa fa-eye-slash"
            ,onCancel:function(){
            $(location).attr('href',this.replace('replace',0));
        }.bind(url)
            ,btnCancelLabel:""
            ,title: "Cambiar privacidad"
            ,btnCancelClass:"btn btn-success fa fa-unlock"
        },

        {
            popout: true
            ,singleton: true
            ,onConfirm: function(){
            console.log(this);
            $(location).attr('href',this.replace('replace',0));
        }.bind(url)
            ,btnOkLabel:""
            ,btnOkClass:"btn btn-success fa fa-unlock"
            ,onCancel:function(){
            $(location).attr('href',this.replace('replace',1));
        }.bind(url)
            ,btnCancelLabel:""
            ,title: "Cambiar privacidad"
            ,btnCancelClass:"btn btn-danger fa fa-lock"
        }
    ];
    var option=$('#'+$('[data-toggle="confirmationChange"]')[i].id).attr('groupVisibility');
    $('#'+$('[data-toggle="confirmationChange"]')[i].id).confirmation(options[option]);
}