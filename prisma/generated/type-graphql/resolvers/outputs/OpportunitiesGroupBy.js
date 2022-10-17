"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const OpportunitiesAvgAggregate_1 = require("../outputs/OpportunitiesAvgAggregate");
const OpportunitiesCountAggregate_1 = require("../outputs/OpportunitiesCountAggregate");
const OpportunitiesMaxAggregate_1 = require("../outputs/OpportunitiesMaxAggregate");
const OpportunitiesMinAggregate_1 = require("../outputs/OpportunitiesMinAggregate");
const OpportunitiesSumAggregate_1 = require("../outputs/OpportunitiesSumAggregate");
let OpportunitiesGroupBy = class OpportunitiesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OpportunitiesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OpportunitiesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "sales_stage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "probability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "next_step", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "lead_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "campaign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesGroupBy.prototype, "expected_close_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesCountAggregate_1.OpportunitiesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesCountAggregate_1.OpportunitiesCountAggregate)
], OpportunitiesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesAvgAggregate_1.OpportunitiesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesAvgAggregate_1.OpportunitiesAvgAggregate)
], OpportunitiesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesSumAggregate_1.OpportunitiesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesSumAggregate_1.OpportunitiesSumAggregate)
], OpportunitiesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesMinAggregate_1.OpportunitiesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesMinAggregate_1.OpportunitiesMinAggregate)
], OpportunitiesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesMaxAggregate_1.OpportunitiesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesMaxAggregate_1.OpportunitiesMaxAggregate)
], OpportunitiesGroupBy.prototype, "_max", void 0);
OpportunitiesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OpportunitiesGroupBy", {
        isAbstract: true
    })
], OpportunitiesGroupBy);
exports.OpportunitiesGroupBy = OpportunitiesGroupBy;
