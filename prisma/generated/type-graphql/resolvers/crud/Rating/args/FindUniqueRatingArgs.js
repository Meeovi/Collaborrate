"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
let FindUniqueRatingArgs = class FindUniqueRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], FindUniqueRatingArgs.prototype, "where", void 0);
FindUniqueRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRatingArgs);
exports.FindUniqueRatingArgs = FindUniqueRatingArgs;
