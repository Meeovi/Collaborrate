"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereInput_1 = require("../../../inputs/RatingWhereInput");
let DeleteManyRatingArgs = class DeleteManyRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], DeleteManyRatingArgs.prototype, "where", void 0);
DeleteManyRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRatingArgs);
exports.DeleteManyRatingArgs = DeleteManyRatingArgs;
