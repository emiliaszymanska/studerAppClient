import * as moment from 'moment';

export class AdModel {

    userAdId;
    name;
    gender;
    age;
    city;
    university;
    languages;
    title;
    description;
    creationDate;
    photo;

    // TODO
    constructor(data) {
        this.userAdId = data?.id;
        this.name = `${data?.user?.firstName} ${data?.user?.lastName}`; // TODO: refactor
        this.gender = 'Female'; // TODO
        this.age = this.calculateAge(1301554977); // timestamp
        this.city = data?.city;
        this.university = data?.university;
        this.languages = data?.languages;
        this.title = data?.title;
        this.description = data?.description;
        this.creationDate = moment.utc(1617110071652);
        this.photo = 'https://images.unsplash.com/photo-1586822339087-80cc375ac083?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }

    calculateAge(birthDate) {
        const currentDate = moment.utc();
        const userBirthDate = moment.utc(birthDate);
        return currentDate.diff(userBirthDate, 'years');
    }
}
