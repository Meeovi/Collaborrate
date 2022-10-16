"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NewslettersScalarFieldEnum;
(function (NewslettersScalarFieldEnum) {
    NewslettersScalarFieldEnum["id"] = "id";
    NewslettersScalarFieldEnum["email"] = "email";
    NewslettersScalarFieldEnum["customer_first_name"] = "customer_first_name";
    NewslettersScalarFieldEnum["customer_last_name"] = "customer_last_name";
    NewslettersScalarFieldEnum["store"] = "store";
    NewslettersScalarFieldEnum["status"] = "status";
    NewslettersScalarFieldEnum["websites"] = "websites";
    NewslettersScalarFieldEnum["created_at"] = "created_at";
    NewslettersScalarFieldEnum["cust_id"] = "cust_id";
    NewslettersScalarFieldEnum["customers"] = "customers";
})(NewslettersScalarFieldEnum = exports.NewslettersScalarFieldEnum || (exports.NewslettersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(NewslettersScalarFieldEnum, {
    name: "NewslettersScalarFieldEnum",
    description: undefined,
});
