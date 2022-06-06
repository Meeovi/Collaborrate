"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Customer_paymentCountAggregate = class Customer_paymentCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCountAggregate.prototype, "_all", void 0);
Customer_paymentCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_paymentCountAggregate", {
        isAbstract: true
    })
], Customer_paymentCountAggregate);
exports.Customer_paymentCountAggregate = Customer_paymentCountAggregate;
