const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        description: {     //Object
            descFirst: { type: mongoose.Schema.Types.String },
            descSecond: { type: mongoose.Schema.Types.String }
        },

        category: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        subCategory: [{     //Array of Strings
            type: mongoose.Schema.Types.String,
        }],


        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },

        bookImages: [{
            images: { type: mongoose.Schema.Types.String },
            type: { type: mongoose.Schema.Types.String }
        }]
    },
    {
        timestamps: true,
    })

module.exports = mongoose.model("book", bookSchema)






// {
//     "title": "Started friend request",
//         "description": {
//         "descFirst": "friendship",
//             "descSecond": "all about friends"
//     },
//     "category": "Boolywood",
//         "subCategory": [
//             "Drama",
//             "Horror"
//         ],
//             "authorId": "65e570ac150a086d6c0d21fe",
//                 "bookImages": [
//                     {
//                         "images": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1589998059171-988d887df646%3Fq%3D80%26w%3D1000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%253D&tbnid=tHQAVOk5TZIRiM&vet=12ahUKEwj5gq3J2vCEAxWmTmwGHcTWC0UQMygAegQIARBw..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fopen-book&docid=BsSxm3jUdsa4TM&w=1000&h=662&q=book%20images&ved=2ahUKEwj5gq3J2vCEAxWmTmwGHcTWC0UQMygAegQIARBw",
//                         "type": "front"
//                     },
//                     {
//                         "images": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1589998059171-988d887df646%3Fq%3D80%26w%3D1000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%253D&tbnid=tHQAVOk5TZIRiM&vet=12ahUKEwj5gq3J2vCEAxWmTmwGHcTWC0UQMygAegQIARBw..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fopen-book&docid=BsSxm3jUdsa4TM&w=1000&h=662&q=book%20images&ved=2ahUKEwj5gq3J2vCEAxWmTmwGHcTWC0UQMygAegQIARBw",
//                         "type": "back"
//                     },
//                     {
//                         "images": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1589998059171-988d887df646%3Fq%3D80%26w%3D1000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%253D&tbnid=tHQAVOk5TZIRiM&vet=12ahUKEwj5gq3J2vCEAxWmTmwGHcTWC0UQMygAegQIARBw..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fopen-book&docid=BsSxm3jUdsa4TM&w=1000&h=662&q=book%20images&ved=2ahUKEwj5gq3J2vCEAxWmTmwGHcTWC0UQMygAegQIARBw",
//                         "type": "cover"
//                     }
//                 ]
// }



// address:{
//     village:
//     tal:
//     dist:
//     pinCode:
// }


// aadahar card :{
// image: "kdwjhfkwejrf"
// side:front

// image: "jweofjewkfhe"
// side:back

// }