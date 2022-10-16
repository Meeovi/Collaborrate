"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Customer_groupWhereUniqueInput = class Customer_groupWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_groupWhereUniqueInput.prototype, "id", void 0);
Customer_groupWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupWhereUniqueInput", {
        isAbstract: true
    })
], Customer_groupWhereUniqueInput);
exports.Customer_groupWhereUniqueInput = Customer_groupWhereUniqueInput;
