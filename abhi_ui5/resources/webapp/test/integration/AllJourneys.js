jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 customers in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"technovati/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"technovati/test/integration/pages/App",
	"technovati/test/integration/pages/Browser",
	"technovati/test/integration/pages/Master",
	"technovati/test/integration/pages/Detail",
	"technovati/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "technovati.view."
	});

	sap.ui.require([
		"technovati/test/integration/MasterJourney",
		"technovati/test/integration/NavigationJourney",
		"technovati/test/integration/NotFoundJourney",
		"technovati/test/integration/BusyJourney",
		"technovati/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});