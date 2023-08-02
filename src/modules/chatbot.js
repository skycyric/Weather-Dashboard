const initializeChatBot = () => {
    let know = {
        "hello": "hi",
        "how are you?": "good",
        "ok": ":)"
    };
    // 獲得參考至 audio 元素和音量控制元素
    const audioElement = document.getElementById('volumn');
    const volumeIconWelcome = document.getElementById('volumeIcon_welcom');
    const volumeIconChat = document.getElementById('volumeIcon_chat');

    volumeIconWelcome.addEventListener('click', function () {
        if (audioElement.muted) {
            // 如果當前已靜音，則取消靜音並更新圖標
            audioElement.muted = false;
            volumeIconWelcome.textContent = 'volume_up';
            volumeIconChat.textContent = 'volume_up';
        } else {
            // 如果當前未靜音，則靜音並更新圖標
            audioElement.muted = true;
            volumeIconWelcome.textContent = 'volume_off';
            volumeIconChat.textContent = 'volume_off';
        }
    });

    volumeIconChat.addEventListener('click', function () {
        if (audioElement.muted) {
            audioElement.muted = false;
            volumeIconWelcome.textContent = 'volume_up';
            volumeIconChat.textContent = 'volume_up';
        } else {
            audioElement.muted = true;
            volumeIconWelcome.textContent = 'volume_off';
            volumeIconChat.textContent = 'volume_off';
        }
    });


    var botController = (function () {
    })();

    var uiController = (function () {
    })();
    var controller = (function (botCntr, uiCntr) {
        var $chatCircle,
            $chatBox,
            $chatBoxClose,
            $chatBoxWelcome,
            $chatWraper,
            $submitBtn,
            $chatInput,
            $msg;

        /*toggle*/
        function hideCircle(evt) {
            evt.preventDefault();
            $chatCircle.hide('scale');
            $chatBox.show('scale');
            $chatBoxWelcome.show('scale');
        }

        function chatBoxCl(evt) {
            evt.preventDefault();
            $chatCircle.show('scale');
            $chatBox.hide('scale');
            $chatBoxWelcome.hide('scale');
            $chatWraper.hide('scale');
        }

        function chatOpenMessage(evt) {
            evt.preventDefault();
            $chatBoxWelcome.hide();
            $chatWraper.show();
        }

        //generate messages on submit click
        function submitMsg(evt) {
            evt.preventDefault();

            //1. get input message data
            msg = $chatSubmitBtn.val();

            //2.if there is no string button send shoudn't work
            if (msg.trim() == '') {
                return false;
            }
            //3. add message to bot controller
            callbot(msg);
            //4. display message to ui controller
            generate_message(msg, 'self');

        }

        function chatSbmBtn(evt) {
            if (evt.keyCode === 13 || evt.which === 13) {
                console.log("btn pushed");
            }
        }
        /* var input = uiCntr.getInput();*/
        /* $chatSubmitBtn.on("click", hideCircle);*/

        function init() {
            $chatCircle = $("#chat-circle");
            $chatBox = $(".chat-box");
            $chatBoxClose = $(".chat-box-toggle");
            $chatBoxWelcome = $(".chat-box-welcome__header");
            $chatWraper = $("#chat-box__wraper");
            $chatInput = $("#chat-input__text");
            $submitBtn = $("#chat-submit");

            // Load the sound
            var greetingSound = new Audio('../sounds/volumn.mp3');

            // Add an event listener to the chatbot button
            $chatCircle.on('click', function () {
                // Play the sound when the chatbot is opened
                console.log("Chat Circle clicked!");
                greetingSound.play();
            });

            // Add volume control
            const volumeIconChat = document.getElementById('volumeIcon_chat');
            volumeIconChat.addEventListener('click', function () {
                if (greetingSound.muted) {
                    greetingSound.muted = false;
                    this.textContent = 'volume_up';
                } else {
                    greetingSound.muted = true;
                    this.textContent = 'volume_off';
                }
            });

            // Add close sound button
            let closeButton = document.querySelector('.chat-box-toggle');
            closeButton.addEventListener('click', function () {
                greetingSound.pause();
                greetingSound.currentTime = 0;
            });

            //1. call toggle 
            $chatCircle.on("click", hideCircle);
            $chatBoxClose.on("click", chatBoxCl);
            $chatInput.on("click", chatOpenMessage);

            //2. call wait message from CRM-human
            console.log($submitBtn);
            $submitBtn.on("click", chatSbmBtn);
            $chatInput.on("keypress", chatSbmBtn);


            //6. get message from bot controller-back end
            //7. display bot message to ui controller
        }

        return {
            init: init
        };

    })(botController, uiController);


    $('.chat-input__form').on('submit', function (e) {
        e.preventDefault();
        msg = $('.chat-input__text').val();

        $('.chat-logs').append('<div id="cm-msg-0" class="chat-msg background-warning push-right bot"><div class="cm-msg-text">' + msg + '</div><span class="msg-avatar"><img class="chat-box-overlay_robot" src="https://www.meetsource.com//userStyles/images/user.png"></span></div>');
        $('.chat-input__text').val('');
    });


    $(document).ready(controller.init);

    know = {
        "hello": "hi",
        "how are you?": "good",
        "ok": ":)"
    };
    function talk() {
        var user = document.getElementById("userBox").value;
        document.getElementById("userBox").value = "";
        document.getElementById("chatLog").innerHTML += user + "<br>";
        if (user in know) {
            document.getElementById("chatLog").innerHTML += know[user] + "<br>";
        }
        else {
            document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
        }
    }

}

export default initializeChatBot;