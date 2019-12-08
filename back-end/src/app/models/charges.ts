export = (sequelize, DataTypes) => {
  const Charges = sequelize.define(
    'charges',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(64),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      installmentPayment: {
        allowNull: false,
        type: DataTypes.INTEGER,
        values: ['1', '2', '3', '4', '5', '6'],
        field: 'installment_payment',
      },
      dateDue: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'date_due',
      },
      balanceStatus: {
        type: DataTypes.ENUM,
        values: ['released', 'not_released', 'cancelled'],
        field: 'balance_status',
        defaultValue: 'not_released',
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        field: 'updated_at',
      },
    },
    {
      hooks: {
        beforeSave: charge => {
          if (charge.installmentPayment === 2) {
            charge.value = parseInt(charge.value) + (charge.value * 0.5) / 100;
          }
          if (charge.installmentPayment === 3) {
            charge.value = parseInt(charge.value) + (charge.value * 1.5) / 100;
          }
          if (charge.installmentPayment === 4) {
            charge.value = parseInt(charge.value) + (charge.value * 2.5) / 100;
          }
        },
      },
    },
    {
      tableName: 'charges',
    },
  );

  return Charges;
};
