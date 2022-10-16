"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsAvgAggregate_1 = require("../outputs/CustomizationsAvgAggregate");
const CustomizationsCountAggregate_1 = require("../outputs/CustomizationsCountAggregate");
const CustomizationsMaxAggregate_1 = require("../outputs/CustomizationsMaxAggregate");
const CustomizationsMinAggregate_1 = require("../outputs/CustomizationsMinAggregate");
const CustomizationsSumAggregate_1 = require("../outputs/CustomizationsSumAggregate");
let CustomizationsGroupBy = class CustomizationsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CustomizationsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomizationsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "site_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "nav_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "banner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "footer_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "announcement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "site_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsGroupBy.prototype, "allow_signup", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsCountAggregate_1.CustomizationsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsCountAggregate_1.CustomizationsCountAggregate)
], CustomizationsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsAvgAggregate_1.CustomizationsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsAvgAggregate_1.CustomizationsAvgAggregate)
], CustomizationsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsSumAggregate_1.CustomizationsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsSumAggregate_1.CustomizationsSumAggregate)
], CustomizationsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsMinAggregate_1.CustomizationsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsMinAggregate_1.CustomizationsMinAggregate)
], CustomizationsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsMaxAggregate_1.CustomizationsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsMaxAggregate_1.CustomizationsMaxAggregate)
], CustomizationsGroupBy.prototype, "_max", void 0);
CustomizationsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomizationsGroupBy", {
        isAbstract: true
    })
], CustomizationsGroupBy);
exports.CustomizationsGroupBy = CustomizationsGroupBy;
