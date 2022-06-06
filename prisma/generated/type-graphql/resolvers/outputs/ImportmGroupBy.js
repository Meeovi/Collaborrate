"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ImportmAvgAggregate_1 = require("../outputs/ImportmAvgAggregate");
const ImportmCountAggregate_1 = require("../outputs/ImportmCountAggregate");
const ImportmMaxAggregate_1 = require("../outputs/ImportmMaxAggregate");
const ImportmMinAggregate_1 = require("../outputs/ImportmMinAggregate");
const ImportmSumAggregate_1 = require("../outputs/ImportmSumAggregate");
let ImportmGroupBy = class ImportmGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ImportmGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ImportmGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmGroupBy.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmCountAggregate_1.ImportmCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmCountAggregate_1.ImportmCountAggregate)
], ImportmGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmAvgAggregate_1.ImportmAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmAvgAggregate_1.ImportmAvgAggregate)
], ImportmGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmSumAggregate_1.ImportmSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmSumAggregate_1.ImportmSumAggregate)
], ImportmGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmMinAggregate_1.ImportmMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmMinAggregate_1.ImportmMinAggregate)
], ImportmGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmMaxAggregate_1.ImportmMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmMaxAggregate_1.ImportmMaxAggregate)
], ImportmGroupBy.prototype, "_max", void 0);
ImportmGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ImportmGroupBy", {
        isAbstract: true
    })
], ImportmGroupBy);
exports.ImportmGroupBy = ImportmGroupBy;
