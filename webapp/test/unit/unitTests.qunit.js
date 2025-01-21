/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"test/form_fiori/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});