"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsWhereInput_1 = require("../../../inputs/ReviewsWhereInput");
let DeleteManyReviewsArgs = class DeleteManyReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereInput_1.ReviewsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereInput_1.ReviewsWhereInput)
], DeleteManyReviewsArgs.prototype, "where", void 0);
DeleteManyReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReviewsArgs);
exports.DeleteManyReviewsArgs = DeleteManyReviewsArgs;
