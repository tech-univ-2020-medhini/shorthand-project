'use strict';
module.exports = (sequelize, DataTypes) => {
	const routes = sequelize.define('routes', {
		id: DataTypes.STRING,
		url: DataTypes.STRING,
		time: DataTypes.TIME
	}, {});
	routes.associate = function(models) {
		// associations can be defined here
	};
	return routes;
};