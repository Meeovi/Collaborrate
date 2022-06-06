"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateOrConnectWithoutCredit_memosInput");
const ProductsCreateWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateWithoutCredit_memosInput");
const ProductsUpdateWithoutCredit_memosInput_1 = require("../inputs/ProductsUpdateWithoutCredit_memosInput");
const ProductsUpsertWithoutCredit_memosInput_1 = require("../inputs/ProductsUpsertWithoutCredit_memosInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutCredit_memosInput = class ProductsUpdateOneRequiredWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput)
], ProductsUpdateOneRequiredWithoutCredit_memosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCredit_memosInput_1.ProductsCreateOrConnectWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutCredit_memosInput_1.ProductsCreateOrConnectWithoutCredit_memosInput)
], ProductsUpdateOneRequiredWithoutCredit_memosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutCredit_memosInput_1.ProductsUpsertWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutCredit_memosInput_1.ProductsUpsertWithoutCredit_memosInput)
], ProductsUpdateOneRequiredWithoutCredit_memosInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutCredit_memosInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutCredit_memosInput_1.ProductsUpdateWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutCredit_memosInput_1.ProductsUpdateWithoutCredit_memosInput)
], ProductsUpdateOneRequiredWithoutCredit_memosInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutCredit_memosInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutCredit_memosInput);
exports.ProductsUpdateOneRequiredWithoutCredit_memosInput = ProductsUpdateOneRequiredWithoutCredit_memosInput;
