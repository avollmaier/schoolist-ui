import axios from "axios";

export class UserService {
    user: any;

    async isTeacher(): Promise<boolean> {
        const response = await axios.get('/user');
        this.user = response.data;
        console.log(this.user.roles)
        return this.user ? this.user.roles.find((role: string) => role === 'teacher') !== undefined : false;
    }
}