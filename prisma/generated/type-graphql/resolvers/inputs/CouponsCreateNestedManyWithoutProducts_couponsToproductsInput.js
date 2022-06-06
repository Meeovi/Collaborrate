"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateManyProducts_couponsToproductsInputEnvelope_1 = require("../inputs/CouponsCreateManyProducts_couponsToproductsInputEnvelope");
const CouponsCreateOrConnectWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateOrConnectWithoutProducts_couponsToproductsInput");
const CouponsCreateWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateWithoutProducts_couponsToproductsInput");
const CouponsWhereUniqueInput_1 = require("../inputs/CouponsWhereUniqueInput");
let CouponsCreateNestedManyWithoutProducts_couponsToproductsInput = class CouponsCreateNestedManyWithoutProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsCreateWithoutProducts_couponsToproductsInput_1.CouponsCreateWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsCreateNestedManyWithoutProducts_couponsToproductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsCreateOrConnectWithoutProducts_couponsToproductsInput_1.CouponsCreateOrConnectWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsCreateNestedManyWithoutProducts_couponsToproductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateManyProducts_couponsToproductsInputEnvelope_1.CouponsCreateManyProducts_couponsToproductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCreateManyProducts_couponsToproductsInputEnvelope_1.CouponsCreateManyProducts_couponsToproductsInputEnvelope)
], CouponsCreateNestedManyWithoutProducts_couponsToproductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsWhereUniqueInput_1.CouponsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsCreateNestedManyWithoutProducts_couponsToproductsInput.prototype, "connect", void 0);
CouponsCreateNestedManyWithoutProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsCreateNestedManyWithoutProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsCreateNestedManyWithoutProducts_couponsToproductsInput);
exports.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput = CouponsCreateNestedManyWithoutProducts_couponsToproductsInput;
