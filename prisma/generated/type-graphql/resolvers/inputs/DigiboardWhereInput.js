"use strict";
var DigiboardWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DigiboardWhereInput = DigiboardWhereInput_1 = class DigiboardWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DigiboardWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DigiboardWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DigiboardWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DigiboardWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DigiboardWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DigiboardWhereInput.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DigiboardWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DigiboardWhereInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DigiboardWhereInput.prototype, "course", void 0);
DigiboardWhereInput = DigiboardWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DigiboardWhereInput", {
        isAbstract: true
    })
], DigiboardWhereInput);
exports.DigiboardWhereInput = DigiboardWhereInput;
