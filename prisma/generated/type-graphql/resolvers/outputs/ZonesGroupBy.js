"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ZonesAvgAggregate_1 = require("../outputs/ZonesAvgAggregate");
const ZonesCountAggregate_1 = require("../outputs/ZonesCountAggregate");
const ZonesMaxAggregate_1 = require("../outputs/ZonesMaxAggregate");
const ZonesMinAggregate_1 = require("../outputs/ZonesMinAggregate");
const ZonesSumAggregate_1 = require("../outputs/ZonesSumAggregate");
let ZonesGroupBy = class ZonesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ZonesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ZonesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ZonesGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesGroupBy.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesCountAggregate_1.ZonesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesCountAggregate_1.ZonesCountAggregate)
], ZonesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesAvgAggregate_1.ZonesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesAvgAggregate_1.ZonesAvgAggregate)
], ZonesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesSumAggregate_1.ZonesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesSumAggregate_1.ZonesSumAggregate)
], ZonesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesMinAggregate_1.ZonesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesMinAggregate_1.ZonesMinAggregate)
], ZonesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesMaxAggregate_1.ZonesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesMaxAggregate_1.ZonesMaxAggregate)
], ZonesGroupBy.prototype, "_max", void 0);
ZonesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ZonesGroupBy", {
        isAbstract: true
    })
], ZonesGroupBy);
exports.ZonesGroupBy = ZonesGroupBy;
