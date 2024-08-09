function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var t=document.querySelector("body"),n=document.querySelector("table"),r=n.querySelectorAll("thead tr th"),a=n.querySelector("tbody"),o=[],i=document.createElement("div");i.setAttribute("data-qa","notification");var l=document.createElement("h2");i.classList.add("notification"),i.style.top="290px",i.style.right="10px",i.style.zIndex="1",i.style.display="none",l.classList.add("title"),i.appendChild(l),t.appendChild(i),r.forEach(function(t,r){o[r]=!0,t.addEventListener("click",function(){(function(t,r){for(var a=n.querySelector("tbody"),o=Array.from(a.querySelectorAll("tr")).sort(function(e,n){var a=e.querySelectorAll("td")[t].textContent.trim(),o=n.querySelectorAll("td")[t].textContent.trim();return(3===t?(a=parseInt(a,10),o=parseInt(o,10)):4===t&&(a=Number(a.replace(/[$,]/g,"")),o=Number(o.replace(/[$,]/g,""))),a>o)?r?1:-1:a<o?r?-1:1:0});a.firstChild;)a.removeChild(a.firstChild);a.append.apply(a,function(t){if(Array.isArray(t))return e(t)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})(r,o[r]),o[r]=!o[r]})}),a.addEventListener("click",function(e){var n=e.target.closest("tr");n&&(t.querySelectorAll("tr.active").forEach(function(e){e.classList.remove("active")}),n.classList.add("active"))});var d=document.createElement("form");d.classList.add("new-employee-form"),[{label:"Name:",name:"name",type:"text",qa:"name"},{label:"Position:",name:"position",type:"text",qa:"position"}].forEach(function(e){var t=document.createElement("label");t.textContent=e.label;var n=document.createElement("input");n.name=e.name,n.type=e.type,n.setAttribute("data-qa",e.qa),n.required=!0,t.appendChild(n),d.appendChild(t),d.appendChild(document.createElement("br"))});var c=document.createElement("label");c.textContent="Office: ";var u=document.createElement("select");u.name="office",u.setAttribute("data-qa","office"),u.required=!0,["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,u.appendChild(t)}),c.appendChild(u),d.appendChild(c),d.appendChild(document.createElement("br")),[{label:"Age:",name:"age",type:"number",qa:"age"},{label:"Salary:",name:"salary",type:"number",qa:"salary"}].forEach(function(e){var t=document.createElement("label");t.textContent=e.label;var n=document.createElement("input");n.name=e.name,n.type=e.type,n.setAttribute("data-qa",e.qa),n.required=!0,t.appendChild(n),d.appendChild(t),d.appendChild(document.createElement("br"))});var s=document.createElement("button");s.type="submit",s.textContent="Save to table",d.appendChild(s),t.appendChild(d),d.addEventListener("submit",function(e){e.preventDefault();var t=d.elements.name.value.trim(),n=d.elements.position.value.trim(),r=d.elements.office.value.trim(),o=parseInt(d.elements.age.value,10),c=parseFloat(d.elements.salary.value);if(document.body.contains(i)||document.body.appendChild(i),t.length<4){i.classList.add("error"),l.textContent="The name must contain more than 4 letters!",i.style.display="block",setTimeout(function(){document.body.contains(i)&&document.body.removeChild(i)},2e3);return}if(isNaN(o)||o<18||o>90){i.classList.add("error"),l.textContent="Age should be between 18 and 90 years!",i.style.display="block",setTimeout(function(){document.body.contains(i)&&document.body.removeChild(i)},2e3);return}var u=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(c),s=document.createElement("tr");s.innerHTML="\n    <td>".concat(t,"</td>\n    <td>").concat(n,"</td>\n    <td>").concat(r,"</td>\n    <td>").concat(o,"</td>\n    <td>").concat(u,"</td>\n  "),a.appendChild(s),i.classList.remove("error"),i.classList.add("success"),l.textContent="Congratulations employee added!",i.style.display="block",setTimeout(function(){document.body.contains(i)&&document.body.removeChild(i)},2e3),d.reset()});var m="";a.addEventListener("dblclick",function(e){var t=e.target.closest("td");if(t){m=t.textContent.trim();var n=document.createElement("input");n.value=m,n.classList.add("cell-input"),n.style.boxSizing="border-box",t.innerHTML="",t.appendChild(n),n.focus()}}),a.addEventListener("blur",function(e){var t=e.target.closest("td");if(t&&t.querySelector("input")){var n=t.querySelector("input").value.trim();""===n?t.textContent=m:t.textContent=n}},!0),a.addEventListener("keydown",function(e){if("Enter"===e.key){var t=e.target.closest("td");if(t&&t.querySelector("input")){var n=t.querySelector("input").value.trim();""===n?t.textContent=m:t.textContent=n}}},!0);
//# sourceMappingURL=index.02d91163.js.map
