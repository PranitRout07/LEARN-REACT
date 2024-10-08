import { Client,Account,ID} from "appwrite"
import conf from "../conf/conf"

export class AuthService{
    client =  new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.account(this.client)
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                //call another method,directly login
                return this.login(email,password)
            }else{
                return userAccount;
            }
        
        }catch(error){
            throw error
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password)
        
        }catch(error){
            throw error
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Get Current User Error".error)
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
        throw error
    }
    }



}

const authService = new AuthService();

export default authService;