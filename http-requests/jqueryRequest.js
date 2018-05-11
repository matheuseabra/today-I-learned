
// HTTP Request using $.ajax

$(document).ready(function(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    $('btn').click(function(){
        $.ajax({
            url: url,
            type: "GET",
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        })
    })
})


// HTTP Request using $.get

$(document).ready(function(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    $('btn').click(function(){
        $.get(url, function(data, status){
            console.log(`${data}`)
        })
    })
})

// HTTP Request using $.post

$(document).ready(function() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
        user = {
            name: "Matheus",
            age: 23
        }
    }
    
    $('btn').click(function(){
        $.post(url, data.user, function(data, status){
            console.log(`${data} and status is ${status}`)
        })
    })
})

// HTTP Request using $.getJSON

$(document).ready(function() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
        user = {
            name: "Matheus",
            age: 23
        }
    }
    
    $('btn').click(function(){
        $.getJSON(url, function(result){
            console.log(result)
        })
    })
})