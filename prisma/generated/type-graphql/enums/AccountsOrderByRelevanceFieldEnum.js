"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AccountsOrderByRelevanceFieldEnum;
(function (AccountsOrderByRelevanceFieldEnum) {
    AccountsOrderByRelevanceFieldEnum["name"] = "name";
    AccountsOrderByRelevanceFieldEnum["website"] = "website";
    AccountsOrderByRelevanceFieldEnum["office_phone"] = "office_phone";
    AccountsOrderByRelevanceFieldEnum["fax"] = "fax";
    AccountsOrderByRelevanceFieldEnum["email"] = "email";
    AccountsOrderByRelevanceFieldEnum["address"] = "address";
    AccountsOrderByRelevanceFieldEnum["postalcode"] = "postalcode";
    AccountsOrderByRelevanceFieldEnum["city"] = "city";
    AccountsOrderByRelevanceFieldEnum["state"] = "state";
    AccountsOrderByRelevanceFieldEnum["country"] = "country";
    AccountsOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    AccountsOrderByRelevanceFieldEnum["alt_address"] = "alt_address";
    AccountsOrderByRelevanceFieldEnum["alt_postalcode"] = "alt_postalcode";
    AccountsOrderByRelevanceFieldEnum["alt_city"] = "alt_city";
    AccountsOrderByRelevanceFieldEnum["alt_state"] = "alt_state";
    AccountsOrderByRelevanceFieldEnum["alt_country"] = "alt_country";
    AccountsOrderByRelevanceFieldEnum["type"] = "type";
    AccountsOrderByRelevanceFieldEnum["industry"] = "industry";
    AccountsOrderByRelevanceFieldEnum["employees"] = "employees";
    AccountsOrderByRelevanceFieldEnum["annual_revenue"] = "annual_revenue";
    AccountsOrderByRelevanceFieldEnum["member_of"] = "member_of";
    AccountsOrderByRelevanceFieldEnum["campaign"] = "campaign";
})(AccountsOrderByRelevanceFieldEnum = exports.AccountsOrderByRelevanceFieldEnum || (exports.AccountsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AccountsOrderByRelevanceFieldEnum, {
    name: "AccountsOrderByRelevanceFieldEnum",
    description: undefined,
});
