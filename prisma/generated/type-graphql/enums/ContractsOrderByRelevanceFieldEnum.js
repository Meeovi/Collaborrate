"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ContractsOrderByRelevanceFieldEnum;
(function (ContractsOrderByRelevanceFieldEnum) {
    ContractsOrderByRelevanceFieldEnum["contract_title"] = "contract_title";
    ContractsOrderByRelevanceFieldEnum["contract_value"] = "contract_value";
    ContractsOrderByRelevanceFieldEnum["start_date"] = "start_date";
    ContractsOrderByRelevanceFieldEnum["end_date"] = "end_date";
    ContractsOrderByRelevanceFieldEnum["renewal_reminder"] = "renewal_reminder";
    ContractsOrderByRelevanceFieldEnum["customer_signed_date"] = "customer_signed_date";
    ContractsOrderByRelevanceFieldEnum["company_signed_date"] = "company_signed_date";
    ContractsOrderByRelevanceFieldEnum["status"] = "status";
    ContractsOrderByRelevanceFieldEnum["contract_manager"] = "contract_manager";
    ContractsOrderByRelevanceFieldEnum["account"] = "account";
    ContractsOrderByRelevanceFieldEnum["contact"] = "contact";
    ContractsOrderByRelevanceFieldEnum["description"] = "description";
    ContractsOrderByRelevanceFieldEnum["opportunity"] = "opportunity";
    ContractsOrderByRelevanceFieldEnum["contract_type"] = "contract_type";
    ContractsOrderByRelevanceFieldEnum["currency"] = "currency";
    ContractsOrderByRelevanceFieldEnum["line_items"] = "line_items";
    ContractsOrderByRelevanceFieldEnum["total"] = "total";
    ContractsOrderByRelevanceFieldEnum["discount"] = "discount";
    ContractsOrderByRelevanceFieldEnum["subtotal"] = "subtotal";
    ContractsOrderByRelevanceFieldEnum["shipping"] = "shipping";
    ContractsOrderByRelevanceFieldEnum["shipping_tax"] = "shipping_tax";
    ContractsOrderByRelevanceFieldEnum["tax"] = "tax";
    ContractsOrderByRelevanceFieldEnum["grand_total"] = "grand_total";
})(ContractsOrderByRelevanceFieldEnum = exports.ContractsOrderByRelevanceFieldEnum || (exports.ContractsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ContractsOrderByRelevanceFieldEnum, {
    name: "ContractsOrderByRelevanceFieldEnum",
    description: undefined,
});
