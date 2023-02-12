"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ApitokenWhereInput_1 = require("../inputs/ApitokenWhereInput");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
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
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenWhereInput_1.ApitokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenWhereInput_1.ApitokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenWhereInput_1.ApitokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ApitokenWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ApitokenWhereUniqueInput.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ApitokenWhereUniqueInput.prototype, "description", void 0);
ApitokenWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenWhereUniqueInput", {
        isAbstract: true
    })
], ApitokenWhereUniqueInput);
exports.ApitokenWhereUniqueInput = ApitokenWhereUniqueInput;
