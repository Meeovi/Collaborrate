"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Customer_paymentAvgAggregate = class Customer_paymentAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentAvgAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentAvgAggregate.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentAvgAggregate.prototype, "expiry", void 0);
Customer_paymentAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_paymentAvgAggregate", {
        isAbstract: true
    })
], Customer_paymentAvgAggregate);
exports.Customer_paymentAvgAggregate = Customer_paymentAvgAggregate;
