"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let RatingCreateWithoutProductsInput = class RatingCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateWithoutProductsInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateWithoutProductsInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateWithoutProductsInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RatingCreateWithoutProductsInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], RatingCreateWithoutProductsInput.prototype, "sort_order", void 0);
RatingCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateWithoutProductsInput", {
        isAbstract: true
    })
], RatingCreateWithoutProductsInput);
exports.RatingCreateWithoutProductsInput = RatingCreateWithoutProductsInput;
