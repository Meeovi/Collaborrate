"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const AgreementsAvgAggregate_1 = require("../outputs/AgreementsAvgAggregate");
const AgreementsCountAggregate_1 = require("../outputs/AgreementsCountAggregate");
const AgreementsMaxAggregate_1 = require("../outputs/AgreementsMaxAggregate");
const AgreementsMinAggregate_1 = require("../outputs/AgreementsMinAggregate");
const AgreementsSumAggregate_1 = require("../outputs/AgreementsSumAggregate");
let AgreementsGroupBy = class AgreementsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AgreementsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "reference_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgreementsGroupBy.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgreementsGroupBy.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "user_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "shop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsGroupBy.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsCountAggregate_1.AgreementsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsCountAggregate_1.AgreementsCountAggregate)
], AgreementsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsAvgAggregate_1.AgreementsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsAvgAggregate_1.AgreementsAvgAggregate)
], AgreementsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsSumAggregate_1.AgreementsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsSumAggregate_1.AgreementsSumAggregate)
], AgreementsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsMinAggregate_1.AgreementsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsMinAggregate_1.AgreementsMinAggregate)
], AgreementsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsMaxAggregate_1.AgreementsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsMaxAggregate_1.AgreementsMaxAggregate)
], AgreementsGroupBy.prototype, "_max", void 0);
AgreementsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgreementsGroupBy", {
        isAbstract: true
    })
], AgreementsGroupBy);
exports.AgreementsGroupBy = AgreementsGroupBy;
