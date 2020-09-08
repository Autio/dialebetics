/*jshint esversion: 6 */

var elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Dialectic/gi, 'Diabetic');
  value = value.replace(/dialectic/gi, 'diabetic');
  value = value.replace(/Dialectical/gi, 'Diabetic');
  value = value.replace(/dialectical/gi, 'diabetic');
  value = value.replace(/Dialectics/gi, 'Diabetics');
  value = value.replace(/dialectics/gi, 'diabetics');

  node.nodeValue = value;
}

window.onload = findAndReplace();