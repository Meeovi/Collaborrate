"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsCreateOrConnectWithoutProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateWithoutProducts_couponsToproductsInput");
const CouponsWhereUniqueInput_1 = require("../inputs/CouponsWhereUniqueInput");
let CouponsCreateOrConnectWithoutProducts_couponsToproductsInput = class CouponsCreateOrConnectWithoutProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], CouponsCreateOrConnectWithoutProducts_couponsToproductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateWithoutProducts_couponsToproductsInput_1.CouponsCreateWithoutProducts_couponsToproductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsCreateWithoutProducts_couponsToproductsInput_1.CouponsCreateWithoutProducts_couponsToproductsInput)
], CouponsCreateOrConnectWithoutProducts_couponsToproductsInput.prototype, "create", void 0);
CouponsCreateOrConnectWithoutProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsCreateOrConnectWithoutProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsCreateOrConnectWithoutProducts_couponsToproductsInput);
exports.CouponsCreateOrConnectWithoutProducts_couponsToproductsInput = CouponsCreateOrConnectWithoutProducts_couponsToproductsInput;
