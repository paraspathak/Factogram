function check_selected(word){
    console.log("signal received", word);
}

chrome.contextMenus.create({
    id:"Factogram",
    title: "Check if Objective/Subjective",
    contexts : ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(word){
    if(word.menuItemId == "Factogram" && word.selectionText){
        make_ajax(word.selectionText);
        chrome.storage.sync.set({"data":word.selectionText},function(event){
            console.log('Success');
        });        
    }
});

function make_ajax(word){
    // $.ajax({
    //     type: 'POST',
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'json',
    //     url: "http://127.0.0.1:8080/",
    //     data: JSON.stringify(word),
    //     success: function (msg) {
    //         console.log("something went good", msg);
    //         cmsg = "Score[0-1]: "+ msg['subjectivity'] + "\n 0:max Objective 1: max Subjective" 
    //         alert(cmsg);
    //     },
    //     failure: function (msg) {
    //         console.log("something went wrong", msg);
    //     }
    // });

}

// chrome.contextMenus.onClicked.addListener(function(word){
//     if(word.menuItemId == "Factogram" && word.selectionText){
//         chrome.storage.sync.get("whole-application",function(item){
//             if(item && !chrome.runtime.error){
//                 var loaded_application = item["whole-application"];
//                 loaded_application.all_todo_items.push(
//                     {
//                         id_number : loaded_application.next_number,
//                         todo_message : word.selectionText,
//                         todo_color : "red",
//                         todo_button : "o"
//                     }
//                 );
//                 loaded_application.next_number+=1;
//                 chrome.storage.sync.clear(function(event){
//                     console.log(event, "Cleared item before saving");
//                 });
//                 //Save this instance of the class
//                 console.log({"whole-application":loaded_application});
//                 chrome.storage.sync.set({"whole-application":loaded_application}, function(event){
//                     console.log("storing success",event);
//                 });
//             }
//         });
        
//     }
// });
