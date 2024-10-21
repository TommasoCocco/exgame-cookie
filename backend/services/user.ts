import { Role, User } from "../../api-types";
import DB from "./db"

const DB: User[] = [];

const userSchema = new DB.schema("user",{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    create_at: string;
    update_at: string;
    role: string;
})

const User = DB.model("user", userSchema)


export const index = () => {
    return DB.find;
};

export const getUserByRole = (role:Role) => {
    return DB.filter((el) => el.role === role)
}

export const view = (id: string) => {
    return DB.find((el) => el._id === id);
};

export const add = (User: User) => {
    DB.push(User);
};

export const edit = (User: User) => {
    const document = DB.find((el) => el._id === User._id);
    
    if(!document){
        throw new Error(`Can't find User by id: ${User._id}`);
    }

    const updateDocument = { ...document, ...User };

    DB.find((el, i) => {
        if(el._id === updateDocument._id){
            DB[i] = updateDocument;
        }
    });
};

export const remove = (id: string) => {
    DB.forEach((el, i) => {
        if(el._id === id){
            DB.splice(i, 1);
        }
    });
};