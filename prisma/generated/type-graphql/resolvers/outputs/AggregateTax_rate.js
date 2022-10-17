"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_rate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateAvgAggregate_1 = require("../outputs/Tax_rateAvgAggregate");
const Tax_rateCountAggregate_1 = require("../outputs/Tax_rateCountAggregate");
const Tax_rateMaxAggregate_1 = require("../outputs/Tax_rateMaxAggregate");
const Tax_rateMinAggregate_1 = require("../outputs/Tax_rateMinAggregate");
const Tax_rateSumAggregate_1 = require("../outputs/Tax_rateSumAggregate");
let AggregateTax_rate = class AggregateTax_rate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCountAggregate_1.Tax_rateCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCountAggregate_1.Tax_rateCountAggregate)
], AggregateTax_rate.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateAvgAggregate_1.Tax_rateAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateAvgAggregate_1.Tax_rateAvgAggregate)
], AggregateTax_rate.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateSumAggregate_1.Tax_rateSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateSumAggregate_1.Tax_rateSumAggregate)
], AggregateTax_rate.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateMinAggregate_1.Tax_rateMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateMinAggregate_1.Tax_rateMinAggregate)
], AggregateTax_rate.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateMaxAggregate_1.Tax_rateMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateMaxAggregate_1.Tax_rateMaxAggregate)
], AggregateTax_rate.prototype, "_max", void 0);
AggregateTax_rate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTax_rate", {
        isAbstract: true
    })
], AggregateTax_rate);
exports.AggregateTax_rate = AggregateTax_rate;
