"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerOrderByWithAggregationInput_1 = require("../../../inputs/MediamanagerOrderByWithAggregationInput");
const MediamanagerScalarWhereWithAggregatesInput_1 = require("../../../inputs/MediamanagerScalarWhereWithAggregatesInput");
const MediamanagerWhereInput_1 = require("../../../inputs/MediamanagerWhereInput");
const MediamanagerScalarFieldEnum_1 = require("../../../../enums/MediamanagerScalarFieldEnum");
let GroupByMediamanagerArgs = class GroupByMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereInput_1.MediamanagerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereInput_1.MediamanagerWhereInput)
], GroupByMediamanagerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerOrderByWithAggregationInput_1.MediamanagerOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMediamanagerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerScalarFieldEnum_1.MediamanagerScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMediamanagerArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerScalarWhereWithAggregatesInput_1.MediamanagerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerScalarWhereWithAggregatesInput_1.MediamanagerScalarWhereWithAggregatesInput)
], GroupByMediamanagerArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMediamanagerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMediamanagerArgs.prototype, "skip", void 0);
GroupByMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMediamanagerArgs);
exports.GroupByMediamanagerArgs = GroupByMediamanagerArgs;
