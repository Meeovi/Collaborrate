"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutRatingInput_1 = require("../inputs/ProductsCreateOrConnectWithoutRatingInput");
const ProductsCreateWithoutRatingInput_1 = require("../inputs/ProductsCreateWithoutRatingInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutRatingInput = class ProductsCreateNestedOneWithoutRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput)
], ProductsCreateNestedOneWithoutRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutRatingInput_1.ProductsCreateOrConnectWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutRatingInput_1.ProductsCreateOrConnectWithoutRatingInput)
], ProductsCreateNestedOneWithoutRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutRatingInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutRatingInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutRatingInput);
exports.ProductsCreateNestedOneWithoutRatingInput = ProductsCreateNestedOneWithoutRatingInput;
