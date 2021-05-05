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
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
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
                    },
                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
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
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
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
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },

                ],
            },
        ],
        activeUser: {},
        userMessage: "",
        searchContact: "",
    },
    computed: {
        activeUserLastAccess() {
            if (!this.activeUser.message) {
                return ""
            }

            const lastMsg = this.activeUser.message.filter((msg) => msg.status === "received")

            const lastMsgDate = lastMsg[lastMsg.length - 1].date

            return this.formatTime(lastMsgDate)
        },
        contactListForResearch() {
            this.activeUser.filter()
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
            this.activeUser.message.push({
                date: new Date().toLocaleString("it-IT"),
                text: this.userMessage,
                status: "sent"

            }),
            this.userMessage= ""
            setTimeout(this.receivedMsg, 2000)
        },
        
        receivedMsg() {
            this.activeUser.message.push({
            
                date: new Date().toLocaleString("it-IT"),
                text: "OK!",
                status: "received"
    
            })
        }



    }
});

