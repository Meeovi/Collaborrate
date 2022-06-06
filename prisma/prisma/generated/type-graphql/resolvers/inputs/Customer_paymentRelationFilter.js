"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentWhereInput_1 = require("../inputs/Customer_paymentWhereInput");
let Customer_paymentRelationFilter = class Customer_paymentRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], Customer_paymentRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], Customer_paymentRelationFilter.prototype, "isNot", void 0);
Customer_paymentRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentRelationFilter", {
        isAbstract: true
    })
], Customer_paymentRelationFilter);
exports.Customer_paymentRelationFilter = Customer_paymentRelationFilter;
