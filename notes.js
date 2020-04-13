const fs = require("fs");

var fetechNotes = () => {
    try{
        return JSON.parse(fs.readFileSync("notes.txt"))
    }
        catch(err){
            return[];
        }
    }
    var addingNote =(title,body) => {

        if (!title||!body){
        
            return console.log("error")
        }
        var notes = fetechNotes();
    

    var note= {
        title,
        body
    };

    var double = notes.filter((note) =>  note.title === title)
    if(double.length === 0){
        notes.push(note);

        fs.writeFileSync('notes.txt',JSON.stringify(notes))
        logNote(note);  
    }
    else{
        console.log("this title already exist")
    }
    
   

    

    }

    var removeNote =(title) => {
        var notes = fetechNotes();


     var filteredNotes =   notes.filter((note) => note.title !==title)
     fs.writeFileSync('notes.txt',JSON.stringify(filteredNotes))

    }

    var readNotes = (title) => {
        var notes = fetechNotes();
        
        var filteredNotes =   notes.filter((note) => note.title ===title)

        logNote(filteredNotes[0])
    }

    var getAll = () => {
        var notes = fetechNotes();
        
        notes.forEach((note) => logNote(note))
    }


    var logNote = (note) => {
    console.log("********");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}


module.exports ={
    addingNote,
    removeNote,
    readNotes,
    getAll
}

