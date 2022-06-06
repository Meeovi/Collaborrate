"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutProduct_attributeInput_1 = require("../inputs/ProductsCreateOrConnectWithoutProduct_attributeInput");
const ProductsCreateWithoutProduct_attributeInput_1 = require("../inputs/ProductsCreateWithoutProduct_attributeInput");
const ProductsUpdateWithoutProduct_attributeInput_1 = require("../inputs/ProductsUpdateWithoutProduct_attributeInput");
const ProductsUpsertWithoutProduct_attributeInput_1 = require("../inputs/ProductsUpsertWithoutProduct_attributeInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutProduct_attributeInput = class ProductsUpdateOneRequiredWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput)
], ProductsUpdateOneRequiredWithoutProduct_attributeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutProduct_attributeInput_1.ProductsCreateOrConnectWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutProduct_attributeInput_1.ProductsCreateOrConnectWithoutProduct_attributeInput)
], ProductsUpdateOneRequiredWithoutProduct_attributeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutProduct_attributeInput_1.ProductsUpsertWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutProduct_attributeInput_1.ProductsUpsertWithoutProduct_attributeInput)
], ProductsUpdateOneRequiredWithoutProduct_attributeInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutProduct_attributeInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutProduct_attributeInput_1.ProductsUpdateWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutProduct_attributeInput_1.ProductsUpdateWithoutProduct_attributeInput)
], ProductsUpdateOneRequiredWithoutProduct_attributeInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutProduct_attributeInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutProduct_attributeInput);
exports.ProductsUpdateOneRequiredWithoutProduct_attributeInput = ProductsUpdateOneRequiredWithoutProduct_attributeInput;
