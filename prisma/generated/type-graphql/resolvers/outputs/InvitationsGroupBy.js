"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const InvitationsAvgAggregate_1 = require("../outputs/InvitationsAvgAggregate");
const InvitationsCountAggregate_1 = require("../outputs/InvitationsCountAggregate");
const InvitationsMaxAggregate_1 = require("../outputs/InvitationsMaxAggregate");
const InvitationsMinAggregate_1 = require("../outputs/InvitationsMinAggregate");
const InvitationsSumAggregate_1 = require("../outputs/InvitationsSumAggregate");
let InvitationsGroupBy = class InvitationsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InvitationsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InvitationsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InvitationsGroupBy.prototype, "invoiceDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "billingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "shippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "orderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "grandTotalPurchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsCountAggregate_1.InvitationsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsCountAggregate_1.InvitationsCountAggregate)
], InvitationsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsAvgAggregate_1.InvitationsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsAvgAggregate_1.InvitationsAvgAggregate)
], InvitationsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsSumAggregate_1.InvitationsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsSumAggregate_1.InvitationsSumAggregate)
], InvitationsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsMinAggregate_1.InvitationsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsMinAggregate_1.InvitationsMinAggregate)
], InvitationsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsMaxAggregate_1.InvitationsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsMaxAggregate_1.InvitationsMaxAggregate)
], InvitationsGroupBy.prototype, "_max", void 0);
InvitationsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InvitationsGroupBy", {
        isAbstract: true
    })
], InvitationsGroupBy);
exports.InvitationsGroupBy = InvitationsGroupBy;
