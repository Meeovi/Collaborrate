"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingUpdateWithoutProductsInput_1 = require("../inputs/RatingUpdateWithoutProductsInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingUpdateWithWhereUniqueWithoutProductsInput = class RatingUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], RatingUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateWithoutProductsInput_1.RatingUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateWithoutProductsInput_1.RatingUpdateWithoutProductsInput)
], RatingUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
RatingUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], RatingUpdateWithWhereUniqueWithoutProductsInput);
exports.RatingUpdateWithWhereUniqueWithoutProductsInput = RatingUpdateWithWhereUniqueWithoutProductsInput;
