"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCases = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesAvgAggregate_1 = require("../outputs/CasesAvgAggregate");
const CasesCountAggregate_1 = require("../outputs/CasesCountAggregate");
const CasesMaxAggregate_1 = require("../outputs/CasesMaxAggregate");
const CasesMinAggregate_1 = require("../outputs/CasesMinAggregate");
const CasesSumAggregate_1 = require("../outputs/CasesSumAggregate");
let AggregateCases = class AggregateCases {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCountAggregate_1.CasesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesCountAggregate_1.CasesCountAggregate)
], AggregateCases.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesAvgAggregate_1.CasesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesAvgAggregate_1.CasesAvgAggregate)
], AggregateCases.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesSumAggregate_1.CasesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesSumAggregate_1.CasesSumAggregate)
], AggregateCases.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesMinAggregate_1.CasesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesMinAggregate_1.CasesMinAggregate)
], AggregateCases.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesMaxAggregate_1.CasesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesMaxAggregate_1.CasesMaxAggregate)
], AggregateCases.prototype, "_max", void 0);
AggregateCases = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCases", {
        isAbstract: true
    })
], AggregateCases);
exports.AggregateCases = AggregateCases;
