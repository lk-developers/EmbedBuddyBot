const Config = require('./config');

const allowedRoles = Config.getConfigs().ROLES_ALLOWED;

const check = (msg) => {
    let memberRoles = msg.member.roles;
    return allowedRoles.some(role => memberRoles.some(r => r.name === role));
}

module.exports = {
    check
};