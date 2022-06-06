"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const General_settingsAvgAggregate_1 = require("../outputs/General_settingsAvgAggregate");
const General_settingsCountAggregate_1 = require("../outputs/General_settingsCountAggregate");
const General_settingsMaxAggregate_1 = require("../outputs/General_settingsMaxAggregate");
const General_settingsMinAggregate_1 = require("../outputs/General_settingsMinAggregate");
const General_settingsSumAggregate_1 = require("../outputs/General_settingsSumAggregate");
let General_settingsGroupBy = class General_settingsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], General_settingsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], General_settingsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "access_restrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "restriction_mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "startup_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "landing_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "http_response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "store_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "store_contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "store_contact_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsGroupBy.prototype, "customer_support", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsCountAggregate_1.General_settingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsCountAggregate_1.General_settingsCountAggregate)
], General_settingsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsAvgAggregate_1.General_settingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsAvgAggregate_1.General_settingsAvgAggregate)
], General_settingsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsSumAggregate_1.General_settingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsSumAggregate_1.General_settingsSumAggregate)
], General_settingsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsMinAggregate_1.General_settingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsMinAggregate_1.General_settingsMinAggregate)
], General_settingsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsMaxAggregate_1.General_settingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsMaxAggregate_1.General_settingsMaxAggregate)
], General_settingsGroupBy.prototype, "_max", void 0);
General_settingsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("General_settingsGroupBy", {
        isAbstract: true
    })
], General_settingsGroupBy);
exports.General_settingsGroupBy = General_settingsGroupBy;
