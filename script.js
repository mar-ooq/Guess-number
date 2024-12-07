let random = Math.floor(Math.random() * 101);
let button_custom = document.getElementById("guess_custom_button")
let button_classic = document.getElementById("guess_button")
let message = document.getElementById('result_message')
let hearts = 0
let messages = document.getElementById('result_custom_message')
let h_p = document.getElementById('hearts-part')
let g_p = document.getElementById('game-part')
message.innerHTML = ''
messages.innerHTML = ''
document.getElementById('heart_inp').value = ""
document.getElementById('guess_input').value = ""
document.getElementById('guess_custom_input').value = ""
function guess_classic(){
    starting_site.style.visibility = 'hidden';
    classic_game_site.style.visibility = 'visible'
    custom_game_site.style.visibility = 'hidden'
    hearts = 3
    guess_c = function(){
        let num = document.getElementById('guess_input').value
        if(!Number(num) || num < 0 || num >=100){
            alert("Number must be a number from 0 to 100")
            return
        }
        else{
            num = Number(num)
        }
        if(hearts > 0){
            if(num > random){
                message.innerHTML = 'Number is too high'
                hearts--
            }
            else if(num < random){
                message.innerHTML = 'Number is too low'
                hearts--
            }
            else if(num === random){
                message.innerHTML = 'Congratulations! You guessed the number'
                button_classic.disabled = true
                return
            }
        }
        else{
            message.innerHTML = 'Sorry, you lost. The correct number was '+ random
            button_classic.disabled = true;
        }
        document.getElementById('guess_input').value = ''
    }
}
function guess_custom(){
    starting_site.style.visibility = 'hidden'
    classic_game_site.style.visibility = 'hidden'
    custom_game_site.style.visibility = 'visible'
    h_p.style.visibility = 'visible'
    g_p.style.visibility = 'hidden'
    set_heart = function(){
        hearts = document.getElementById('heart_inp').value
        if(!Number(hearts) || hearts < 0){
            alert("Hearts must be a number greater than 0")
            document.getElementById('heart_inp').value = ''
            return
        }
        else{
            hearts = Number(hearts)
            h_p.style.visibility = 'hidden'
            g_p.style.visibility = 'visible'
        }
    }
    guess_cus = function(){
        messages.innerHTML = ''
        let num = document.getElementById('guess_custom_input').value
        if(!Number(num) || num < 0 || num >=100){
            alert("Number must be a number from 0 to 100")
            return
        }
        else{
            num = Number(num)
        }
            if(hearts > 0){
                if(num > random){
                    messages.innerHTML = 'Number is too high'
                    hearts--
                }
                else if(num < random){
                    messages.innerHTML = 'Number is too low'
                    hearts--
                }
                else if(num === random){
                    messages.innerHTML = 'Congratulations! You guessed the number'
                    button_custom.disabled = true
                    return
                }
            }
            else{
                messages.innerHTML = 'Sorry, you lost. The correct number was '+ random
                button_custom.disabled = true
            }
            document.getElementById('guess_custom_input').value = ""
    }
}
