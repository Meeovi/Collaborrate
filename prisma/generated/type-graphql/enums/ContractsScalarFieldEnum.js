"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ContractsScalarFieldEnum;
(function (ContractsScalarFieldEnum) {
    ContractsScalarFieldEnum["id"] = "id";
    ContractsScalarFieldEnum["contract_title"] = "contract_title";
    ContractsScalarFieldEnum["contract_value"] = "contract_value";
    ContractsScalarFieldEnum["start_date"] = "start_date";
    ContractsScalarFieldEnum["end_date"] = "end_date";
    ContractsScalarFieldEnum["renewal_reminder"] = "renewal_reminder";
    ContractsScalarFieldEnum["customer_signed_date"] = "customer_signed_date";
    ContractsScalarFieldEnum["company_signed_date"] = "company_signed_date";
    ContractsScalarFieldEnum["status"] = "status";
    ContractsScalarFieldEnum["contract_manager"] = "contract_manager";
    ContractsScalarFieldEnum["account"] = "account";
    ContractsScalarFieldEnum["contact"] = "contact";
    ContractsScalarFieldEnum["description"] = "description";
    ContractsScalarFieldEnum["opportunity"] = "opportunity";
    ContractsScalarFieldEnum["contract_type"] = "contract_type";
    ContractsScalarFieldEnum["currency"] = "currency";
    ContractsScalarFieldEnum["line_items"] = "line_items";
    ContractsScalarFieldEnum["total"] = "total";
    ContractsScalarFieldEnum["discount"] = "discount";
    ContractsScalarFieldEnum["subtotal"] = "subtotal";
    ContractsScalarFieldEnum["shipping"] = "shipping";
    ContractsScalarFieldEnum["shipping_tax"] = "shipping_tax";
    ContractsScalarFieldEnum["tax"] = "tax";
    ContractsScalarFieldEnum["grand_total"] = "grand_total";
    ContractsScalarFieldEnum["created_at"] = "created_at";
})(ContractsScalarFieldEnum = exports.ContractsScalarFieldEnum || (exports.ContractsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ContractsScalarFieldEnum, {
    name: "ContractsScalarFieldEnum",
    description: undefined,
});
