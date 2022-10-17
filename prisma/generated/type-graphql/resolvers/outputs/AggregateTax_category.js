"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_category = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryAvgAggregate_1 = require("../outputs/Tax_categoryAvgAggregate");
const Tax_categoryCountAggregate_1 = require("../outputs/Tax_categoryCountAggregate");
const Tax_categoryMaxAggregate_1 = require("../outputs/Tax_categoryMaxAggregate");
const Tax_categoryMinAggregate_1 = require("../outputs/Tax_categoryMinAggregate");
const Tax_categorySumAggregate_1 = require("../outputs/Tax_categorySumAggregate");
let AggregateTax_category = class AggregateTax_category {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryCountAggregate_1.Tax_categoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryCountAggregate_1.Tax_categoryCountAggregate)
], AggregateTax_category.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryAvgAggregate_1.Tax_categoryAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryAvgAggregate_1.Tax_categoryAvgAggregate)
], AggregateTax_category.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categorySumAggregate_1.Tax_categorySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categorySumAggregate_1.Tax_categorySumAggregate)
], AggregateTax_category.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryMinAggregate_1.Tax_categoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryMinAggregate_1.Tax_categoryMinAggregate)
], AggregateTax_category.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryMaxAggregate_1.Tax_categoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryMaxAggregate_1.Tax_categoryMaxAggregate)
], AggregateTax_category.prototype, "_max", void 0);
AggregateTax_category = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTax_category", {
        isAbstract: true
    })
], AggregateTax_category);
exports.AggregateTax_category = AggregateTax_category;
