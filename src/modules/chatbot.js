const initializeChatBot = () => {
    let know = {
        "hello": "hi",
        "how are you?": "good",
        "ok": ":)"
    };
    // 獲得參考至 audio 元素和音量控制元素
    const volumeIconWelcome = document.getElementById('volumeIcon_welcom');
    const volumeIconChat = document.getElementById('volumeIcon_chat');
    const closeButtonWelcome = document.getElementById('welcom_close');
    const closeButtonChat = document.getElementById('chat_close');

    volumeIconWelcome.addEventListener('click', function () {
        if (indow['audio'].muted) {
            // 如果當前已靜音，則取消靜音並更新圖標
            indow['audio'].muted = false;
            this.textContent = 'volume_up';
        } else {
            // 如果當前未靜音，則靜音並更新圖標
            indow['audio'].muted = true;
            this.textContent = 'volume_off';
        }
    });

    volumeIconChat.addEventListener('click', function () {
        if (indow['audio'].muted) {
            indow['audio'].muted = false;
            this.textContent = 'volume_up';
        } else {
            indow['audio'].muted = true;
            this.textContent = 'volume_off';
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

        function chatBoxCl(evt) {
            evt.preventDefault();
            $chatCircle.show('scale');
            $chatBox.hide('scale');
            $chatBoxWelcome.hide('scale');
            $chatWraper.hide('scale');

            // Reset currentSound on closing chatbot
            window['audio'].src = '../sounds/welcom.mp3';
            window['currentSound'] = '';
        }

        function init() {
            $chatCircle = $("#chat-circle");
            $chatBox = $(".chat-box");
            $chatBoxClose = $(".chat-box-toggle");
            $chatBoxWelcome = $(".chat-box-welcome__header");
            $chatWraper = $("#chat-box__wraper");
            $chatInput = $("#chat-input__text");
            $submitBtn = $("#chat-submit");


            $chatCircle.on('click', function () {
                console.log("Chat Circle clicked!");
                if (window['currentSound'] == '') {
                    if (window['audio']) {
                        window['audio'].pause();  // 暫停當前音訊
                        window['audio'].currentTime = 0;
                        window['audio'].src = '../sounds/welcom.mp3';
                        window['audio'].play();
                    }

                    const chatbotText = document.querySelector('.chat-box-welcome__welcome-text p');
                    if (chatbotText) {
                        chatbotText.textContent = '各位觀眾大家好，今天又是一個晴朗而熱的天氣。';
                    }
                }
            });


            // Add volume control

            const volumeIconWelcome = document.getElementById('volumeIcon_welcom');
            volumeIconWelcome.addEventListener('click', function () {
                if (window['audio'].muted) {
                    window['audio'].muted = false;
                    this.textContent = 'volume_up';
                } else {
                    window['audio'].muted = true;
                    this.textContent = 'volume_off';
                }
            });

            const volumeIconChat = document.getElementById('volumeIcon_chat');
            volumeIconChat.addEventListener('click', function () {
                if (window['audio'].muted) {
                    window['audio'].muted = false;
                    this.textContent = 'volume_up';
                } else {
                    window['audio'].muted = true;
                    this.textContent = 'volume_off';
                }
            });

            // Add close sound button
            closeButtonWelcome.addEventListener('click', function () {
                window['audio'].pause();
                window['audio'].currentTime = 0;
            });

            closeButtonChat.addEventListener('click', function () {
                window['audio'].pause();
                window['audio'].currentTime = 0;
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