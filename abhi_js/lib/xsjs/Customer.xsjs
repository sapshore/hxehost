function readCustomers() {
	var conn = $.hdb.getConnection();

	var fnGetCustomers = conn.loadProcedure("hxehost.abhi_db.procs::getCustomers");

	var result = fnGetCustomers();

	conn.close();
	return result;
}

var output = readCustomers();
//Pass output to response
$.response.status = $.net.http.OK;
$.response.contentType = "application/json";
$.response.setBody(JSON.stringify(output));