"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Gift_certificatesAvgAggregate_1 = require("../outputs/Gift_certificatesAvgAggregate");
const Gift_certificatesCountAggregate_1 = require("../outputs/Gift_certificatesCountAggregate");
const Gift_certificatesMaxAggregate_1 = require("../outputs/Gift_certificatesMaxAggregate");
const Gift_certificatesMinAggregate_1 = require("../outputs/Gift_certificatesMinAggregate");
const Gift_certificatesSumAggregate_1 = require("../outputs/Gift_certificatesSumAggregate");
let Gift_certificatesGroupBy = class Gift_certificatesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Gift_certificatesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Gift_certificatesGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "special_offers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCountAggregate_1.Gift_certificatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCountAggregate_1.Gift_certificatesCountAggregate)
], Gift_certificatesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesAvgAggregate_1.Gift_certificatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesAvgAggregate_1.Gift_certificatesAvgAggregate)
], Gift_certificatesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesSumAggregate_1.Gift_certificatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesSumAggregate_1.Gift_certificatesSumAggregate)
], Gift_certificatesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesMinAggregate_1.Gift_certificatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesMinAggregate_1.Gift_certificatesMinAggregate)
], Gift_certificatesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesMaxAggregate_1.Gift_certificatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesMaxAggregate_1.Gift_certificatesMaxAggregate)
], Gift_certificatesGroupBy.prototype, "_max", void 0);
Gift_certificatesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Gift_certificatesGroupBy", {
        isAbstract: true
    })
], Gift_certificatesGroupBy);
exports.Gift_certificatesGroupBy = Gift_certificatesGroupBy;
