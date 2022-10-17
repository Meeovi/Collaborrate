"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Tax_categoryAvgAggregate_1 = require("../outputs/Tax_categoryAvgAggregate");
const Tax_categoryCountAggregate_1 = require("../outputs/Tax_categoryCountAggregate");
const Tax_categoryMaxAggregate_1 = require("../outputs/Tax_categoryMaxAggregate");
const Tax_categoryMinAggregate_1 = require("../outputs/Tax_categoryMinAggregate");
const Tax_categorySumAggregate_1 = require("../outputs/Tax_categorySumAggregate");
let Tax_categoryGroupBy = class Tax_categoryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_categoryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Tax_categoryGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryGroupBy.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryCountAggregate_1.Tax_categoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryCountAggregate_1.Tax_categoryCountAggregate)
], Tax_categoryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryAvgAggregate_1.Tax_categoryAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryAvgAggregate_1.Tax_categoryAvgAggregate)
], Tax_categoryGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categorySumAggregate_1.Tax_categorySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categorySumAggregate_1.Tax_categorySumAggregate)
], Tax_categoryGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryMinAggregate_1.Tax_categoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryMinAggregate_1.Tax_categoryMinAggregate)
], Tax_categoryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryMaxAggregate_1.Tax_categoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryMaxAggregate_1.Tax_categoryMaxAggregate)
], Tax_categoryGroupBy.prototype, "_max", void 0);
Tax_categoryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_categoryGroupBy", {
        isAbstract: true
    })
], Tax_categoryGroupBy);
exports.Tax_categoryGroupBy = Tax_categoryGroupBy;
