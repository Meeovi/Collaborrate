"use strict";
var CustomersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsListRelationFilter_1 = require("../inputs/CommentsListRelationFilter");
const Credit_memosListRelationFilter_1 = require("../inputs/Credit_memosListRelationFilter");
const Customer_groupListRelationFilter_1 = require("../inputs/Customer_groupListRelationFilter");
const Customer_paymentRelationFilter_1 = require("../inputs/Customer_paymentRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EmailsListRelationFilter_1 = require("../inputs/EmailsListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const Newsletter_subscribersListRelationFilter_1 = require("../inputs/Newsletter_subscribersListRelationFilter");
const OrdersListRelationFilter_1 = require("../inputs/OrdersListRelationFilter");
const QuotesListRelationFilter_1 = require("../inputs/QuotesListRelationFilter");
const ReturnsListRelationFilter_1 = require("../inputs/ReturnsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CustomersWhereInput = CustomersWhereInput_1 = class CustomersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CustomersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CustomersWhereInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CustomersWhereInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CustomersWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CustomersWhereInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomersWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsListRelationFilter_1.CommentsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsListRelationFilter_1.CommentsListRelationFilter)
], CustomersWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosListRelationFilter_1.Credit_memosListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosListRelationFilter_1.Credit_memosListRelationFilter)
], CustomersWhereInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupListRelationFilter_1.Customer_groupListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupListRelationFilter_1.Customer_groupListRelationFilter)
], CustomersWhereInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentRelationFilter_1.Customer_paymentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentRelationFilter_1.Customer_paymentRelationFilter)
], CustomersWhereInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsListRelationFilter_1.EmailsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsListRelationFilter_1.EmailsListRelationFilter)
], CustomersWhereInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersListRelationFilter_1.Newsletter_subscribersListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersListRelationFilter_1.Newsletter_subscribersListRelationFilter)
], CustomersWhereInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersListRelationFilter_1.OrdersListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersListRelationFilter_1.OrdersListRelationFilter)
], CustomersWhereInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesListRelationFilter_1.QuotesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesListRelationFilter_1.QuotesListRelationFilter)
], CustomersWhereInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsListRelationFilter_1.ReturnsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsListRelationFilter_1.ReturnsListRelationFilter)
], CustomersWhereInput.prototype, "returns", void 0);
CustomersWhereInput = CustomersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersWhereInput", {
        isAbstract: true
    })
], CustomersWhereInput);
exports.CustomersWhereInput = CustomersWhereInput;
