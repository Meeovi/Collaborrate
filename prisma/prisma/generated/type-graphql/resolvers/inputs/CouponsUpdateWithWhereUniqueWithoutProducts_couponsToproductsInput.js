"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsUpdateWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsUpdateWithoutProducts_couponsToproductsInput");
const CouponsWhereUniqueInput_1 = require("../inputs/CouponsWhereUniqueInput");
let CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput = class CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateWithoutProducts_couponsToproductsInput_1.CouponsUpdateWithoutProducts_couponsToproductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateWithoutProducts_couponsToproductsInput_1.CouponsUpdateWithoutProducts_couponsToproductsInput)
], CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput.prototype, "data", void 0);
CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput);
exports.CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput = CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput;
