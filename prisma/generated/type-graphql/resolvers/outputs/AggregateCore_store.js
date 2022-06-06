"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCore_store = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeAvgAggregate_1 = require("../outputs/Core_storeAvgAggregate");
const Core_storeCountAggregate_1 = require("../outputs/Core_storeCountAggregate");
const Core_storeMaxAggregate_1 = require("../outputs/Core_storeMaxAggregate");
const Core_storeMinAggregate_1 = require("../outputs/Core_storeMinAggregate");
const Core_storeSumAggregate_1 = require("../outputs/Core_storeSumAggregate");
let AggregateCore_store = class AggregateCore_store {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCountAggregate_1.Core_storeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeCountAggregate_1.Core_storeCountAggregate)
], AggregateCore_store.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeAvgAggregate_1.Core_storeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeAvgAggregate_1.Core_storeAvgAggregate)
], AggregateCore_store.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeSumAggregate_1.Core_storeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeSumAggregate_1.Core_storeSumAggregate)
], AggregateCore_store.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeMinAggregate_1.Core_storeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeMinAggregate_1.Core_storeMinAggregate)
], AggregateCore_store.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeMaxAggregate_1.Core_storeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeMaxAggregate_1.Core_storeMaxAggregate)
], AggregateCore_store.prototype, "_max", void 0);
AggregateCore_store = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCore_store", {
        isAbstract: true
    })
], AggregateCore_store);
exports.AggregateCore_store = AggregateCore_store;
