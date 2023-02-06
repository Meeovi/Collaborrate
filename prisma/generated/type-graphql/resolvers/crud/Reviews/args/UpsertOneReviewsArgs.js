"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsCreateInput_1 = require("../../../inputs/ReviewsCreateInput");
const ReviewsUpdateInput_1 = require("../../../inputs/ReviewsUpdateInput");
const ReviewsWhereUniqueInput_1 = require("../../../inputs/ReviewsWhereUniqueInput");
let UpsertOneReviewsArgs = class UpsertOneReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput)
], UpsertOneReviewsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCreateInput_1.ReviewsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsCreateInput_1.ReviewsCreateInput)
], UpsertOneReviewsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsUpdateInput_1.ReviewsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsUpdateInput_1.ReviewsUpdateInput)
], UpsertOneReviewsArgs.prototype, "update", void 0);
UpsertOneReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReviewsArgs);
exports.UpsertOneReviewsArgs = UpsertOneReviewsArgs;
