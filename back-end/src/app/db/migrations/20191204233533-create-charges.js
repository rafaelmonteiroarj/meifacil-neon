'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const chargesTable = queryInterface.createTable('charges', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(64),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      installmentPayment: {
        type: Sequelize.INTEGER,
        values: ['1', '2', '3', '4', '5', '6'],
        field: 'installment_payment',
      },
      dateDue: {
        type: Sequelize.DATE,
        field: 'date_due',
      },
      balanceStatus: {
        type: Sequelize.ENUM,
        values: ['released', 'not_released', 'cancelled'],
        field: 'balance_status',
        defaultValue: 'not_released',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP NOT NULL'),
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at',
      },
    });

    return chargesTable;
  },

  down: queryInterface => queryInterface.dropTable('charges'),
};
