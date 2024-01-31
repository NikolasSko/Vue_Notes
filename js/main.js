let app = new Vue({
    el: '#app',
    data: {
        logo: "./assets/лого.svg",
        header: "Notes",
        currentNote: "",
        notes: [

        ],
    },
    methods:{
        addNote: function(){
            this.notes.push({
                text: this.currentNote,
                isCompleted: false,
                isDoing: false,
            });
            this.currentNote = "";
        },
        deleteNote: function(noteText){
            this.notes =this.notes.filter(note =>{
                return note.text !== noteText;
            })
        }
    }
})