const text = document.querySelector("textarea[name='text']");

// document.body.addEventListener("input", update);

// function update(e) {
//     console.log(e)
//     var a = document.querySelector('input[name="color"]');
//     text.style.color = a.value;
//     var b = document.querySelector('input[name="size"]');
//     text.style.fontSize = b.value + 'px';
//     var c = document.querySelector('select[name="police"]');
//     text.style.fontFamily = c.value;
// }


document.body.addEventListener("input", function(e){
    console.log(e)
    var a = document.querySelector('input[name="color"]');
    text.style.color = a.value;
    var b = document.querySelector('input[name="size"]');
    text.style.fontSize = b.value + 'px';
    var c = document.querySelector('select[name="police"]');
    text.style.fontFamily = c.value;
});


