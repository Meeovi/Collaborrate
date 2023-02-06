"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsUpdateManyMutationInput_1 = require("../../../inputs/ReviewsUpdateManyMutationInput");
const ReviewsWhereInput_1 = require("../../../inputs/ReviewsWhereInput");
let UpdateManyReviewsArgs = class UpdateManyReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsUpdateManyMutationInput_1.ReviewsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsUpdateManyMutationInput_1.ReviewsUpdateManyMutationInput)
], UpdateManyReviewsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereInput_1.ReviewsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereInput_1.ReviewsWhereInput)
], UpdateManyReviewsArgs.prototype, "where", void 0);
UpdateManyReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReviewsArgs);
exports.UpdateManyReviewsArgs = UpdateManyReviewsArgs;
