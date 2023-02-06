"use strict";
var ApitokenWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ApitokenWhereInput = ApitokenWhereInput_1 = class ApitokenWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ApitokenWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ApitokenWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ApitokenWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ApitokenWhereInput.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ApitokenWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ApitokenWhereInput.prototype, "token", void 0);
ApitokenWhereInput = ApitokenWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenWhereInput", {
        isAbstract: true
    })
], ApitokenWhereInput);
exports.ApitokenWhereInput = ApitokenWhereInput;
