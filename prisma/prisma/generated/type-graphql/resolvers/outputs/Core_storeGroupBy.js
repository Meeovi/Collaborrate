"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeAvgAggregate_1 = require("../outputs/Core_storeAvgAggregate");
const Core_storeCountAggregate_1 = require("../outputs/Core_storeCountAggregate");
const Core_storeMaxAggregate_1 = require("../outputs/Core_storeMaxAggregate");
const Core_storeMinAggregate_1 = require("../outputs/Core_storeMinAggregate");
const Core_storeSumAggregate_1 = require("../outputs/Core_storeSumAggregate");
let Core_storeGroupBy = class Core_storeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Core_storeGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeGroupBy.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeGroupBy.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeGroupBy.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeGroupBy.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCountAggregate_1.Core_storeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeCountAggregate_1.Core_storeCountAggregate)
], Core_storeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeAvgAggregate_1.Core_storeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeAvgAggregate_1.Core_storeAvgAggregate)
], Core_storeGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeSumAggregate_1.Core_storeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeSumAggregate_1.Core_storeSumAggregate)
], Core_storeGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeMinAggregate_1.Core_storeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeMinAggregate_1.Core_storeMinAggregate)
], Core_storeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeMaxAggregate_1.Core_storeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeMaxAggregate_1.Core_storeMaxAggregate)
], Core_storeGroupBy.prototype, "_max", void 0);
Core_storeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Core_storeGroupBy", {
        isAbstract: true
    })
], Core_storeGroupBy);
exports.Core_storeGroupBy = Core_storeGroupBy;
