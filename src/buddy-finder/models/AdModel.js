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

    constructor(data) {
        this.userAdId = data?.id;
        this.name = data?.user?.firstName; // TODO: refactor
        this.gender = `${data?.user?.gender.charAt(0)}${data?.user?.gender.slice(1).toLowerCase()}`;
        this.age = this.calculateAge(1301554977); // TODO: timestamp
        this.city = data?.user?.city;
        this.university = data?.user?.university;
        this.languages = this.capitalizeFirstLetters(data?.user?.languages).join(', ');
        this.title = data?.title;
        this.description = data?.description;
        this.creationDate = moment.utc(data?.creationDate);
        this.photo = 'https://images.unsplash.com/photo-1586822339087-80cc375ac083?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }

    calculateAge(birthDate) {
        const currentDate = moment.utc();
        const userBirthDate = moment.utc(birthDate);
        return currentDate.diff(userBirthDate, 'years');
    }

    capitalizeFirstLetters(words) {
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0] + words[i].slice(1).toLowerCase();
        }
        return words;
    }
}
