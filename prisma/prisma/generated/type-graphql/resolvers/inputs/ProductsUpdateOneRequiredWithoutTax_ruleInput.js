"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutTax_ruleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateOrConnectWithoutTax_ruleInput");
const ProductsCreateWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateWithoutTax_ruleInput");
const ProductsUpdateWithoutTax_ruleInput_1 = require("../inputs/ProductsUpdateWithoutTax_ruleInput");
const ProductsUpsertWithoutTax_ruleInput_1 = require("../inputs/ProductsUpsertWithoutTax_ruleInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutTax_ruleInput = class ProductsUpdateOneRequiredWithoutTax_ruleInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput)
], ProductsUpdateOneRequiredWithoutTax_ruleInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_ruleInput_1.ProductsCreateOrConnectWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutTax_ruleInput_1.ProductsCreateOrConnectWithoutTax_ruleInput)
], ProductsUpdateOneRequiredWithoutTax_ruleInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutTax_ruleInput_1.ProductsUpsertWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutTax_ruleInput_1.ProductsUpsertWithoutTax_ruleInput)
], ProductsUpdateOneRequiredWithoutTax_ruleInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutTax_ruleInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_ruleInput_1.ProductsUpdateWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutTax_ruleInput_1.ProductsUpdateWithoutTax_ruleInput)
], ProductsUpdateOneRequiredWithoutTax_ruleInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutTax_ruleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutTax_ruleInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutTax_ruleInput);
exports.ProductsUpdateOneRequiredWithoutTax_ruleInput = ProductsUpdateOneRequiredWithoutTax_ruleInput;
