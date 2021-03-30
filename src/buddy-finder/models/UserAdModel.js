import * as moment from 'moment';

export class UserAdModel {

    userId;
    name;
    sex;
    age;
    city;
    university;
    languages;
    title;
    description;
    photo;

    constructor(data) {
        this.userId = 5; // TODO
        this.name = `${data?.user?.firstName} ${data?.user?.lastName}`; // TODO: refactor
        this.sex = 'Female'; // TODO
        this.age = moment.utc(1617110071652); // timestamp
        this.city = data?.city;
        this.university = data?.university;
        this.languages = data?.languages;
        this.title = data?.title;
        this.description = data?.description;
        this.photo = 'https://images.unsplash.com/photo-1586822339087-80cc375ac083?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }
}
