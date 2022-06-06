"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsCreateInput_1 = require("../../../inputs/ReviewsCreateInput");
const ReviewsUpdateInput_1 = require("../../../inputs/ReviewsUpdateInput");
const ReviewsWhereUniqueInput_1 = require("../../../inputs/ReviewsWhereUniqueInput");
let UpsertReviewsArgs = class UpsertReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput)
], UpsertReviewsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCreateInput_1.ReviewsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsCreateInput_1.ReviewsCreateInput)
], UpsertReviewsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsUpdateInput_1.ReviewsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsUpdateInput_1.ReviewsUpdateInput)
], UpsertReviewsArgs.prototype, "update", void 0);
UpsertReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReviewsArgs);
exports.UpsertReviewsArgs = UpsertReviewsArgs;
