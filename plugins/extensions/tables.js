const $ = require('jquery')
const DataTable = require('datatables.net')
require('datatables.net-dt')

$(document).ready( function () {
    $('#table_id').DataTable();
} );