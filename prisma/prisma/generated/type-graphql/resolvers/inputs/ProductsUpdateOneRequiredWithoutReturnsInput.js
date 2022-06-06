"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutReturnsInput_1 = require("../inputs/ProductsCreateOrConnectWithoutReturnsInput");
const ProductsCreateWithoutReturnsInput_1 = require("../inputs/ProductsCreateWithoutReturnsInput");
const ProductsUpdateWithoutReturnsInput_1 = require("../inputs/ProductsUpdateWithoutReturnsInput");
const ProductsUpsertWithoutReturnsInput_1 = require("../inputs/ProductsUpsertWithoutReturnsInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutReturnsInput = class ProductsUpdateOneRequiredWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput)
], ProductsUpdateOneRequiredWithoutReturnsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutReturnsInput_1.ProductsCreateOrConnectWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutReturnsInput_1.ProductsCreateOrConnectWithoutReturnsInput)
], ProductsUpdateOneRequiredWithoutReturnsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutReturnsInput_1.ProductsUpsertWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutReturnsInput_1.ProductsUpsertWithoutReturnsInput)
], ProductsUpdateOneRequiredWithoutReturnsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutReturnsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutReturnsInput_1.ProductsUpdateWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutReturnsInput_1.ProductsUpdateWithoutReturnsInput)
], ProductsUpdateOneRequiredWithoutReturnsInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutReturnsInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutReturnsInput);
exports.ProductsUpdateOneRequiredWithoutReturnsInput = ProductsUpdateOneRequiredWithoutReturnsInput;
