"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCategories = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesAvgAggregate_1 = require("../outputs/CategoriesAvgAggregate");
const CategoriesCountAggregate_1 = require("../outputs/CategoriesCountAggregate");
const CategoriesMaxAggregate_1 = require("../outputs/CategoriesMaxAggregate");
const CategoriesMinAggregate_1 = require("../outputs/CategoriesMinAggregate");
const CategoriesSumAggregate_1 = require("../outputs/CategoriesSumAggregate");
let AggregateCategories = class AggregateCategories {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesCountAggregate_1.CategoriesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesCountAggregate_1.CategoriesCountAggregate)
], AggregateCategories.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesAvgAggregate_1.CategoriesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesAvgAggregate_1.CategoriesAvgAggregate)
], AggregateCategories.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesSumAggregate_1.CategoriesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesSumAggregate_1.CategoriesSumAggregate)
], AggregateCategories.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesMinAggregate_1.CategoriesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesMinAggregate_1.CategoriesMinAggregate)
], AggregateCategories.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesMaxAggregate_1.CategoriesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesMaxAggregate_1.CategoriesMaxAggregate)
], AggregateCategories.prototype, "_max", void 0);
AggregateCategories = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCategories", {
        isAbstract: true
    })
], AggregateCategories);
exports.AggregateCategories = AggregateCategories;
