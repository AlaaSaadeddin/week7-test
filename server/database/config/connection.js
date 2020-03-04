require('env2')('config.env');
const { Pool } = require('pg');

let dbUrl ;

if(process.env.NODE_ENV === 'production') dbUrl = process.env.DATABASE_URL;
else if(process.env.NODE_ENV === 'development') dbUrl = process.env.DEV_DB;
if (!dbUrl) throw new Error('No Database URL!!!');

const option = {
  connectionString: dbUrl,
};

module.exports = new Pool(option);
