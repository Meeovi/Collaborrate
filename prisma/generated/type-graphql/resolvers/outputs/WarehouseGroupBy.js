"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const WarehouseAvgAggregate_1 = require("../outputs/WarehouseAvgAggregate");
const WarehouseCountAggregate_1 = require("../outputs/WarehouseCountAggregate");
const WarehouseMaxAggregate_1 = require("../outputs/WarehouseMaxAggregate");
const WarehouseMinAggregate_1 = require("../outputs/WarehouseMinAggregate");
const WarehouseSumAggregate_1 = require("../outputs/WarehouseSumAggregate");
let WarehouseGroupBy = class WarehouseGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WarehouseGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WarehouseGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseCountAggregate_1.WarehouseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseCountAggregate_1.WarehouseCountAggregate)
], WarehouseGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseAvgAggregate_1.WarehouseAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseAvgAggregate_1.WarehouseAvgAggregate)
], WarehouseGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseSumAggregate_1.WarehouseSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseSumAggregate_1.WarehouseSumAggregate)
], WarehouseGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseMinAggregate_1.WarehouseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseMinAggregate_1.WarehouseMinAggregate)
], WarehouseGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseMaxAggregate_1.WarehouseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseMaxAggregate_1.WarehouseMaxAggregate)
], WarehouseGroupBy.prototype, "_max", void 0);
WarehouseGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WarehouseGroupBy", {
        isAbstract: true
    })
], WarehouseGroupBy);
exports.WarehouseGroupBy = WarehouseGroupBy;
