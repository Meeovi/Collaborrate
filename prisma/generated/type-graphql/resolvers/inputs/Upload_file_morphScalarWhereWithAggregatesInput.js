"use strict";
var Upload_file_morphScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let Upload_file_morphScalarWhereWithAggregatesInput = Upload_file_morphScalarWhereWithAggregatesInput_1 = class Upload_file_morphScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Upload_file_morphScalarWhereWithAggregatesInput.prototype, "order", void 0);
Upload_file_morphScalarWhereWithAggregatesInput = Upload_file_morphScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], Upload_file_morphScalarWhereWithAggregatesInput);
exports.Upload_file_morphScalarWhereWithAggregatesInput = Upload_file_morphScalarWhereWithAggregatesInput;
