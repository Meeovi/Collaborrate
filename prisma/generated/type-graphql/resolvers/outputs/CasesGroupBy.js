"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CasesAvgAggregate_1 = require("../outputs/CasesAvgAggregate");
const CasesCountAggregate_1 = require("../outputs/CasesCountAggregate");
const CasesMaxAggregate_1 = require("../outputs/CasesMaxAggregate");
const CasesMinAggregate_1 = require("../outputs/CasesMinAggregate");
const CasesSumAggregate_1 = require("../outputs/CasesSumAggregate");
let CasesGroupBy = class CasesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CasesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CasesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CasesGroupBy.prototype, "case_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CasesGroupBy.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCountAggregate_1.CasesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesCountAggregate_1.CasesCountAggregate)
], CasesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesAvgAggregate_1.CasesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesAvgAggregate_1.CasesAvgAggregate)
], CasesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesSumAggregate_1.CasesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesSumAggregate_1.CasesSumAggregate)
], CasesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesMinAggregate_1.CasesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesMinAggregate_1.CasesMinAggregate)
], CasesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesMaxAggregate_1.CasesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesMaxAggregate_1.CasesMaxAggregate)
], CasesGroupBy.prototype, "_max", void 0);
CasesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CasesGroupBy", {
        isAbstract: true
    })
], CasesGroupBy);
exports.CasesGroupBy = CasesGroupBy;
