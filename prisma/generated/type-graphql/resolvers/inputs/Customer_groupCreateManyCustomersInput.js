"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCreateManyCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Customer_groupCreateManyCustomersInput = class Customer_groupCreateManyCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_groupCreateManyCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_groupCreateManyCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCreateManyCustomersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCreateManyCustomersInput.prototype, "tax_class", void 0);
Customer_groupCreateManyCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCreateManyCustomersInput", {
        isAbstract: true
    })
], Customer_groupCreateManyCustomersInput);
exports.Customer_groupCreateManyCustomersInput = Customer_groupCreateManyCustomersInput;
