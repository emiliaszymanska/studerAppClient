export class UserProfileModel {

    id;
    name;
    gender;
    age;
    university;
    city;
    languages;
    photo;
    email;

    constructor(data) {
        this.id = data?.id;
        this.name = data?.name;
        this.gender = data?.gender;
        this.age = data?.age;
        this.university = data?.university;
        this.city = data?.city;
        this.languages = data?.languages;
        this.photo = data?.photo;
        this.email = data?.email;
    }
}
