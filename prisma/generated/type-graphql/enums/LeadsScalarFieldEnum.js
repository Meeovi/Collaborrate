"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LeadsScalarFieldEnum;
(function (LeadsScalarFieldEnum) {
    LeadsScalarFieldEnum["id"] = "id";
    LeadsScalarFieldEnum["created_at"] = "created_at";
    LeadsScalarFieldEnum["Prefix"] = "Prefix";
    LeadsScalarFieldEnum["first_name"] = "first_name";
    LeadsScalarFieldEnum["last_name"] = "last_name";
    LeadsScalarFieldEnum["department"] = "department";
    LeadsScalarFieldEnum["account_name"] = "account_name";
    LeadsScalarFieldEnum["address"] = "address";
    LeadsScalarFieldEnum["postalcode"] = "postalcode";
    LeadsScalarFieldEnum["city"] = "city";
    LeadsScalarFieldEnum["state"] = "state";
    LeadsScalarFieldEnum["country"] = "country";
    LeadsScalarFieldEnum["email"] = "email";
    LeadsScalarFieldEnum["description"] = "description";
    LeadsScalarFieldEnum["fax"] = "fax";
    LeadsScalarFieldEnum["website"] = "website";
    LeadsScalarFieldEnum["mobile"] = "mobile";
    LeadsScalarFieldEnum["job_title"] = "job_title";
    LeadsScalarFieldEnum["alt_address"] = "alt_address";
    LeadsScalarFieldEnum["alt_postalcode"] = "alt_postalcode";
    LeadsScalarFieldEnum["alt_city"] = "alt_city";
    LeadsScalarFieldEnum["alt_state"] = "alt_state";
    LeadsScalarFieldEnum["alt_country"] = "alt_country";
    LeadsScalarFieldEnum["office_phone"] = "office_phone";
    LeadsScalarFieldEnum["status"] = "status";
    LeadsScalarFieldEnum["status_description"] = "status_description";
    LeadsScalarFieldEnum["opportunity_amount"] = "opportunity_amount";
    LeadsScalarFieldEnum["campaign"] = "campaign";
    LeadsScalarFieldEnum["lead_source"] = "lead_source";
    LeadsScalarFieldEnum["lead_source_description"] = "lead_source_description";
    LeadsScalarFieldEnum["referred_by"] = "referred_by";
    LeadsScalarFieldEnum["customer_name"] = "customer_name";
})(LeadsScalarFieldEnum = exports.LeadsScalarFieldEnum || (exports.LeadsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LeadsScalarFieldEnum, {
    name: "LeadsScalarFieldEnum",
    description: undefined,
});
