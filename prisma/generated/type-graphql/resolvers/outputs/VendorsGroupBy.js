"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsAvgAggregate_1 = require("../outputs/VendorsAvgAggregate");
const VendorsCountAggregate_1 = require("../outputs/VendorsCountAggregate");
const VendorsMaxAggregate_1 = require("../outputs/VendorsMaxAggregate");
const VendorsMinAggregate_1 = require("../outputs/VendorsMinAggregate");
const VendorsSumAggregate_1 = require("../outputs/VendorsSumAggregate");
let VendorsGroupBy = class VendorsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VendorsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "polls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "gift_certificates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "invoices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "reward_points", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "special_discounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "statistics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "stocks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "physical_store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsGroupBy.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsCountAggregate_1.VendorsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsCountAggregate_1.VendorsCountAggregate)
], VendorsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsAvgAggregate_1.VendorsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsAvgAggregate_1.VendorsAvgAggregate)
], VendorsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsSumAggregate_1.VendorsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsSumAggregate_1.VendorsSumAggregate)
], VendorsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsMinAggregate_1.VendorsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsMinAggregate_1.VendorsMinAggregate)
], VendorsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsMaxAggregate_1.VendorsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsMaxAggregate_1.VendorsMaxAggregate)
], VendorsGroupBy.prototype, "_max", void 0);
VendorsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VendorsGroupBy", {
        isAbstract: true
    })
], VendorsGroupBy);
exports.VendorsGroupBy = VendorsGroupBy;
