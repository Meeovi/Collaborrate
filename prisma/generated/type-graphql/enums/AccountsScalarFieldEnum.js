"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AccountsScalarFieldEnum;
(function (AccountsScalarFieldEnum) {
    AccountsScalarFieldEnum["id"] = "id";
    AccountsScalarFieldEnum["created_at"] = "created_at";
    AccountsScalarFieldEnum["name"] = "name";
    AccountsScalarFieldEnum["website"] = "website";
    AccountsScalarFieldEnum["office_phone"] = "office_phone";
    AccountsScalarFieldEnum["fax"] = "fax";
    AccountsScalarFieldEnum["email"] = "email";
    AccountsScalarFieldEnum["address"] = "address";
    AccountsScalarFieldEnum["postalcode"] = "postalcode";
    AccountsScalarFieldEnum["city"] = "city";
    AccountsScalarFieldEnum["state"] = "state";
    AccountsScalarFieldEnum["country"] = "country";
    AccountsScalarFieldEnum["assigned_to"] = "assigned_to";
    AccountsScalarFieldEnum["alt_address"] = "alt_address";
    AccountsScalarFieldEnum["alt_postalcode"] = "alt_postalcode";
    AccountsScalarFieldEnum["alt_city"] = "alt_city";
    AccountsScalarFieldEnum["alt_state"] = "alt_state";
    AccountsScalarFieldEnum["alt_country"] = "alt_country";
    AccountsScalarFieldEnum["type"] = "type";
    AccountsScalarFieldEnum["industry"] = "industry";
    AccountsScalarFieldEnum["employees"] = "employees";
    AccountsScalarFieldEnum["annual_revenue"] = "annual_revenue";
    AccountsScalarFieldEnum["member_of"] = "member_of";
    AccountsScalarFieldEnum["campaign"] = "campaign";
})(AccountsScalarFieldEnum = exports.AccountsScalarFieldEnum || (exports.AccountsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AccountsScalarFieldEnum, {
    name: "AccountsScalarFieldEnum",
    description: undefined,
});
