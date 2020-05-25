function User() {
    this.name = '';
    this.bio = '';
    this.fb_id = '';
}

const CreateUser = () => {
    return new User();
};

export default { CreateUser };
