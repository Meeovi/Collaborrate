"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccounts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsAvgAggregate_1 = require("../outputs/AccountsAvgAggregate");
const AccountsCountAggregate_1 = require("../outputs/AccountsCountAggregate");
const AccountsMaxAggregate_1 = require("../outputs/AccountsMaxAggregate");
const AccountsMinAggregate_1 = require("../outputs/AccountsMinAggregate");
const AccountsSumAggregate_1 = require("../outputs/AccountsSumAggregate");
let AggregateAccounts = class AggregateAccounts {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsCountAggregate_1.AccountsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsCountAggregate_1.AccountsCountAggregate)
], AggregateAccounts.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsAvgAggregate_1.AccountsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsAvgAggregate_1.AccountsAvgAggregate)
], AggregateAccounts.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsSumAggregate_1.AccountsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsSumAggregate_1.AccountsSumAggregate)
], AggregateAccounts.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsMinAggregate_1.AccountsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsMinAggregate_1.AccountsMinAggregate)
], AggregateAccounts.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsMaxAggregate_1.AccountsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsMaxAggregate_1.AccountsMaxAggregate)
], AggregateAccounts.prototype, "_max", void 0);
AggregateAccounts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAccounts", {
        isAbstract: true
    })
], AggregateAccounts);
exports.AggregateAccounts = AggregateAccounts;
