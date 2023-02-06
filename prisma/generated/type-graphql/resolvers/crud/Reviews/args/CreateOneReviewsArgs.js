"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsCreateInput_1 = require("../../../inputs/ReviewsCreateInput");
let CreateOneReviewsArgs = class CreateOneReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCreateInput_1.ReviewsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewsCreateInput_1.ReviewsCreateInput)
], CreateOneReviewsArgs.prototype, "data", void 0);
CreateOneReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReviewsArgs);
exports.CreateOneReviewsArgs = CreateOneReviewsArgs;
