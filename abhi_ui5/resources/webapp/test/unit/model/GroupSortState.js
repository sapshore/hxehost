sap.ui.define([
		"technovati/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("CustId").length, 1, "The sorting by CustId returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Name").length, 1, "The sorting by Name returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("CustId").length, 1, "The group by CustId returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to CustId if the user groupes by CustId", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("CustId");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "CustId", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Name and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "CustId");

		this.oGroupSortState.sort("Name");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});