"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsCreateInput_1 = require("../../../inputs/ReviewsCreateInput");
let CreateReviewsArgs = class CreateReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCreateInput_1.ReviewsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsCreateInput_1.ReviewsCreateInput)
], CreateReviewsArgs.prototype, "data", void 0);
CreateReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReviewsArgs);
exports.CreateReviewsArgs = CreateReviewsArgs;
