const containerThird = document.querySelector('.container_third')
const containerFourth = document.querySelector('.container_fourth')
const tableWidth = document.querySelector('#tablewidth')
const borderWidth = document.querySelector('#borderwidth')
const fontFamily = document.querySelector('#font-type')
const fontWeight = document.querySelector('#font-weight')
const textAlign = document.querySelector('#Text-align')
const fontSize = document.querySelector('#font-size')
const tablebackgroundColor = document.querySelector('#tbgcolor')
const headbackgroundColor = document.querySelector('#hbgcolor')
const bodybackgroundColor = document.querySelector('#bbgcolor')
const borderColor = document.querySelector('#border-color')
const fontColor = document.querySelector('#font-color')
const borderCollapse = document.querySelector('#checkbox')

/*let tableProperties = function tableProperties(tableWidth, borderWidth, fontFamily, fontWeight, textAlign, fontSize, tablebackgroundColor, headbackgroundColor, bodybackgroundColor, borderColor, fontColor) {
    myTable.style.borderWidth = borderWidth.value + 'px'
    myTable.style.width = tableWidth.value + '%'
    myTable.style.borderColor = borderColor.value
    myTable.style.backgroundColor = tablebackgroundColor.value
    myTable.style.fontFamily = fontFamily.value
    myTable.style.fontWeight = fontWeight.value
    myTable.style.textAlign = textAlign.value
    myTable.style.color = fontColor.value
    myTable.style.fontSize = fontSize.value + 'px'
    th.textContent = "Head" + ' ' + k
    th.style.backgroundColor = headbackgroundColor.value
    td.style.borderColor = borderColor.value
    td.style.borderWidth = borderWidth.value + 'px'
}*/

function GenTable() {

    containerThird.innerHTML = ''

    let row_num = document.querySelector('#rows')
    let col_num = document.querySelector('#cols')
    const myTable = document.createElement('table')
    myTable.style.borderWidth = borderWidth.value + 'px'
    myTable.style.width = tableWidth.value + '%'
    myTable.style.borderColor = borderColor.value
    myTable.style.backgroundColor = tablebackgroundColor.value
    myTable.style.fontFamily = fontFamily.value
    myTable.style.fontWeight = fontWeight.value
    myTable.style.textAlign = textAlign.value
    myTable.style.color = fontColor.value
    myTable.style.fontSize = fontSize.value + 'px'
        // condition for borderCollapse
    if (borderCollapse.checked == true) {
        myTable.style.borderCollapse = 'collapse'
    } else {
        myTable.style.borderCollapse = "initial"
    }
    //==================================

    //creating cells and rows
    for (let i = 1; i <= col_num.value; i++) {
        let th = document.createElement("th")
        th.textContent = "Head" + ' ' + i
        th.style.backgroundColor = headbackgroundColor.value
        myTable.appendChild(th)
    }
    //creating rows

    for (j = 1; j <= row_num.value; j++) {
        //creating column
        let tr = document.createElement('tr');
        // myTable.appendChild(tr)
        for (k = 1; k <= col_num.value; k++) {
            let td = document.createElement('td')
            td.textContent = 'value'
            td.style.borderColor = borderColor.value
            td.style.borderWidth = borderWidth.value + 'px'
            tr.appendChild(td)
        }
        myTable.appendChild(tr)
    }
    containerThird.appendChild(myTable)
}
GenTable()


//=====================================================================================

/* Generate with Button Click */

function callToGenerate() {
    let btnGenerate = document.querySelector('.btn_generate')
    btnGenerate.addEventListener('click', function() {
        GenTable()
    })
}
callToGenerate() //===================calling the callToGenerate() function*/

/*HTML code generator*/

function generateHtmlCode() {
    let btnGetCode = document.querySelector('.btn_getcode')
    const containerThird = document.querySelector('.container_third')
    btnGetCode.addEventListener('click', function() {

        containerFourth.innerHTML = ''

        let htmlCode = containerThird.innerHTML;
        // containerFourth.textContent = htmlCode

        const btnCopy = document.createElement('button')
        btnCopy.setAttribute('class', 'btn_copy')
        btnCopy.textContent = 'Copy Code'
        btnCopy.style.fontFamily = 'Trebuchet MS'

        /*creating text area to copy the htmlcode*/
        const textarea = document.createElement('textarea')
        textarea.setAttribute('class', 'copycode')
        containerFourth.appendChild(textarea)
        containerFourth.appendChild(btnCopy)

        /*copy code*/
        textarea.textContent = htmlCode
        btnCopy.addEventListener('click', function() {
                textarea.select();
                document.execCommand('Copy');
            })
            /*copy code ends here*/

        /*This code prints the entire html document
        let htmlCode = document.documentElement.outerHTML;
        containerFourth.textContent = htmlCode*/

    })

}
generateHtmlCode()

//=========================================================================
/* Autogenerate function*/

function autoGenerate() {
    //=========================================================================
    /* Autogenerate with  click*/
    const containerFirst = document.querySelector('.container_first')
    containerFirst.addEventListener('click', function() {
        GenTable()
    })

    const containerSecond = document.querySelector('.container_second')
    containerSecond.addEventListener('click', function() {
            GenTable()
        })
        //=========================================================================
        /* Autogenerate with  onkeydown */
    document.querySelector('.container_first').onkeydown = function(e) {
        if (e.keyCode == 13) {
            GenTable()
        }
    };

}
autoGenerate()


//==================================*/
/*function stopAuto() {
    const btnstop = document.querySelector('#btnstop')
    console.log(btnstop.checked)
    if (btnstop.checked == true) {
        console.log("Stop")
        return generateHtmlCode()

    } else {

        autoGenerate()
    }
}

stopAuto()*/

//let btnStop = document.querySelector(".btn_stopautogen");
//btnStop.addEventListener("click", stopAuto)

function stop() {
    if (autoGenerate() == true)
        return;
    else {
        callToGenerate()
    }
}

const btnStop = document.querySelector('.btn_stopautogen');
btnStop.onclick = function() {
    stop()
    btnStop.textContent = 'Auto generator Stopped'
}



//const btnStop = document.querySelector('.btn_stopautogen');
//btnStop.addEventListener('click', autoGenerate)





//=========================SetInterval for bacgroundColor of containerFirst 
/*setInterval(
    function() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        containerFirst.style.backgroundColor = "#" + randomColor;

    }, 1000);*/