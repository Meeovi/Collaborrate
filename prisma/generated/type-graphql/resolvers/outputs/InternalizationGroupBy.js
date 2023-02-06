"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const InternalizationAvgAggregate_1 = require("../outputs/InternalizationAvgAggregate");
const InternalizationCountAggregate_1 = require("../outputs/InternalizationCountAggregate");
const InternalizationMaxAggregate_1 = require("../outputs/InternalizationMaxAggregate");
const InternalizationMinAggregate_1 = require("../outputs/InternalizationMinAggregate");
const InternalizationSumAggregate_1 = require("../outputs/InternalizationSumAggregate");
let InternalizationGroupBy = class InternalizationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InternalizationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InternalizationGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationGroupBy.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationGroupBy.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationCountAggregate_1.InternalizationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationCountAggregate_1.InternalizationCountAggregate)
], InternalizationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationAvgAggregate_1.InternalizationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationAvgAggregate_1.InternalizationAvgAggregate)
], InternalizationGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationSumAggregate_1.InternalizationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationSumAggregate_1.InternalizationSumAggregate)
], InternalizationGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationMinAggregate_1.InternalizationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationMinAggregate_1.InternalizationMinAggregate)
], InternalizationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationMaxAggregate_1.InternalizationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationMaxAggregate_1.InternalizationMaxAggregate)
], InternalizationGroupBy.prototype, "_max", void 0);
InternalizationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InternalizationGroupBy", {
        isAbstract: true
    })
], InternalizationGroupBy);
exports.InternalizationGroupBy = InternalizationGroupBy;
