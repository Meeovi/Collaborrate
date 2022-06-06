"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutQuotesInput_1 = require("../inputs/ProductsCreateOrConnectWithoutQuotesInput");
const ProductsCreateWithoutQuotesInput_1 = require("../inputs/ProductsCreateWithoutQuotesInput");
const ProductsUpdateWithoutQuotesInput_1 = require("../inputs/ProductsUpdateWithoutQuotesInput");
const ProductsUpsertWithoutQuotesInput_1 = require("../inputs/ProductsUpsertWithoutQuotesInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutQuotesInput = class ProductsUpdateOneRequiredWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput)
], ProductsUpdateOneRequiredWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutQuotesInput_1.ProductsCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutQuotesInput_1.ProductsCreateOrConnectWithoutQuotesInput)
], ProductsUpdateOneRequiredWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutQuotesInput_1.ProductsUpsertWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutQuotesInput_1.ProductsUpsertWithoutQuotesInput)
], ProductsUpdateOneRequiredWithoutQuotesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutQuotesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutQuotesInput_1.ProductsUpdateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutQuotesInput_1.ProductsUpdateWithoutQuotesInput)
], ProductsUpdateOneRequiredWithoutQuotesInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutQuotesInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutQuotesInput);
exports.ProductsUpdateOneRequiredWithoutQuotesInput = ProductsUpdateOneRequiredWithoutQuotesInput;
