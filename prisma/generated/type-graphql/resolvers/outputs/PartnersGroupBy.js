"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const PartnersAvgAggregate_1 = require("../outputs/PartnersAvgAggregate");
const PartnersCountAggregate_1 = require("../outputs/PartnersCountAggregate");
const PartnersMaxAggregate_1 = require("../outputs/PartnersMaxAggregate");
const PartnersMinAggregate_1 = require("../outputs/PartnersMinAggregate");
const PartnersSumAggregate_1 = require("../outputs/PartnersSumAggregate");
let PartnersGroupBy = class PartnersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PartnersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PartnersGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersGroupBy.prototype, "business_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersCountAggregate_1.PartnersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersCountAggregate_1.PartnersCountAggregate)
], PartnersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersAvgAggregate_1.PartnersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersAvgAggregate_1.PartnersAvgAggregate)
], PartnersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersSumAggregate_1.PartnersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersSumAggregate_1.PartnersSumAggregate)
], PartnersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersMinAggregate_1.PartnersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersMinAggregate_1.PartnersMinAggregate)
], PartnersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersMaxAggregate_1.PartnersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersMaxAggregate_1.PartnersMaxAggregate)
], PartnersGroupBy.prototype, "_max", void 0);
PartnersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PartnersGroupBy", {
        isAbstract: true
    })
], PartnersGroupBy);
exports.PartnersGroupBy = PartnersGroupBy;
