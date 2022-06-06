"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutTax_rateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutTax_rateInput_1 = require("../inputs/ProductsCreateOrConnectWithoutTax_rateInput");
const ProductsCreateWithoutTax_rateInput_1 = require("../inputs/ProductsCreateWithoutTax_rateInput");
const ProductsUpdateWithoutTax_rateInput_1 = require("../inputs/ProductsUpdateWithoutTax_rateInput");
const ProductsUpsertWithoutTax_rateInput_1 = require("../inputs/ProductsUpsertWithoutTax_rateInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutTax_rateInput = class ProductsUpdateOneRequiredWithoutTax_rateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput)
], ProductsUpdateOneRequiredWithoutTax_rateInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_rateInput_1.ProductsCreateOrConnectWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutTax_rateInput_1.ProductsCreateOrConnectWithoutTax_rateInput)
], ProductsUpdateOneRequiredWithoutTax_rateInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutTax_rateInput_1.ProductsUpsertWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutTax_rateInput_1.ProductsUpsertWithoutTax_rateInput)
], ProductsUpdateOneRequiredWithoutTax_rateInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutTax_rateInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_rateInput_1.ProductsUpdateWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutTax_rateInput_1.ProductsUpdateWithoutTax_rateInput)
], ProductsUpdateOneRequiredWithoutTax_rateInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutTax_rateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutTax_rateInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutTax_rateInput);
exports.ProductsUpdateOneRequiredWithoutTax_rateInput = ProductsUpdateOneRequiredWithoutTax_rateInput;
