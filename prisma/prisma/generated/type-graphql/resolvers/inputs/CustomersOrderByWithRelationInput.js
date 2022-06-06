"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsOrderByRelationAggregateInput_1 = require("../inputs/CommentsOrderByRelationAggregateInput");
const Credit_memosOrderByRelationAggregateInput_1 = require("../inputs/Credit_memosOrderByRelationAggregateInput");
const Customer_groupOrderByRelationAggregateInput_1 = require("../inputs/Customer_groupOrderByRelationAggregateInput");
const Customer_paymentOrderByWithRelationInput_1 = require("../inputs/Customer_paymentOrderByWithRelationInput");
const EmailsOrderByRelationAggregateInput_1 = require("../inputs/EmailsOrderByRelationAggregateInput");
const Newsletter_subscribersOrderByRelationAggregateInput_1 = require("../inputs/Newsletter_subscribersOrderByRelationAggregateInput");
const OrdersOrderByRelationAggregateInput_1 = require("../inputs/OrdersOrderByRelationAggregateInput");
const QuotesOrderByRelationAggregateInput_1 = require("../inputs/QuotesOrderByRelationAggregateInput");
const ReturnsOrderByRelationAggregateInput_1 = require("../inputs/ReturnsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomersOrderByWithRelationInput = class CustomersOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByWithRelationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsOrderByRelationAggregateInput_1.CommentsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsOrderByRelationAggregateInput_1.CommentsOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosOrderByRelationAggregateInput_1.Credit_memosOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosOrderByRelationAggregateInput_1.Credit_memosOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupOrderByRelationAggregateInput_1.Customer_groupOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupOrderByRelationAggregateInput_1.Customer_groupOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput)
], CustomersOrderByWithRelationInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsOrderByRelationAggregateInput_1.EmailsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsOrderByRelationAggregateInput_1.EmailsOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersOrderByRelationAggregateInput_1.Newsletter_subscribersOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersOrderByRelationAggregateInput_1.Newsletter_subscribersOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersOrderByRelationAggregateInput_1.OrdersOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersOrderByRelationAggregateInput_1.OrdersOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesOrderByRelationAggregateInput_1.QuotesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesOrderByRelationAggregateInput_1.QuotesOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsOrderByRelationAggregateInput_1.ReturnsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsOrderByRelationAggregateInput_1.ReturnsOrderByRelationAggregateInput)
], CustomersOrderByWithRelationInput.prototype, "returns", void 0);
CustomersOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersOrderByWithRelationInput", {
        isAbstract: true
    })
], CustomersOrderByWithRelationInput);
exports.CustomersOrderByWithRelationInput = CustomersOrderByWithRelationInput;
