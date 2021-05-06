const app = new Vue({
    el: "#app",
    data: {

        contacts: [
            {
                name: "Michele",
                avatar: "img/avatar_1.jpg",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        popUp: false
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "hai fatto la spesa?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                        popUp: false

                    },
                ],
            },
            {
                name: "Fabio",
                avatar: "img/avatar_2.jpg",
                visible: true,
                message: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent",
                        popUp: true

                    },
                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                        popUp: false
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                        popUp: false

                    },
                ],
            },
            {
                name: "Samuele",
                avatar: "img/avatar_3.jpg",
                visible: true,
                message: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La Marianna va in campagna",
                        status: "received",
                        popUp: false

                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                        popUp: false

                    },
                ],
            },
            {
                name: "Luisa",
                avatar: "img/avatar_6.jpg",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                        popUp: false

                    },

                ],
            },
            {
                name: "Giulio",
                avatar: "img/avatar_8.jpg",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                        popUp: false

                    },
                ],
            },
            {
                name: "Gabriele",
                avatar: "img/avatar_4.jpg",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                        popUp: false

                    },
                ],
            },
            {
                name: "Simone",
                avatar: "img/avatar_5.jpg",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                        popUp: false

                    },
                ],
            },
            {
                name: "Leonardo",
                avatar: "img/avatar_7.jpg",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                        popUp: false

                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                        popUp: false

                    },
                ],
            },
        ],
        activeUser: {},
        userMessage: "",
        searchContact: "",
        tempFilterData: [],
       

    },
    computed: {
        
        //-------MI PERMETTE DI ATTIVARE L'INPUT SEARCH
        filteredUsersList() {
            return this.contacts.filter((element) => {
                // return element.name.toLowerCase().includes(this.searchContact.toLowerCase())
                return element.name.toLowerCase().startsWith((this.searchContact.toLowerCase()))
            })
        }

    },

    methods: {
        toUserClick(clickedUser) {
            this.activeUser = clickedUser
        },
        formatTime(date) {
            return moment(date, "DD/MM/YYYY HH:mm:ss").format("HH:mm");
        },
        enterMsg() {
            const currUser = this.activeUser

            const newmsg = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.userMessage,
                status: "sent"
            }
            currUser.message.push(newmsg)
            this.userMessage = ""

            this.scrollToBottom(),

                setTimeout(() => {
                this.receivedMsg(currUser)
            }, 5000)
        },

        receivedMsg(currUser) {

            const textReceived = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: "OK da " + currUser.name,
                status: "received"
            }
            currUser.message.push(textReceived)
            this.scrollToBottom()

        },

        //---------------------------//
        //i messaggi che riceverò mi compariranno in modo scollante 
        scrollToBottom() {
            this.$nextTick(() => {
                const htm1Element = this.$refs.chatContainerScroll
                htm1Element.scrollTop = htm1Element.scrollHeight
            })
            //mi permette di recuperare tutta la lista di tutti i ref 
        },
        msgLastAccess(contact) {
            if (!contact.message) {
                return ""
                
            }

            const showLastMsg = contact.message.filter((msg) => msg.status === "received" || msg.status === "sent")

            if (!showLastMsg.length) {
                return "nessun messaggio disponibile"
            }
            const lastTextDisplayed = showLastMsg[showLastMsg.length - 1].text

            return lastTextDisplayed
        },
        activeUserLastAccess(contact) {
            if (!contact.message) {
                return ""
            }

            const lastMsg = contact.message.filter((msg) => msg.status === "received" || msg.status === "sent")

            //CONTROLLO DEBUGGER
            if (lastMsg.length === 0) {
                return "";
            }

            const lastMsgDate = lastMsg[lastMsg.length - 1].date

            return this.formatTime(lastMsgDate)

        },
        showPopup(message) {
            message.popUp = !message.popUp;
        },
        // deleteMessage(index) {
        //     this.activeUser.message.splice(index,1)
        // }

    }
});

