"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ReturnsAvgAggregate_1 = require("../outputs/ReturnsAvgAggregate");
const ReturnsCountAggregate_1 = require("../outputs/ReturnsCountAggregate");
const ReturnsMaxAggregate_1 = require("../outputs/ReturnsMaxAggregate");
const ReturnsMinAggregate_1 = require("../outputs/ReturnsMinAggregate");
const ReturnsSumAggregate_1 = require("../outputs/ReturnsSumAggregate");
let ReturnsGroupBy = class ReturnsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReturnsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsGroupBy.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsGroupBy.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReturnsGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCountAggregate_1.ReturnsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCountAggregate_1.ReturnsCountAggregate)
], ReturnsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsAvgAggregate_1.ReturnsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsAvgAggregate_1.ReturnsAvgAggregate)
], ReturnsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsSumAggregate_1.ReturnsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsSumAggregate_1.ReturnsSumAggregate)
], ReturnsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsMinAggregate_1.ReturnsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsMinAggregate_1.ReturnsMinAggregate)
], ReturnsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsMaxAggregate_1.ReturnsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsMaxAggregate_1.ReturnsMaxAggregate)
], ReturnsGroupBy.prototype, "_max", void 0);
ReturnsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReturnsGroupBy", {
        isAbstract: true
    })
], ReturnsGroupBy);
exports.ReturnsGroupBy = ReturnsGroupBy;
