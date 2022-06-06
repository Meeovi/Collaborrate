"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ProductsCreateOrConnectWithoutOrdersInput");
const ProductsCreateWithoutOrdersInput_1 = require("../inputs/ProductsCreateWithoutOrdersInput");
const ProductsUpdateWithoutOrdersInput_1 = require("../inputs/ProductsUpdateWithoutOrdersInput");
const ProductsUpsertWithoutOrdersInput_1 = require("../inputs/ProductsUpsertWithoutOrdersInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutOrdersInput = class ProductsUpdateOneRequiredWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput)
], ProductsUpdateOneRequiredWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOrdersInput_1.ProductsCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutOrdersInput_1.ProductsCreateOrConnectWithoutOrdersInput)
], ProductsUpdateOneRequiredWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutOrdersInput_1.ProductsUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutOrdersInput_1.ProductsUpsertWithoutOrdersInput)
], ProductsUpdateOneRequiredWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutOrdersInput_1.ProductsUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutOrdersInput_1.ProductsUpdateWithoutOrdersInput)
], ProductsUpdateOneRequiredWithoutOrdersInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutOrdersInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutOrdersInput);
exports.ProductsUpdateOneRequiredWithoutOrdersInput = ProductsUpdateOneRequiredWithoutOrdersInput;
