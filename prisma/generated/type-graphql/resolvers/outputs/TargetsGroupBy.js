"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const TargetsAvgAggregate_1 = require("../outputs/TargetsAvgAggregate");
const TargetsCountAggregate_1 = require("../outputs/TargetsCountAggregate");
const TargetsMaxAggregate_1 = require("../outputs/TargetsMaxAggregate");
const TargetsMinAggregate_1 = require("../outputs/TargetsMinAggregate");
const TargetsSumAggregate_1 = require("../outputs/TargetsSumAggregate");
let TargetsGroupBy = class TargetsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TargetsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TargetsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "Prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "mobile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "job_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "alt_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "alt_postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "alt_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "alt_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "alt_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "office_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "email_opt_out", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsGroupBy.prototype, "donotcall", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsCountAggregate_1.TargetsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsCountAggregate_1.TargetsCountAggregate)
], TargetsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsAvgAggregate_1.TargetsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsAvgAggregate_1.TargetsAvgAggregate)
], TargetsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsSumAggregate_1.TargetsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsSumAggregate_1.TargetsSumAggregate)
], TargetsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsMinAggregate_1.TargetsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsMinAggregate_1.TargetsMinAggregate)
], TargetsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsMaxAggregate_1.TargetsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsMaxAggregate_1.TargetsMaxAggregate)
], TargetsGroupBy.prototype, "_max", void 0);
TargetsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TargetsGroupBy", {
        isAbstract: true
    })
], TargetsGroupBy);
exports.TargetsGroupBy = TargetsGroupBy;
