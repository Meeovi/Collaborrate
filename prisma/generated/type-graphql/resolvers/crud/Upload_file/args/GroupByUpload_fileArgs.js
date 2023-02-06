"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileOrderByWithAggregationInput_1 = require("../../../inputs/Upload_fileOrderByWithAggregationInput");
const Upload_fileScalarWhereWithAggregatesInput_1 = require("../../../inputs/Upload_fileScalarWhereWithAggregatesInput");
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
const Upload_fileScalarFieldEnum_1 = require("../../../../enums/Upload_fileScalarFieldEnum");
let GroupByUpload_fileArgs = class GroupByUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], GroupByUpload_fileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileOrderByWithAggregationInput_1.Upload_fileOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUpload_fileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileScalarFieldEnum_1.Upload_fileScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUpload_fileArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileScalarWhereWithAggregatesInput_1.Upload_fileScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileScalarWhereWithAggregatesInput_1.Upload_fileScalarWhereWithAggregatesInput)
], GroupByUpload_fileArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUpload_fileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUpload_fileArgs.prototype, "skip", void 0);
GroupByUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUpload_fileArgs);
exports.GroupByUpload_fileArgs = GroupByUpload_fileArgs;
