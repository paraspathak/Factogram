chrome.contextMenus.create({
    id:"Factogram",
    title: "Check if Objective/Subjective",
    contexts : ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(word){
    if(word.menuItemId == "Factogram" && word.selectionText){
        make_ajax(word.selectionText);
        // chrome.storage.sync.set({"data":word.selectionText},function(event){
        //     console.log('Success');
        // });        
    }
});

function make_ajax(word){
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "http://127.0.0.1:8080/",
        data: JSON.stringify(word),
        success: function (msg) {
            console.log("something went good", msg);
            cmsg = "Score[0-1]: "+ msg['subjectivity'] + "\n 0:max Objective 1: max Subjective" 
            alert(cmsg);
        },
        failure: function (msg) {
            console.log("something went wrong", msg);
        }
    });

}
