"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateInput_1 = require("../../../inputs/RatingCreateInput");
const RatingUpdateInput_1 = require("../../../inputs/RatingUpdateInput");
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
let UpsertOneRatingArgs = class UpsertOneRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], UpsertOneRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateInput_1.RatingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingCreateInput_1.RatingCreateInput)
], UpsertOneRatingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateInput_1.RatingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateInput_1.RatingUpdateInput)
], UpsertOneRatingArgs.prototype, "update", void 0);
UpsertOneRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneRatingArgs);
exports.UpsertOneRatingArgs = UpsertOneRatingArgs;
