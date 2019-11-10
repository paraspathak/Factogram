console.log("Loaded item");
document.getElementById("submit_button").addEventListener("click", submit_ajax);
// chrome.storage.sync.get("data",function(item){
//     if(item && !chrome.runtime.error){
//         document.getElementById("txt_comments").value = item['data'];
//         $.ajax({
//             type: 'POST',
//             contentType: 'application/json; charset=utf-8',
//             dataType: 'json',
//             url: "http://127.0.0.1:8080/",
//             data: JSON.stringify(item['data']),
//             success: function (msg) {
//                 console.log("something went good", msg);
//                 document.getElementById("msg").innerHTML = msg;
//                 update_ui(msg['subjectivity']);
    
//             },
//             failure: function (msg) {
//                 console.log("something went wrong", msg);
//             }
//         });
//     }
// });


function submit_ajax() {
    console.log("Insubmitbutton");
    var sentence = document.getElementById("txt_comments").value;
    console.log(sentence);
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "http://127.0.0.1:8080/",
        data: JSON.stringify(sentence),
        success: function (msg) {
            console.log("something went good", msg);
            document.getElementById("msg").innerHTML = msg;
            update_ui(msg['subjectivity']);

        },
        failure: function (msg) {
            console.log("something went wrong", msg);
        }
    });

}

function hide_progress() {
    document.getElementById("progress").style.visibility = "hidden";
}

function update_ui(score) {
    document.getElementById("value_range").innerHTML = score.toFixed(2);
    // document.getElementById("value_range").innerHTML = score;
    document.getElementById("score_range").value = score;
    document.getElementById("progress").style.visibility = "visible";
}