"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateOneRequiredWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutRatingInput_1 = require("../inputs/ProductsCreateOrConnectWithoutRatingInput");
const ProductsCreateWithoutRatingInput_1 = require("../inputs/ProductsCreateWithoutRatingInput");
const ProductsUpdateWithoutRatingInput_1 = require("../inputs/ProductsUpdateWithoutRatingInput");
const ProductsUpsertWithoutRatingInput_1 = require("../inputs/ProductsUpsertWithoutRatingInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsUpdateOneRequiredWithoutRatingInput = class ProductsUpdateOneRequiredWithoutRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput)
], ProductsUpdateOneRequiredWithoutRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutRatingInput_1.ProductsCreateOrConnectWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutRatingInput_1.ProductsCreateOrConnectWithoutRatingInput)
], ProductsUpdateOneRequiredWithoutRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpsertWithoutRatingInput_1.ProductsUpsertWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpsertWithoutRatingInput_1.ProductsUpsertWithoutRatingInput)
], ProductsUpdateOneRequiredWithoutRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsUpdateOneRequiredWithoutRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutRatingInput_1.ProductsUpdateWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutRatingInput_1.ProductsUpdateWithoutRatingInput)
], ProductsUpdateOneRequiredWithoutRatingInput.prototype, "update", void 0);
ProductsUpdateOneRequiredWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutRatingInput", {
        isAbstract: true
    })
], ProductsUpdateOneRequiredWithoutRatingInput);
exports.ProductsUpdateOneRequiredWithoutRatingInput = ProductsUpdateOneRequiredWithoutRatingInput;
