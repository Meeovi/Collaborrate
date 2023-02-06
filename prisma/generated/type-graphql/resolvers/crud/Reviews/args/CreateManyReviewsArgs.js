"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsCreateManyInput_1 = require("../../../inputs/ReviewsCreateManyInput");
let CreateManyReviewsArgs = class CreateManyReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsCreateManyInput_1.ReviewsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReviewsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReviewsArgs.prototype, "skipDuplicates", void 0);
CreateManyReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReviewsArgs);
exports.CreateManyReviewsArgs = CreateManyReviewsArgs;
