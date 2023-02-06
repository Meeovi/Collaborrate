"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const IntegrationsAvgAggregate_1 = require("../outputs/IntegrationsAvgAggregate");
const IntegrationsCountAggregate_1 = require("../outputs/IntegrationsCountAggregate");
const IntegrationsMaxAggregate_1 = require("../outputs/IntegrationsMaxAggregate");
const IntegrationsMinAggregate_1 = require("../outputs/IntegrationsMinAggregate");
const IntegrationsSumAggregate_1 = require("../outputs/IntegrationsSumAggregate");
let IntegrationsGroupBy = class IntegrationsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], IntegrationsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IntegrationsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsGroupBy.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsCountAggregate_1.IntegrationsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsCountAggregate_1.IntegrationsCountAggregate)
], IntegrationsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsAvgAggregate_1.IntegrationsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsAvgAggregate_1.IntegrationsAvgAggregate)
], IntegrationsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsSumAggregate_1.IntegrationsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsSumAggregate_1.IntegrationsSumAggregate)
], IntegrationsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsMinAggregate_1.IntegrationsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsMinAggregate_1.IntegrationsMinAggregate)
], IntegrationsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsMaxAggregate_1.IntegrationsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsMaxAggregate_1.IntegrationsMaxAggregate)
], IntegrationsGroupBy.prototype, "_max", void 0);
IntegrationsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IntegrationsGroupBy", {
        isAbstract: true
    })
], IntegrationsGroupBy);
exports.IntegrationsGroupBy = IntegrationsGroupBy;
