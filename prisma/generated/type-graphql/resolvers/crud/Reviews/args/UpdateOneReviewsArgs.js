"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsUpdateInput_1 = require("../../../inputs/ReviewsUpdateInput");
const ReviewsWhereUniqueInput_1 = require("../../../inputs/ReviewsWhereUniqueInput");
let UpdateOneReviewsArgs = class UpdateOneReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsUpdateInput_1.ReviewsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsUpdateInput_1.ReviewsUpdateInput)
], UpdateOneReviewsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput)
], UpdateOneReviewsArgs.prototype, "where", void 0);
UpdateOneReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReviewsArgs);
exports.UpdateOneReviewsArgs = UpdateOneReviewsArgs;
