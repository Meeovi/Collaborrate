"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutRatingInput_1 = require("../inputs/ProductsCreateWithoutRatingInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutRatingInput = class ProductsCreateOrConnectWithoutRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutRatingInput_1.ProductsCreateWithoutRatingInput)
], ProductsCreateOrConnectWithoutRatingInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutRatingInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutRatingInput);
exports.ProductsCreateOrConnectWithoutRatingInput = ProductsCreateOrConnectWithoutRatingInput;
