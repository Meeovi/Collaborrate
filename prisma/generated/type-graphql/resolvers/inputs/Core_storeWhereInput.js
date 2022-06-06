"use strict";
var Core_storeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Core_storeWhereInput = Core_storeWhereInput_1 = class Core_storeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Core_storeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Core_storeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Core_storeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Core_storeWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Core_storeWhereInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Core_storeWhereInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Core_storeWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Core_storeWhereInput.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Core_storeWhereInput.prototype, "tag", void 0);
Core_storeWhereInput = Core_storeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeWhereInput", {
        isAbstract: true
    })
], Core_storeWhereInput);
exports.Core_storeWhereInput = Core_storeWhereInput;
