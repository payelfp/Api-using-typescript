import mongoose from "mongoose"

interface UserI{
    name : string;
    post : string;
}

interface UserDocument extends mongoose.Document{
    name : string;
    post : string;
}
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    post:{
        type: String,
        required: true,
    },
});

interface userModelInterface extends mongoose.Model<UserDocument>{
    set(x :UserI): UserDocument;

}

userSchema.statics.set=(x:UserI)=>{
    return new User(x);
};
const User = mongoose.model<UserDocument,userModelInterface>(
    "User",
    userSchema
    );

User.set({
    name :"name",
    post:"post"
});

export {User};