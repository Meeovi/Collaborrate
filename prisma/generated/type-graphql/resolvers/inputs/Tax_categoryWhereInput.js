"use strict";
var Tax_categoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Tax_categoryWhereInput = Tax_categoryWhereInput_1 = class Tax_categoryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_categoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_categoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_categoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Tax_categoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Tax_categoryWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Tax_categoryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Tax_categoryWhereInput.prototype, "default", void 0);
Tax_categoryWhereInput = Tax_categoryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryWhereInput", {
        isAbstract: true
    })
], Tax_categoryWhereInput);
exports.Tax_categoryWhereInput = Tax_categoryWhereInput;
