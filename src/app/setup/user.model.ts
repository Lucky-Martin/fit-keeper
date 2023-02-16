export interface IUser {
    uid: string;
    name: string;
    gender: string;
    age: number;
    height: number;
    weight: number;
    goal: string;
    activity: string;
}

export class User implements IUser {
    uid: string;
    name: string;
    gender = 'male';
    age: number;
    height: number;
    weight: number;
    goal: string;
    activity: string;
}
