// Update with your config settings.
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      hostname: 'http://localhost:3306',
      database: 'node_express_knex',
      user: 'root',
      password: '1234'
    },
    pool: {
      min: 30,
      max: 50
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  staging: {
    client: 'mysql',
    connection: {
      hostname: 'http://localhost:3306',
      database: 'node_express_knex',
      user: 'root',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      hostname: 'http://localhost:3306',
      database: 'node_express_knex',
      user: 'root',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
