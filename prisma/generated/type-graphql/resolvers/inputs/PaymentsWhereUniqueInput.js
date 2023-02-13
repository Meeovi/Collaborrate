"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let PaymentsWhereUniqueInput = class PaymentsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PaymentsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsWhereUniqueInput.prototype, "name", void 0);
PaymentsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaymentsWhereUniqueInput", {
        isAbstract: true
    })
], PaymentsWhereUniqueInput);
exports.PaymentsWhereUniqueInput = PaymentsWhereUniqueInput;
