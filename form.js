var text =document.getElementById('text');
text.addEventListener('focus', function(e){
    e.target.value= 'vous avez le focus'
},true);
text.disabled=false;
text.addEventListener('blur', function(e){
    e.target.value = 'vous n\'avez plus le focus'
}, true);


function check(){
    var input = document.getElementsByTagName('input');
    inputLengh = input.length

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (input[i].type== 'radio' && input[i].checked) {
            alert('la case cochée est la n° : ' + input[i].value);
            
        }
        
    }
}

// liste deroulante

var list = document.getElementById('list')
list.addEventListener('change', function(){
    alert(list.options[list.selectedIndex].innerHTML), true;
})