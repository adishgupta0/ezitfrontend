// const baseUrlConst = 'http://localhost:3000/';
const baseUrlConst = 'https://ezitbackend.herokuapp.com/';


var global = {

    baseUrl: baseUrlConst,
    contactUs:baseUrlConst + 'api/contactUs',
    addUserDetails : baseUrlConst + 'api/user/testPayment/',
    submitAllAnswers : baseUrlConst + 'api/user/submitAllAnswers'

};

export default global;