"use strict";
var GlossaryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let GlossaryWhereInput = GlossaryWhereInput_1 = class GlossaryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlossaryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlossaryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlossaryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], GlossaryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], GlossaryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], GlossaryWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], GlossaryWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], GlossaryWhereInput.prototype, "published", void 0);
GlossaryWhereInput = GlossaryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryWhereInput", {
        isAbstract: true
    })
], GlossaryWhereInput);
exports.GlossaryWhereInput = GlossaryWhereInput;
