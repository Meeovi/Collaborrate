"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Tax_rateAvgAggregate_1 = require("../outputs/Tax_rateAvgAggregate");
const Tax_rateCountAggregate_1 = require("../outputs/Tax_rateCountAggregate");
const Tax_rateMaxAggregate_1 = require("../outputs/Tax_rateMaxAggregate");
const Tax_rateMinAggregate_1 = require("../outputs/Tax_rateMinAggregate");
const Tax_rateSumAggregate_1 = require("../outputs/Tax_rateSumAggregate");
let Tax_rateGroupBy = class Tax_rateGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_rateGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateGroupBy.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Tax_rateGroupBy.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateGroupBy.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateGroupBy.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateGroupBy.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_rateGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCountAggregate_1.Tax_rateCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCountAggregate_1.Tax_rateCountAggregate)
], Tax_rateGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateAvgAggregate_1.Tax_rateAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateAvgAggregate_1.Tax_rateAvgAggregate)
], Tax_rateGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateSumAggregate_1.Tax_rateSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateSumAggregate_1.Tax_rateSumAggregate)
], Tax_rateGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateMinAggregate_1.Tax_rateMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateMinAggregate_1.Tax_rateMinAggregate)
], Tax_rateGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateMaxAggregate_1.Tax_rateMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateMaxAggregate_1.Tax_rateMaxAggregate)
], Tax_rateGroupBy.prototype, "_max", void 0);
Tax_rateGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_rateGroupBy", {
        isAbstract: true
    })
], Tax_rateGroupBy);
exports.Tax_rateGroupBy = Tax_rateGroupBy;
