import conf from "../conf/conf";
import { ID, Client, Account } from "appwrite"


export class Authentication {
    
    client = new Client();
    account;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    // Creation of a brand new account 

    async signup({name, email, password}){
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });
            return user ? this.login({email, password}) : user;
        } catch (err) {
            console.error("Account not created", err.message);
            throw err;
        }
    }

    // Login functionality here

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({email, password});
        } catch (err) {
            console.error("Login failed", err.message);
            throw err;
        }
    }

    // Logout functionality here

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (err) {
            console.error("Logout request failed", err.message);
            throw err;
        }
    }

    // Checking wether a user has logged in or not

    async checkUser(){
        try {
            return await this.account.get();
        } catch (err) {
            console.error("Something went wrong", err.message);
            throw err;
        }
        return null;
    }
}

const authentication = new Authentication();

export default authentication;