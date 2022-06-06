"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Customer_groupCreateWithoutCustomersInput = class Customer_groupCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_groupCreateWithoutCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_groupCreateWithoutCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCreateWithoutCustomersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCreateWithoutCustomersInput.prototype, "tax_class", void 0);
Customer_groupCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCreateWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupCreateWithoutCustomersInput);
exports.Customer_groupCreateWithoutCustomersInput = Customer_groupCreateWithoutCustomersInput;
