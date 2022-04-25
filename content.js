console.log("chrome extension go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);

    function enroll() {
        var targetDiv = document.getElementById("ptifrmtarget");
        var targetFrame = targetDiv.firstElementChild;
        var targetDoc = targetFrame.contentWindow.document;
        var proceedToStep2 = targetDoc.getElementById("DERIVED_REGFRM1_LINK_ADD_ENRL$82$");
        if(proceedToStep2 !== null) { 
            proceedToStep2.click(); 
        }
        var finishEnrolling = targetDoc.getElementById("DERIVED_REGFRM1_SSR_PB_SUBMIT");
        if(finishEnrolling !== null) { 
            finishEnrolling.click(); 
        }
        var addAnotherClass = targetDoc.getElementById("DERIVED_REGFRM1_SSR_LINK_STARTOVER");
        if(addAnotherClass !== null) { 
            addAnotherClass.click(); 
        }
    }
    
    setInterval(enroll, 3000);
}
