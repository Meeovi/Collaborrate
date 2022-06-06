"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Shop_settingsAvgAggregate_1 = require("../outputs/Shop_settingsAvgAggregate");
const Shop_settingsCountAggregate_1 = require("../outputs/Shop_settingsCountAggregate");
const Shop_settingsMaxAggregate_1 = require("../outputs/Shop_settingsMaxAggregate");
const Shop_settingsMinAggregate_1 = require("../outputs/Shop_settingsMinAggregate");
const Shop_settingsSumAggregate_1 = require("../outputs/Shop_settingsSumAggregate");
let Shop_settingsGroupBy = class Shop_settingsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Shop_settingsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Shop_settingsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "store_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "store_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "store_hours", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "allow_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "state_required_for", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "allow_countries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "default_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "optional_zip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "european_union_countries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "top_destinations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "base_currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "default_currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsGroupBy.prototype, "allowed_currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsCountAggregate_1.Shop_settingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsCountAggregate_1.Shop_settingsCountAggregate)
], Shop_settingsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsAvgAggregate_1.Shop_settingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsAvgAggregate_1.Shop_settingsAvgAggregate)
], Shop_settingsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsSumAggregate_1.Shop_settingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsSumAggregate_1.Shop_settingsSumAggregate)
], Shop_settingsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsMinAggregate_1.Shop_settingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsMinAggregate_1.Shop_settingsMinAggregate)
], Shop_settingsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsMaxAggregate_1.Shop_settingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsMaxAggregate_1.Shop_settingsMaxAggregate)
], Shop_settingsGroupBy.prototype, "_max", void 0);
Shop_settingsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Shop_settingsGroupBy", {
        isAbstract: true
    })
], Shop_settingsGroupBy);
exports.Shop_settingsGroupBy = Shop_settingsGroupBy;
