"use strict";
var Tax_ruleScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Tax_ruleScalarWhereInput = Tax_ruleScalarWhereInput_1 = class Tax_ruleScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Tax_ruleScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Tax_ruleScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Tax_ruleScalarWhereInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Tax_ruleScalarWhereInput.prototype, "prod_id", void 0);
Tax_ruleScalarWhereInput = Tax_ruleScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleScalarWhereInput", {
        isAbstract: true
    })
], Tax_ruleScalarWhereInput);
exports.Tax_ruleScalarWhereInput = Tax_ruleScalarWhereInput;
