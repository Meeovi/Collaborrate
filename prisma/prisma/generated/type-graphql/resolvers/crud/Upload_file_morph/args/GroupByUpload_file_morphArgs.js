"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphOrderByWithAggregationInput_1 = require("../../../inputs/Upload_file_morphOrderByWithAggregationInput");
const Upload_file_morphScalarWhereWithAggregatesInput_1 = require("../../../inputs/Upload_file_morphScalarWhereWithAggregatesInput");
const Upload_file_morphWhereInput_1 = require("../../../inputs/Upload_file_morphWhereInput");
const Upload_file_morphScalarFieldEnum_1 = require("../../../../enums/Upload_file_morphScalarFieldEnum");
let GroupByUpload_file_morphArgs = class GroupByUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereInput_1.Upload_file_morphWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereInput_1.Upload_file_morphWhereInput)
], GroupByUpload_file_morphArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphOrderByWithAggregationInput_1.Upload_file_morphOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUpload_file_morphArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarFieldEnum_1.Upload_file_morphScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUpload_file_morphArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphScalarWhereWithAggregatesInput_1.Upload_file_morphScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphScalarWhereWithAggregatesInput_1.Upload_file_morphScalarWhereWithAggregatesInput)
], GroupByUpload_file_morphArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUpload_file_morphArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUpload_file_morphArgs.prototype, "skip", void 0);
GroupByUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUpload_file_morphArgs);
exports.GroupByUpload_file_morphArgs = GroupByUpload_file_morphArgs;
