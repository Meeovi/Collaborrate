"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LeadsOrderByRelevanceFieldEnum;
(function (LeadsOrderByRelevanceFieldEnum) {
    LeadsOrderByRelevanceFieldEnum["Prefix"] = "Prefix";
    LeadsOrderByRelevanceFieldEnum["first_name"] = "first_name";
    LeadsOrderByRelevanceFieldEnum["last_name"] = "last_name";
    LeadsOrderByRelevanceFieldEnum["department"] = "department";
    LeadsOrderByRelevanceFieldEnum["account_name"] = "account_name";
    LeadsOrderByRelevanceFieldEnum["address"] = "address";
    LeadsOrderByRelevanceFieldEnum["postalcode"] = "postalcode";
    LeadsOrderByRelevanceFieldEnum["city"] = "city";
    LeadsOrderByRelevanceFieldEnum["state"] = "state";
    LeadsOrderByRelevanceFieldEnum["country"] = "country";
    LeadsOrderByRelevanceFieldEnum["email"] = "email";
    LeadsOrderByRelevanceFieldEnum["description"] = "description";
    LeadsOrderByRelevanceFieldEnum["fax"] = "fax";
    LeadsOrderByRelevanceFieldEnum["website"] = "website";
    LeadsOrderByRelevanceFieldEnum["mobile"] = "mobile";
    LeadsOrderByRelevanceFieldEnum["job_title"] = "job_title";
    LeadsOrderByRelevanceFieldEnum["alt_address"] = "alt_address";
    LeadsOrderByRelevanceFieldEnum["alt_postalcode"] = "alt_postalcode";
    LeadsOrderByRelevanceFieldEnum["alt_city"] = "alt_city";
    LeadsOrderByRelevanceFieldEnum["alt_state"] = "alt_state";
    LeadsOrderByRelevanceFieldEnum["alt_country"] = "alt_country";
    LeadsOrderByRelevanceFieldEnum["office_phone"] = "office_phone";
    LeadsOrderByRelevanceFieldEnum["status"] = "status";
    LeadsOrderByRelevanceFieldEnum["status_description"] = "status_description";
    LeadsOrderByRelevanceFieldEnum["opportunity_amount"] = "opportunity_amount";
    LeadsOrderByRelevanceFieldEnum["campaign"] = "campaign";
    LeadsOrderByRelevanceFieldEnum["lead_source"] = "lead_source";
    LeadsOrderByRelevanceFieldEnum["lead_source_description"] = "lead_source_description";
    LeadsOrderByRelevanceFieldEnum["referred_by"] = "referred_by";
    LeadsOrderByRelevanceFieldEnum["customer_name"] = "customer_name";
})(LeadsOrderByRelevanceFieldEnum = exports.LeadsOrderByRelevanceFieldEnum || (exports.LeadsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(LeadsOrderByRelevanceFieldEnum, {
    name: "LeadsOrderByRelevanceFieldEnum",
    description: undefined,
});
