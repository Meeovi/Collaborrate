"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaxes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesAvgAggregate_1 = require("../outputs/TaxesAvgAggregate");
const TaxesCountAggregate_1 = require("../outputs/TaxesCountAggregate");
const TaxesMaxAggregate_1 = require("../outputs/TaxesMaxAggregate");
const TaxesMinAggregate_1 = require("../outputs/TaxesMinAggregate");
const TaxesSumAggregate_1 = require("../outputs/TaxesSumAggregate");
let AggregateTaxes = class AggregateTaxes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesCountAggregate_1.TaxesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesCountAggregate_1.TaxesCountAggregate)
], AggregateTaxes.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesAvgAggregate_1.TaxesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesAvgAggregate_1.TaxesAvgAggregate)
], AggregateTaxes.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesSumAggregate_1.TaxesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesSumAggregate_1.TaxesSumAggregate)
], AggregateTaxes.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesMinAggregate_1.TaxesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesMinAggregate_1.TaxesMinAggregate)
], AggregateTaxes.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesMaxAggregate_1.TaxesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesMaxAggregate_1.TaxesMaxAggregate)
], AggregateTaxes.prototype, "_max", void 0);
AggregateTaxes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTaxes", {
        isAbstract: true
    })
], AggregateTaxes);
exports.AggregateTaxes = AggregateTaxes;
