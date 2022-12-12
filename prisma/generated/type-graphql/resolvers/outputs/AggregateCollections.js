"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCollections = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsAvgAggregate_1 = require("../outputs/CollectionsAvgAggregate");
const CollectionsCountAggregate_1 = require("../outputs/CollectionsCountAggregate");
const CollectionsMaxAggregate_1 = require("../outputs/CollectionsMaxAggregate");
const CollectionsMinAggregate_1 = require("../outputs/CollectionsMinAggregate");
const CollectionsSumAggregate_1 = require("../outputs/CollectionsSumAggregate");
let AggregateCollections = class AggregateCollections {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsCountAggregate_1.CollectionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsCountAggregate_1.CollectionsCountAggregate)
], AggregateCollections.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsAvgAggregate_1.CollectionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsAvgAggregate_1.CollectionsAvgAggregate)
], AggregateCollections.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsSumAggregate_1.CollectionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsSumAggregate_1.CollectionsSumAggregate)
], AggregateCollections.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsMinAggregate_1.CollectionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsMinAggregate_1.CollectionsMinAggregate)
], AggregateCollections.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsMaxAggregate_1.CollectionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsMaxAggregate_1.CollectionsMaxAggregate)
], AggregateCollections.prototype, "_max", void 0);
AggregateCollections = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCollections", {
        isAbstract: true
    })
], AggregateCollections);
exports.AggregateCollections = AggregateCollections;
