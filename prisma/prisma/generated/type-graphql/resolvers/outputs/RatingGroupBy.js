"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const RatingAvgAggregate_1 = require("../outputs/RatingAvgAggregate");
const RatingCountAggregate_1 = require("../outputs/RatingCountAggregate");
const RatingMaxAggregate_1 = require("../outputs/RatingMaxAggregate");
const RatingMinAggregate_1 = require("../outputs/RatingMinAggregate");
const RatingSumAggregate_1 = require("../outputs/RatingSumAggregate");
let RatingGroupBy = class RatingGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingGroupBy.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingGroupBy.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingGroupBy.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RatingGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], RatingGroupBy.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], RatingGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCountAggregate_1.RatingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCountAggregate_1.RatingCountAggregate)
], RatingGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingAvgAggregate_1.RatingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingAvgAggregate_1.RatingAvgAggregate)
], RatingGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingSumAggregate_1.RatingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingSumAggregate_1.RatingSumAggregate)
], RatingGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMinAggregate_1.RatingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMinAggregate_1.RatingMinAggregate)
], RatingGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMaxAggregate_1.RatingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMaxAggregate_1.RatingMaxAggregate)
], RatingGroupBy.prototype, "_max", void 0);
RatingGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RatingGroupBy", {
        isAbstract: true
    })
], RatingGroupBy);
exports.RatingGroupBy = RatingGroupBy;
