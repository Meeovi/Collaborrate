"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContracts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsAvgAggregate_1 = require("../outputs/ContractsAvgAggregate");
const ContractsCountAggregate_1 = require("../outputs/ContractsCountAggregate");
const ContractsMaxAggregate_1 = require("../outputs/ContractsMaxAggregate");
const ContractsMinAggregate_1 = require("../outputs/ContractsMinAggregate");
const ContractsSumAggregate_1 = require("../outputs/ContractsSumAggregate");
let AggregateContracts = class AggregateContracts {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsCountAggregate_1.ContractsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsCountAggregate_1.ContractsCountAggregate)
], AggregateContracts.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsAvgAggregate_1.ContractsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsAvgAggregate_1.ContractsAvgAggregate)
], AggregateContracts.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsSumAggregate_1.ContractsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsSumAggregate_1.ContractsSumAggregate)
], AggregateContracts.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsMinAggregate_1.ContractsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsMinAggregate_1.ContractsMinAggregate)
], AggregateContracts.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsMaxAggregate_1.ContractsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsMaxAggregate_1.ContractsMaxAggregate)
], AggregateContracts.prototype, "_max", void 0);
AggregateContracts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateContracts", {
        isAbstract: true
    })
], AggregateContracts);
exports.AggregateContracts = AggregateContracts;
