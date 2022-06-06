"use strict";
var Upload_file_morphWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Upload_file_morphWhereInput = Upload_file_morphWhereInput_1 = class Upload_file_morphWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_file_morphWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_file_morphWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_file_morphWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Upload_file_morphWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_file_morphWhereInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_file_morphWhereInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_file_morphWhereInput.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Upload_file_morphWhereInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], Upload_file_morphWhereInput.prototype, "order", void 0);
Upload_file_morphWhereInput = Upload_file_morphWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphWhereInput", {
        isAbstract: true
    })
], Upload_file_morphWhereInput);
exports.Upload_file_morphWhereInput = Upload_file_morphWhereInput;
