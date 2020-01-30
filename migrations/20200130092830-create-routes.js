'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('routes', {
			id: {
				allowNull: false,
				type: Sequelize.STRING,
				primaryKey: true,
			},
			url: {
				type: Sequelize.STRING
			},
			time: {
				type: Sequelize.TIME
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('routes');
	}
};