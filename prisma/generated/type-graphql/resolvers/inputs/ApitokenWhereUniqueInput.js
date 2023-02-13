"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ApitokenWhereUniqueInput = class ApitokenWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ApitokenWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ApitokenWhereUniqueInput.prototype, "token", void 0);
ApitokenWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenWhereUniqueInput", {
        isAbstract: true
    })
], ApitokenWhereUniqueInput);
exports.ApitokenWhereUniqueInput = ApitokenWhereUniqueInput;
