"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingUpdateManyMutationInput_1 = require("../../../inputs/RatingUpdateManyMutationInput");
const RatingWhereInput_1 = require("../../../inputs/RatingWhereInput");
let UpdateManyRatingArgs = class UpdateManyRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateManyMutationInput_1.RatingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateManyMutationInput_1.RatingUpdateManyMutationInput)
], UpdateManyRatingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], UpdateManyRatingArgs.prototype, "where", void 0);
UpdateManyRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRatingArgs);
exports.UpdateManyRatingArgs = UpdateManyRatingArgs;
