"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsUpdateManyWithoutProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateManyProducts_couponsToproductsInputEnvelope_1 = require("../inputs/CouponsCreateManyProducts_couponsToproductsInputEnvelope");
const CouponsCreateOrConnectWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateOrConnectWithoutProducts_couponsToproductsInput");
const CouponsCreateWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateWithoutProducts_couponsToproductsInput");
const CouponsScalarWhereInput_1 = require("../inputs/CouponsScalarWhereInput");
const CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput");
const CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput");
const CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput");
const CouponsWhereUniqueInput_1 = require("../inputs/CouponsWhereUniqueInput");
let CouponsUpdateManyWithoutProducts_couponsToproductsInput = class CouponsUpdateManyWithoutProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsCreateWithoutProducts_couponsToproductsInput_1.CouponsCreateWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsCreateOrConnectWithoutProducts_couponsToproductsInput_1.CouponsCreateOrConnectWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput_1.CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateManyProducts_couponsToproductsInputEnvelope_1.CouponsCreateManyProducts_couponsToproductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCreateManyProducts_couponsToproductsInputEnvelope_1.CouponsCreateManyProducts_couponsToproductsInputEnvelope)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsWhereUniqueInput_1.CouponsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsWhereUniqueInput_1.CouponsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsWhereUniqueInput_1.CouponsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsWhereUniqueInput_1.CouponsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput_1.CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput_1.CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsScalarWhereInput_1.CouponsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsUpdateManyWithoutProducts_couponsToproductsInput.prototype, "deleteMany", void 0);
CouponsUpdateManyWithoutProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsUpdateManyWithoutProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsUpdateManyWithoutProducts_couponsToproductsInput);
exports.CouponsUpdateManyWithoutProducts_couponsToproductsInput = CouponsUpdateManyWithoutProducts_couponsToproductsInput;
