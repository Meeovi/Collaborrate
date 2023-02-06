"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesAvgAggregate_1 = require("../outputs/TaxesAvgAggregate");
const TaxesCountAggregate_1 = require("../outputs/TaxesCountAggregate");
const TaxesMaxAggregate_1 = require("../outputs/TaxesMaxAggregate");
const TaxesMinAggregate_1 = require("../outputs/TaxesMinAggregate");
const TaxesSumAggregate_1 = require("../outputs/TaxesSumAggregate");
let TaxesGroupBy = class TaxesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaxesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "taxDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "taxRuleName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesGroupBy.prototype, "taxCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesCountAggregate_1.TaxesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesCountAggregate_1.TaxesCountAggregate)
], TaxesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesAvgAggregate_1.TaxesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesAvgAggregate_1.TaxesAvgAggregate)
], TaxesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesSumAggregate_1.TaxesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesSumAggregate_1.TaxesSumAggregate)
], TaxesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesMinAggregate_1.TaxesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesMinAggregate_1.TaxesMinAggregate)
], TaxesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesMaxAggregate_1.TaxesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesMaxAggregate_1.TaxesMaxAggregate)
], TaxesGroupBy.prototype, "_max", void 0);
TaxesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaxesGroupBy", {
        isAbstract: true
    })
], TaxesGroupBy);
exports.TaxesGroupBy = TaxesGroupBy;
