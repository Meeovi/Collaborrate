"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const SourceAvgAggregate_1 = require("../outputs/SourceAvgAggregate");
const SourceCountAggregate_1 = require("../outputs/SourceCountAggregate");
const SourceMaxAggregate_1 = require("../outputs/SourceMaxAggregate");
const SourceMinAggregate_1 = require("../outputs/SourceMinAggregate");
const SourceSumAggregate_1 = require("../outputs/SourceSumAggregate");
let SourceGroupBy = class SourceGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SourceGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SourceGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SourceGroupBy.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SourceGroupBy.prototype, "pickup_location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "contact_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], SourceGroupBy.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], SourceGroupBy.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceGroupBy.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], SourceGroupBy.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCountAggregate_1.SourceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceCountAggregate_1.SourceCountAggregate)
], SourceGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceAvgAggregate_1.SourceAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceAvgAggregate_1.SourceAvgAggregate)
], SourceGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceSumAggregate_1.SourceSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceSumAggregate_1.SourceSumAggregate)
], SourceGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceMinAggregate_1.SourceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceMinAggregate_1.SourceMinAggregate)
], SourceGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceMaxAggregate_1.SourceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceMaxAggregate_1.SourceMaxAggregate)
], SourceGroupBy.prototype, "_max", void 0);
SourceGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SourceGroupBy", {
        isAbstract: true
    })
], SourceGroupBy);
exports.SourceGroupBy = SourceGroupBy;
