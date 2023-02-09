"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesAvgAggregate_1 = require("../outputs/CategoriesAvgAggregate");
const CategoriesCountAggregate_1 = require("../outputs/CategoriesCountAggregate");
const CategoriesMaxAggregate_1 = require("../outputs/CategoriesMaxAggregate");
const CategoriesMinAggregate_1 = require("../outputs/CategoriesMinAggregate");
const CategoriesSumAggregate_1 = require("../outputs/CategoriesSumAggregate");
let CategoriesGroupBy = class CategoriesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CategoriesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CategoriesGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesGroupBy.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesCountAggregate_1.CategoriesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesCountAggregate_1.CategoriesCountAggregate)
], CategoriesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesAvgAggregate_1.CategoriesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesAvgAggregate_1.CategoriesAvgAggregate)
], CategoriesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesSumAggregate_1.CategoriesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesSumAggregate_1.CategoriesSumAggregate)
], CategoriesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesMinAggregate_1.CategoriesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesMinAggregate_1.CategoriesMinAggregate)
], CategoriesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesMaxAggregate_1.CategoriesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesMaxAggregate_1.CategoriesMaxAggregate)
], CategoriesGroupBy.prototype, "_max", void 0);
CategoriesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoriesGroupBy", {
        isAbstract: true
    })
], CategoriesGroupBy);
exports.CategoriesGroupBy = CategoriesGroupBy;
