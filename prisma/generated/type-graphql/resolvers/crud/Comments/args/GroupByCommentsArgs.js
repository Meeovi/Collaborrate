"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsOrderByWithAggregationInput_1 = require("../../../inputs/CommentsOrderByWithAggregationInput");
const CommentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/CommentsScalarWhereWithAggregatesInput");
const CommentsWhereInput_1 = require("../../../inputs/CommentsWhereInput");
const CommentsScalarFieldEnum_1 = require("../../../../enums/CommentsScalarFieldEnum");
let GroupByCommentsArgs = class GroupByCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], GroupByCommentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsOrderByWithAggregationInput_1.CommentsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCommentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsScalarFieldEnum_1.CommentsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCommentsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsScalarWhereWithAggregatesInput_1.CommentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsScalarWhereWithAggregatesInput_1.CommentsScalarWhereWithAggregatesInput)
], GroupByCommentsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCommentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCommentsArgs.prototype, "skip", void 0);
GroupByCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCommentsArgs);
exports.GroupByCommentsArgs = GroupByCommentsArgs;
