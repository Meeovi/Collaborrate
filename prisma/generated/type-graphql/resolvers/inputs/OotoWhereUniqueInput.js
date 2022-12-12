"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let OotoWhereUniqueInput = class OotoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OotoWhereUniqueInput.prototype, "id", void 0);
OotoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OotoWhereUniqueInput", {
        isAbstract: true
    })
], OotoWhereUniqueInput);
exports.OotoWhereUniqueInput = OotoWhereUniqueInput;
