"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsScalarWhereInput_1 = require("../inputs/CouponsScalarWhereInput");
const CouponsUpdateManyMutationInput_1 = require("../inputs/CouponsUpdateManyMutationInput");
let CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput = class CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsScalarWhereInput_1.CouponsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsScalarWhereInput_1.CouponsScalarWhereInput)
], CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateManyMutationInput_1.CouponsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateManyMutationInput_1.CouponsUpdateManyMutationInput)
], CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput.prototype, "data", void 0);
CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput);
exports.CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput = CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput;
