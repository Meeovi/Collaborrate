"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingOrderByWithAggregationInput_1 = require("../../../inputs/RatingOrderByWithAggregationInput");
const RatingScalarWhereWithAggregatesInput_1 = require("../../../inputs/RatingScalarWhereWithAggregatesInput");
const RatingWhereInput_1 = require("../../../inputs/RatingWhereInput");
const RatingScalarFieldEnum_1 = require("../../../../enums/RatingScalarFieldEnum");
let GroupByRatingArgs = class GroupByRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], GroupByRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingOrderByWithAggregationInput_1.RatingOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRatingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingScalarFieldEnum_1.RatingScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRatingArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingScalarWhereWithAggregatesInput_1.RatingScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingScalarWhereWithAggregatesInput_1.RatingScalarWhereWithAggregatesInput)
], GroupByRatingArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRatingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRatingArgs.prototype, "skip", void 0);
GroupByRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRatingArgs);
exports.GroupByRatingArgs = GroupByRatingArgs;
