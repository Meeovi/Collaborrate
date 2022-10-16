"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateInput_1 = require("../../../inputs/RatingCreateInput");
let CreateOneRatingArgs = class CreateOneRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateInput_1.RatingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingCreateInput_1.RatingCreateInput)
], CreateOneRatingArgs.prototype, "data", void 0);
CreateOneRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRatingArgs);
exports.CreateOneRatingArgs = CreateOneRatingArgs;
