jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"technovati/test/integration/NavigationJourneyPhone",
		"technovati/test/integration/NotFoundJourneyPhone",
		"technovati/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});