

//onSetMod: {
//    'js' : {
//        'inited' : function ShowSelection()
//        {
//            var textComponent = document.getElementsByClassName('textarea');
//            var selectedText;
//            // IE version
//            if (document.selection != undefined)
//            {
//                textComponent.focus();
//                var sel = document.selection.createRange();
//                selectedText = sel.text;
//            }
//            // Mozilla version
//            else if (textComponent.selectionStart != undefined)
//            {
//                var startPos = textComponent.selectionStart;
//                var endPos = textComponent.selectionEnd;
//                selectedText = textComponent.value.substring(startPos, endPos)
//            }
//            alert("You selected: " + selectedText);
//        }
//    }
//}
