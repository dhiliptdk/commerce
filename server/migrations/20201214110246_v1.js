
exports.up = function (knex) {
    return knex.schema
        .createTableIfNotExists('Roles', function (table) {
            table.increments('id');
            table.string('name', 10).notNullable();
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
        .createTableIfNotExists('Users', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable()
            table.string('email').notNullable().unique();;
            table.string('phone').notNullable();
            table.string('password').notNullable();
            table.string('roleId').references('Roles.id');
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
        .createTableIfNotExists('Categories', function (table) {
            table.increments('id').primary();;
            table.string('name', 10).notNullable();
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
        .createTableIfNotExists('Products', function (table) {
            table.increments('id').primary();;
            table.string('name', 100).notNullable();
            table.float('price')
            table.integer('quantity')
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
        .createTableIfNotExists('Carts', function (table) {
            table.increments('id').primary();;
            table.integer('totalQuantity')
            table.float('netAmount')
            table.integer('userId').references('Users.id')
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
        .createTableIfNotExists('CartProducts', function (table) {
            table.increments('id').primary();;
            table.integer('cartId').references('Carts.id')
            table.integer('productId').references('Products.id')
            table.integer('quantity')
            table.float('netAmount')
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
        .createTableIfNotExists('ProductCategoryMapping', function (table) {
            table.increments('id').primary();;
            table.integer('categoryId').references('Categories.id')
            table.integer('productId').references('Products.id')
            table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Users')
        .dropTableIfExists('Roles')
        .dropTableIfExists('Categories')
        .dropTableIfExists('Cart')
        .dropTableIfExists('Products')
        .dropTableIfExists('CartProducts')
        .dropTableIfExists('ProductCategoryMapping')
};
