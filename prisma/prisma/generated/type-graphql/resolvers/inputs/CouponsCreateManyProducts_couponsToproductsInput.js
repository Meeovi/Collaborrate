"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsCreateManyProducts_couponsToproductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let CouponsCreateManyProducts_couponsToproductsInput = class CouponsCreateManyProducts_couponsToproductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsCreateManyProducts_couponsToproductsInput.prototype, "users", void 0);
CouponsCreateManyProducts_couponsToproductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsCreateManyProducts_couponsToproductsInput", {
        isAbstract: true
    })
], CouponsCreateManyProducts_couponsToproductsInput);
exports.CouponsCreateManyProducts_couponsToproductsInput = CouponsCreateManyProducts_couponsToproductsInput;
