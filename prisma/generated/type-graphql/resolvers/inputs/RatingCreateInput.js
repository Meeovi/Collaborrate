"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const ProductsCreateNestedOneWithoutRatingInput_1 = require("../inputs/ProductsCreateNestedOneWithoutRatingInput");
let RatingCreateInput = class RatingCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RatingCreateInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], RatingCreateInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutRatingInput_1.ProductsCreateNestedOneWithoutRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutRatingInput_1.ProductsCreateNestedOneWithoutRatingInput)
], RatingCreateInput.prototype, "products", void 0);
RatingCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateInput", {
        isAbstract: true
    })
], RatingCreateInput);
exports.RatingCreateInput = RatingCreateInput;
