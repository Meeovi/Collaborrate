"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const ReportsAvgAggregate_1 = require("../outputs/ReportsAvgAggregate");
const ReportsCountAggregate_1 = require("../outputs/ReportsCountAggregate");
const ReportsMaxAggregate_1 = require("../outputs/ReportsMaxAggregate");
const ReportsMinAggregate_1 = require("../outputs/ReportsMinAggregate");
const ReportsSumAggregate_1 = require("../outputs/ReportsSumAggregate");
let ReportsGroupBy = class ReportsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReportsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsGroupBy.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], ReportsGroupBy.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsGroupBy.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsGroupBy.prototype, "applied_coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReportsGroupBy.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReportsGroupBy.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsGroupBy.prototype, "ip_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCountAggregate_1.ReportsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsCountAggregate_1.ReportsCountAggregate)
], ReportsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsAvgAggregate_1.ReportsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsAvgAggregate_1.ReportsAvgAggregate)
], ReportsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsSumAggregate_1.ReportsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsSumAggregate_1.ReportsSumAggregate)
], ReportsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsMinAggregate_1.ReportsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsMinAggregate_1.ReportsMinAggregate)
], ReportsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsMaxAggregate_1.ReportsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsMaxAggregate_1.ReportsMaxAggregate)
], ReportsGroupBy.prototype, "_max", void 0);
ReportsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportsGroupBy", {
        isAbstract: true
    })
], ReportsGroupBy);
exports.ReportsGroupBy = ReportsGroupBy;
