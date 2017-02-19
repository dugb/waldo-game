$(document).ready(function() {
	$('#test').hide();
	
	$('#imgMap').click(function(e) {
	    var offset = $(this).offset();
		$("#test").show();
	    $("#test").offset({left:e.pageX,top:e.pageY});
	    imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);
	    console.log(imgX+" "+imgY);
    });

  $('button').click(function(){
        $('#test').hide(500);
        //console.log('you clicked ' + this.id);
        whoGotClicked(this.id);
    })
});


function whoGotClicked(who){
	var selected = {};
	who === "btnWaldo" ? selected = waldo :
	who === "btnWenda" ? selected = wenda :
	who === 'btnOdlaw' ? selected = odlaw :
	who === 'btnCamera' ? selected = camera:
	who === 'btnBinocs' ? selected = binocs:
	who === 'btnWizard' ? selected = wizard:
	who === 'btnHaley' ? selected = haley:
	who === 'btnScroll' ? selected = scroll:
	who === 'btnKey' ? selected = key:
	who === 'btnWoof' ? selected = woof:
	who === 'btnBone' ? selected = bone:
	selected = cancel;
    //console.log("who got clicked?  " + selected.name);
	if (selected.name === "Cancel") {
		$('#test').hide();
	} else {
		if (imgX >= selected.x1 & imgX <= selected.x2 & imgY >= selected.y1 & imgY <= selected.y2){
		    alert('You found ' + selected.name + '!');
		    $('#' + who).hide();
		} else {
			alert('That is not ' + selected.name + ', Try Again!')
		}
	}
}