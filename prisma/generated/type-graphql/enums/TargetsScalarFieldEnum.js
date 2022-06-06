"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TargetsScalarFieldEnum;
(function (TargetsScalarFieldEnum) {
    TargetsScalarFieldEnum["id"] = "id";
    TargetsScalarFieldEnum["created_at"] = "created_at";
    TargetsScalarFieldEnum["Prefix"] = "Prefix";
    TargetsScalarFieldEnum["first_name"] = "first_name";
    TargetsScalarFieldEnum["last_name"] = "last_name";
    TargetsScalarFieldEnum["department"] = "department";
    TargetsScalarFieldEnum["account_name"] = "account_name";
    TargetsScalarFieldEnum["address"] = "address";
    TargetsScalarFieldEnum["postalcode"] = "postalcode";
    TargetsScalarFieldEnum["city"] = "city";
    TargetsScalarFieldEnum["state"] = "state";
    TargetsScalarFieldEnum["country"] = "country";
    TargetsScalarFieldEnum["email"] = "email";
    TargetsScalarFieldEnum["description"] = "description";
    TargetsScalarFieldEnum["fax"] = "fax";
    TargetsScalarFieldEnum["website"] = "website";
    TargetsScalarFieldEnum["mobile"] = "mobile";
    TargetsScalarFieldEnum["job_title"] = "job_title";
    TargetsScalarFieldEnum["alt_address"] = "alt_address";
    TargetsScalarFieldEnum["alt_postalcode"] = "alt_postalcode";
    TargetsScalarFieldEnum["alt_city"] = "alt_city";
    TargetsScalarFieldEnum["alt_state"] = "alt_state";
    TargetsScalarFieldEnum["alt_country"] = "alt_country";
    TargetsScalarFieldEnum["office_phone"] = "office_phone";
    TargetsScalarFieldEnum["customer_name"] = "customer_name";
    TargetsScalarFieldEnum["email_opt_out"] = "email_opt_out";
    TargetsScalarFieldEnum["donotcall"] = "donotcall";
})(TargetsScalarFieldEnum = exports.TargetsScalarFieldEnum || (exports.TargetsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TargetsScalarFieldEnum, {
    name: "TargetsScalarFieldEnum",
    description: undefined,
});
