"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
let DeleteRatingArgs = class DeleteRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], DeleteRatingArgs.prototype, "where", void 0);
DeleteRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteRatingArgs);
exports.DeleteRatingArgs = DeleteRatingArgs;
