export class Users {
    "_id": any;
    "nom": String;
    "prenom": String;
    "imageuser": String;
    "mail": String;
    "numtel": String;
    "motdepasse": String;
    "status": Boolean;
    "posts": Array<Posts>;
}

export interface Posts {
    "_id": any;
    "image": String;
    "date": String;
    "description": String;
    "dateExpiration": String;
    "genreAnimale": String;
    "typeAnimale": String;
    "typeAnnonce": String;
    "comments": Array<Comments>;
}

export interface Comments {
    "_id": any;
    "comment": String;
}
