"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const BrandsAvgAggregate_1 = require("../outputs/BrandsAvgAggregate");
const BrandsCountAggregate_1 = require("../outputs/BrandsCountAggregate");
const BrandsMaxAggregate_1 = require("../outputs/BrandsMaxAggregate");
const BrandsMinAggregate_1 = require("../outputs/BrandsMinAggregate");
const BrandsSumAggregate_1 = require("../outputs/BrandsSumAggregate");
let BrandsGroupBy = class BrandsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BrandsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BrandsGroupBy.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsGroupBy.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsCountAggregate_1.BrandsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsCountAggregate_1.BrandsCountAggregate)
], BrandsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsAvgAggregate_1.BrandsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsAvgAggregate_1.BrandsAvgAggregate)
], BrandsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsSumAggregate_1.BrandsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsSumAggregate_1.BrandsSumAggregate)
], BrandsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsMinAggregate_1.BrandsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsMinAggregate_1.BrandsMinAggregate)
], BrandsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsMaxAggregate_1.BrandsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsMaxAggregate_1.BrandsMaxAggregate)
], BrandsGroupBy.prototype, "_max", void 0);
BrandsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BrandsGroupBy", {
        isAbstract: true
    })
], BrandsGroupBy);
exports.BrandsGroupBy = BrandsGroupBy;
