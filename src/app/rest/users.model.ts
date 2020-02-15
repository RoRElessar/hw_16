export interface UserI {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  region: string;
  image: {
    url: string;
  };
  sex: string;
  subscription: boolean;
  additional_information: string;
}

export class User implements UserI {

  constructor(data?: UserI) {
    if (!data) {
      return;
    }

    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.name = data.name;
    this.email = data.email;
    this.region = data.region;
    this.image = data.image;
    this.sex = data.sex;
    this.subscription = data.subscription;
    this.additional_information = data.additional_information;
  }

  id: number;
  // tslint:disable-next-line:variable-name
  first_name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  name: string;
  email: string;
  region: string;
  image: {
    url: string;
  };
  sex: string;
  subscription: boolean;
  // tslint:disable-next-line:variable-name
  additional_information: string;
}
