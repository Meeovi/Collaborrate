"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsOrderByWithRelationInput_1 = require("../../../inputs/ReviewsOrderByWithRelationInput");
const ReviewsWhereInput_1 = require("../../../inputs/ReviewsWhereInput");
const ReviewsWhereUniqueInput_1 = require("../../../inputs/ReviewsWhereUniqueInput");
const ReviewsScalarFieldEnum_1 = require("../../../../enums/ReviewsScalarFieldEnum");
let FindFirstReviewsArgs = class FindFirstReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereInput_1.ReviewsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereInput_1.ReviewsWhereInput)
], FindFirstReviewsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsOrderByWithRelationInput_1.ReviewsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReviewsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput)
], FindFirstReviewsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReviewsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReviewsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsScalarFieldEnum_1.ReviewsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReviewsArgs.prototype, "distinct", void 0);
FindFirstReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstReviewsArgs);
exports.FindFirstReviewsArgs = FindFirstReviewsArgs;
