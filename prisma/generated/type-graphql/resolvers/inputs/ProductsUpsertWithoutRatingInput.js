"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutRatingInput_1 = require("../inputs/ProductsCreateWithoutRatingInput");
const ProductsUpdateWithoutRatingInput_1 = require("../inputs/ProductsUpdateWithoutRatingInput");
let ProductsUpsertWithoutRatingInput = class ProductsUpsertWithoutRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutRatingInput_1.ProductsUpdateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutRatingInput_1.ProductsUpdateWithoutRatingInput)
], ProductsUpsertWithoutRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput)
], ProductsUpsertWithoutRatingInput.prototype, "create", void 0);
ProductsUpsertWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutRatingInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutRatingInput);
exports.ProductsUpsertWithoutRatingInput = ProductsUpsertWithoutRatingInput;
