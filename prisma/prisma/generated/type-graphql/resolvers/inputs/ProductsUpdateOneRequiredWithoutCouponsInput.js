"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutCouponsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutCouponsInput_1 = require("../inputs/ProductsCreateOrConnectWithoutCouponsInput");
const ProductsCreateWithoutCouponsInput_1 = require("../inputs/ProductsCreateWithoutCouponsInput");
const ProductsUpdateWithoutCouponsInput_1 = require("../inputs/ProductsUpdateWithoutCouponsInput");
const ProductsUpsertWithoutCouponsInput_1 = require("../inputs/ProductsUpsertWithoutCouponsInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutCouponsInput = class ProductsUpdateOneRequiredWithoutCouponsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput)
], ProductsUpdateOneRequiredWithoutCouponsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCouponsInput_1.ProductsCreateOrConnectWithoutCouponsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutCouponsInput_1.ProductsCreateOrConnectWithoutCouponsInput)
], ProductsUpdateOneRequiredWithoutCouponsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutCouponsInput_1.ProductsUpsertWithoutCouponsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutCouponsInput_1.ProductsUpsertWithoutCouponsInput)
], ProductsUpdateOneRequiredWithoutCouponsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutCouponsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutCouponsInput_1.ProductsUpdateWithoutCouponsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutCouponsInput_1.ProductsUpdateWithoutCouponsInput)
], ProductsUpdateOneRequiredWithoutCouponsInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutCouponsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutCouponsInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutCouponsInput);
exports.ProductsUpdateOneRequiredWithoutCouponsInput = ProductsUpdateOneRequiredWithoutCouponsInput;
