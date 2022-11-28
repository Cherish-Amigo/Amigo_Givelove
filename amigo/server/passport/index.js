const passport = require('passport');
const localUser = require('./localUserStrategy');
const localTeam = require('./localTeamStrategy');
const User = require('../models/user');
const Team = require('../models/team');

module.exports = () => {
  passport.serializeUser((person, done) => {
        done(null, person.id);
    });

  passport.deserializeUser(async (id, done) => {

    const user = await User.findOne({where: { id }});

    const team = await Team.findOne({where: { id }});

    if(user){
      done(null, user);
    }else if(team){
      done(null, team);
    }else{
      done("find not error");
    }

    });

  localUser();
  localTeam();
};