"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateImportm = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmAvgAggregate_1 = require("../outputs/ImportmAvgAggregate");
const ImportmCountAggregate_1 = require("../outputs/ImportmCountAggregate");
const ImportmMaxAggregate_1 = require("../outputs/ImportmMaxAggregate");
const ImportmMinAggregate_1 = require("../outputs/ImportmMinAggregate");
const ImportmSumAggregate_1 = require("../outputs/ImportmSumAggregate");
let AggregateImportm = class AggregateImportm {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmCountAggregate_1.ImportmCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmCountAggregate_1.ImportmCountAggregate)
], AggregateImportm.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmAvgAggregate_1.ImportmAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmAvgAggregate_1.ImportmAvgAggregate)
], AggregateImportm.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmSumAggregate_1.ImportmSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmSumAggregate_1.ImportmSumAggregate)
], AggregateImportm.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmMinAggregate_1.ImportmMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmMinAggregate_1.ImportmMinAggregate)
], AggregateImportm.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmMaxAggregate_1.ImportmMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmMaxAggregate_1.ImportmMaxAggregate)
], AggregateImportm.prototype, "_max", void 0);
AggregateImportm = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateImportm", {
        isAbstract: true
    })
], AggregateImportm);
exports.AggregateImportm = AggregateImportm;
