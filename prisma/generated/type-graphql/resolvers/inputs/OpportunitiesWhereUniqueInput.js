"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let OpportunitiesWhereUniqueInput = class OpportunitiesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OpportunitiesWhereUniqueInput.prototype, "id", void 0);
OpportunitiesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OpportunitiesWhereUniqueInput", {
        isAbstract: true
    })
], OpportunitiesWhereUniqueInput);
exports.OpportunitiesWhereUniqueInput = OpportunitiesWhereUniqueInput;
