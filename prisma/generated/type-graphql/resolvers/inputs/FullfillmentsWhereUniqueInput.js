"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let FullfillmentsWhereUniqueInput = class FullfillmentsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], FullfillmentsWhereUniqueInput.prototype, "id", void 0);
FullfillmentsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FullfillmentsWhereUniqueInput", {
        isAbstract: true
    })
], FullfillmentsWhereUniqueInput);
exports.FullfillmentsWhereUniqueInput = FullfillmentsWhereUniqueInput;
