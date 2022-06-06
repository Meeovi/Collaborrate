"use strict";
var SourceScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableWithAggregatesFilter_1 = require("../inputs/BoolNullableWithAggregatesFilter");
const DecimalNullableWithAggregatesFilter_1 = require("../inputs/DecimalNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let SourceScalarWhereWithAggregatesInput = SourceScalarWhereWithAggregatesInput_1 = class SourceScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SourceScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SourceScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SourceScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "pickup_location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "contact_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], SourceScalarWhereWithAggregatesInput.prototype, "postcode", void 0);
SourceScalarWhereWithAggregatesInput = SourceScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SourceScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], SourceScalarWhereWithAggregatesInput);
exports.SourceScalarWhereWithAggregatesInput = SourceScalarWhereWithAggregatesInput;
