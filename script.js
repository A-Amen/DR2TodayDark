// ==UserScript==
// @name         DR2 Today Dark
// @author       A-Amen
// @namespace    https://dr2.today/
// @version      0.1
// @description  Sets dark mode to dr2.today leaderboards!
// @match        https://dr2.today/*
// @grant        none
// ==/UserScript==

(function() {
    // Your code here...
    var startTime = performance.now()
    function setColor(link, color) {
        link.style.color = color
    }

    function setBgColor(link, color) {
        link.style.backgroundColor = color
    }

    // Change nav bar color
    document.querySelectorAll('.nav-link').forEach(function(link, index) {
        if(link.classList.contains('active')){
            setColor(link, "#ff5555")
        }
        else
        {
            setColor(link, "lightblue")
        }

    })

    // Change full page bg color
    setBgColor(document.body, "#282a36")
    document.querySelectorAll('.card.h-100').forEach(function(link, index) {
        setBgColor(link, "#44475a")
    })

    // Change DR2.Today Link Color
    document.querySelectorAll('.navbar-brand').forEach(function(link, index) {
        setColor(link, "lightblue")
    })

    // Change race name color
    var race_name = document.querySelector('.collapse.navbar-collapse')
    console.log(race_name.childElementCount)
    if(race_name.childElementCount == 3)
    {
        var race_name_wrapper = document.createElement('div')
        race_name_wrapper.style.color = "lightblue"
        race_name_wrapper.innerHTML = race_name.childNodes[4].textContent
        race_name.replaceChild(race_name_wrapper, race_name.childNodes[4])
    }

    // Ends in time text color
    var ends_ins = document.querySelectorAll('.text-muted').forEach(function(link, index){
        link.style.setProperty('color', '#f1fa8c', 'important')
    })

    // Challenge link color
    var challenge_links = document.querySelectorAll('.card-title').forEach(function(link, index){
        setColor(link, '#f8f8f2')
    })

    // Set TH color
    var th_elements = document.querySelectorAll('th').forEach(function(link, index){
        setColor(link, '#f8f8f2')
    })

    // Set TR Colors
    var tr_elements = document.querySelectorAll('td').forEach(function(link, index){
        setColor(link, '#e6e6e6')
    })

    // Set Color for race info
    document.querySelectorAll('.list-group-item').forEach(function(link, index){
        setBgColor(link, '#919191')
    })

    // Dropdown button
    setBgColor(document.querySelector('.accordion-button'), '#919191')

    // Set topic headers colors
    document.querySelectorAll('h4').forEach(function(link, index){
        setColor(link, '#f1fa8c')
    })

    // Set time stats color
    document.querySelectorAll('.m-0').forEach(function(link, index){
        setColor(link, '#f1fa8c')
    })

    // Set your time highlight color
    document.querySelector('.table-primary').style.setProperty('--bs-table-bg', '#161616')
    var endTime = performance.now()
    console.log(endTime - startTime)
})();