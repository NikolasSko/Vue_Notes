let app = new Vue({
    el: '#app',
    data: {
        logo: "./assets/лого.svg",
        header: "Notes",
        currentNote: "",
        notes: [
            {
                text: 'Помыть посуду',
                isCompleted: true
            },
            {
                text: 'Постирать вещи',
                isCompleted: true
            },
            {
                text: 'Погладить вещи',
                isCompleted: false
            }
        ],
    },
    methods:{
        addNote: function(){
            this.notes.push({
                text: this.currentNote,
                isCompleted: false
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