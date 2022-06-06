"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Customer_paymentCount = class Customer_paymentCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentCount.prototype, "transactions", void 0);
Customer_paymentCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_paymentCount", {
        isAbstract: true
    })
], Customer_paymentCount);
exports.Customer_paymentCount = Customer_paymentCount;
