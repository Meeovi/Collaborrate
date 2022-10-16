"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ContractsAvgAggregate_1 = require("../outputs/ContractsAvgAggregate");
const ContractsCountAggregate_1 = require("../outputs/ContractsCountAggregate");
const ContractsMaxAggregate_1 = require("../outputs/ContractsMaxAggregate");
const ContractsMinAggregate_1 = require("../outputs/ContractsMinAggregate");
const ContractsSumAggregate_1 = require("../outputs/ContractsSumAggregate");
let ContractsGroupBy = class ContractsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ContractsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "contract_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "contract_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "renewal_reminder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "customer_signed_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "company_signed_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "contract_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "opportunity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "contract_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "line_items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "shipping_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsGroupBy.prototype, "grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ContractsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsCountAggregate_1.ContractsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsCountAggregate_1.ContractsCountAggregate)
], ContractsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsAvgAggregate_1.ContractsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsAvgAggregate_1.ContractsAvgAggregate)
], ContractsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsSumAggregate_1.ContractsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsSumAggregate_1.ContractsSumAggregate)
], ContractsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsMinAggregate_1.ContractsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsMinAggregate_1.ContractsMinAggregate)
], ContractsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsMaxAggregate_1.ContractsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsMaxAggregate_1.ContractsMaxAggregate)
], ContractsGroupBy.prototype, "_max", void 0);
ContractsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ContractsGroupBy", {
        isAbstract: true
    })
], ContractsGroupBy);
exports.ContractsGroupBy = ContractsGroupBy;
