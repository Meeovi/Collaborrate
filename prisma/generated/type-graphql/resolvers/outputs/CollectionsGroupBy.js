"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CollectionsAvgAggregate_1 = require("../outputs/CollectionsAvgAggregate");
const CollectionsCountAggregate_1 = require("../outputs/CollectionsCountAggregate");
const CollectionsMaxAggregate_1 = require("../outputs/CollectionsMaxAggregate");
const CollectionsMinAggregate_1 = require("../outputs/CollectionsMinAggregate");
const CollectionsSumAggregate_1 = require("../outputs/CollectionsSumAggregate");
let CollectionsGroupBy = class CollectionsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CollectionsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CollectionsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsGroupBy.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsCountAggregate_1.CollectionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsCountAggregate_1.CollectionsCountAggregate)
], CollectionsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsAvgAggregate_1.CollectionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsAvgAggregate_1.CollectionsAvgAggregate)
], CollectionsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsSumAggregate_1.CollectionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsSumAggregate_1.CollectionsSumAggregate)
], CollectionsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsMinAggregate_1.CollectionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsMinAggregate_1.CollectionsMinAggregate)
], CollectionsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsMaxAggregate_1.CollectionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsMaxAggregate_1.CollectionsMaxAggregate)
], CollectionsGroupBy.prototype, "_max", void 0);
CollectionsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CollectionsGroupBy", {
        isAbstract: true
    })
], CollectionsGroupBy);
exports.CollectionsGroupBy = CollectionsGroupBy;
