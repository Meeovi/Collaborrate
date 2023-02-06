"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ManufacturerAvgAggregate_1 = require("../outputs/ManufacturerAvgAggregate");
const ManufacturerCountAggregate_1 = require("../outputs/ManufacturerCountAggregate");
const ManufacturerMaxAggregate_1 = require("../outputs/ManufacturerMaxAggregate");
const ManufacturerMinAggregate_1 = require("../outputs/ManufacturerMinAggregate");
const ManufacturerSumAggregate_1 = require("../outputs/ManufacturerSumAggregate");
let ManufacturerGroupBy = class ManufacturerGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ManufacturerGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ManufacturerGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ManufacturerGroupBy.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerCountAggregate_1.ManufacturerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerCountAggregate_1.ManufacturerCountAggregate)
], ManufacturerGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerAvgAggregate_1.ManufacturerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerAvgAggregate_1.ManufacturerAvgAggregate)
], ManufacturerGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerSumAggregate_1.ManufacturerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerSumAggregate_1.ManufacturerSumAggregate)
], ManufacturerGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerMinAggregate_1.ManufacturerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerMinAggregate_1.ManufacturerMinAggregate)
], ManufacturerGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerMaxAggregate_1.ManufacturerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerMaxAggregate_1.ManufacturerMaxAggregate)
], ManufacturerGroupBy.prototype, "_max", void 0);
ManufacturerGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ManufacturerGroupBy", {
        isAbstract: true
    })
], ManufacturerGroupBy);
exports.ManufacturerGroupBy = ManufacturerGroupBy;
