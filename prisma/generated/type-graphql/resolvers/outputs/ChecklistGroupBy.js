"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ChecklistAvgAggregate_1 = require("../outputs/ChecklistAvgAggregate");
const ChecklistCountAggregate_1 = require("../outputs/ChecklistCountAggregate");
const ChecklistMaxAggregate_1 = require("../outputs/ChecklistMaxAggregate");
const ChecklistMinAggregate_1 = require("../outputs/ChecklistMinAggregate");
const ChecklistSumAggregate_1 = require("../outputs/ChecklistSumAggregate");
let ChecklistGroupBy = class ChecklistGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ChecklistGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChecklistGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "regional_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "ticket", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistCountAggregate_1.ChecklistCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistCountAggregate_1.ChecklistCountAggregate)
], ChecklistGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistAvgAggregate_1.ChecklistAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistAvgAggregate_1.ChecklistAvgAggregate)
], ChecklistGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistSumAggregate_1.ChecklistSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistSumAggregate_1.ChecklistSumAggregate)
], ChecklistGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistMinAggregate_1.ChecklistMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistMinAggregate_1.ChecklistMinAggregate)
], ChecklistGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistMaxAggregate_1.ChecklistMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistMaxAggregate_1.ChecklistMaxAggregate)
], ChecklistGroupBy.prototype, "_max", void 0);
ChecklistGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChecklistGroupBy", {
        isAbstract: true
    })
], ChecklistGroupBy);
exports.ChecklistGroupBy = ChecklistGroupBy;
