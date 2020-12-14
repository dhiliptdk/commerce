module.exports = {
    secrets: {
        session: "secrets"
    },
    knex: {
        client: 'sqlite3',
        connection: {
            filename: "./dev.sqlite3"
        },
        useNullAsDefault: true
    },
    whitelistURLs: [/http:\/\/172.16.1.94:(\d{4})/, /http:\/\/localhost:(\d{4})/],
}