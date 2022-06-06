"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsCreateManyProducts_couponsToproductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateManyProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateManyProducts_couponsToproductsInput");
let CouponsCreateManyProducts_couponsToproductsInputEnvelope = class CouponsCreateManyProducts_couponsToproductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsCreateManyProducts_couponsToproductsInput_1.CouponsCreateManyProducts_couponsToproductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CouponsCreateManyProducts_couponsToproductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CouponsCreateManyProducts_couponsToproductsInputEnvelope.prototype, "skipDuplicates", void 0);
CouponsCreateManyProducts_couponsToproductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsCreateManyProducts_couponsToproductsInputEnvelope", {
        isAbstract: true
    })
], CouponsCreateManyProducts_couponsToproductsInputEnvelope);
exports.CouponsCreateManyProducts_couponsToproductsInputEnvelope = CouponsCreateManyProducts_couponsToproductsInputEnvelope;
