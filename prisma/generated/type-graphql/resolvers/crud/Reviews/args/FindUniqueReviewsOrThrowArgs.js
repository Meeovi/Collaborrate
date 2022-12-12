"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReviewsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsWhereUniqueInput_1 = require("../../../inputs/ReviewsWhereUniqueInput");
let FindUniqueReviewsOrThrowArgs = class FindUniqueReviewsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput)
], FindUniqueReviewsOrThrowArgs.prototype, "where", void 0);
FindUniqueReviewsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReviewsOrThrowArgs);
exports.FindUniqueReviewsOrThrowArgs = FindUniqueReviewsOrThrowArgs;
