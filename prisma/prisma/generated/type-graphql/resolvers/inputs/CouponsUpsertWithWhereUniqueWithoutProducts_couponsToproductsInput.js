"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateWithoutProducts_couponsToproductsInput");
const CouponsUpdateWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsUpdateWithoutProducts_couponsToproductsInput");
const CouponsWhereUniqueInput_1 = require("../inputs/CouponsWhereUniqueInput");
let CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput = class CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateWithoutProducts_couponsToproductsInput_1.CouponsUpdateWithoutProducts_couponsToproductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateWithoutProducts_couponsToproductsInput_1.CouponsUpdateWithoutProducts_couponsToproductsInput)
], CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateWithoutProducts_couponsToproductsInput_1.CouponsCreateWithoutProducts_couponsToproductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsCreateWithoutProducts_couponsToproductsInput_1.CouponsCreateWithoutProducts_couponsToproductsInput)
], CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput.prototype, "create", void 0);
CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput);
exports.CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput = CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput;
