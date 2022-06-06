"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateWithoutProductsInput_1 = require("../inputs/RatingCreateWithoutProductsInput");
const RatingUpdateWithoutProductsInput_1 = require("../inputs/RatingUpdateWithoutProductsInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingUpsertWithWhereUniqueWithoutProductsInput = class RatingUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], RatingUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateWithoutProductsInput_1.RatingUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateWithoutProductsInput_1.RatingUpdateWithoutProductsInput)
], RatingUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateWithoutProductsInput_1.RatingCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingCreateWithoutProductsInput_1.RatingCreateWithoutProductsInput)
], RatingUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
RatingUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], RatingUpsertWithWhereUniqueWithoutProductsInput);
exports.RatingUpsertWithWhereUniqueWithoutProductsInput = RatingUpsertWithWhereUniqueWithoutProductsInput;
