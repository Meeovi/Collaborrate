"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const AccountsAvgAggregate_1 = require("../outputs/AccountsAvgAggregate");
const AccountsCountAggregate_1 = require("../outputs/AccountsCountAggregate");
const AccountsMaxAggregate_1 = require("../outputs/AccountsMaxAggregate");
const AccountsMinAggregate_1 = require("../outputs/AccountsMinAggregate");
const AccountsSumAggregate_1 = require("../outputs/AccountsSumAggregate");
let AccountsGroupBy = class AccountsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AccountsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "office_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "alt_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "alt_postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "alt_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "alt_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "alt_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "industry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "employees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "annual_revenue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "member_of", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsGroupBy.prototype, "campaign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsCountAggregate_1.AccountsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsCountAggregate_1.AccountsCountAggregate)
], AccountsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsAvgAggregate_1.AccountsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsAvgAggregate_1.AccountsAvgAggregate)
], AccountsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsSumAggregate_1.AccountsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsSumAggregate_1.AccountsSumAggregate)
], AccountsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsMinAggregate_1.AccountsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsMinAggregate_1.AccountsMinAggregate)
], AccountsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsMaxAggregate_1.AccountsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsMaxAggregate_1.AccountsMaxAggregate)
], AccountsGroupBy.prototype, "_max", void 0);
AccountsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AccountsGroupBy", {
        isAbstract: true
    })
], AccountsGroupBy);
exports.AccountsGroupBy = AccountsGroupBy;
