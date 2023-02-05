"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWarehouse = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseAvgAggregate_1 = require("../outputs/WarehouseAvgAggregate");
const WarehouseCountAggregate_1 = require("../outputs/WarehouseCountAggregate");
const WarehouseMaxAggregate_1 = require("../outputs/WarehouseMaxAggregate");
const WarehouseMinAggregate_1 = require("../outputs/WarehouseMinAggregate");
const WarehouseSumAggregate_1 = require("../outputs/WarehouseSumAggregate");
let AggregateWarehouse = class AggregateWarehouse {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseCountAggregate_1.WarehouseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseCountAggregate_1.WarehouseCountAggregate)
], AggregateWarehouse.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseAvgAggregate_1.WarehouseAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseAvgAggregate_1.WarehouseAvgAggregate)
], AggregateWarehouse.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseSumAggregate_1.WarehouseSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseSumAggregate_1.WarehouseSumAggregate)
], AggregateWarehouse.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseMinAggregate_1.WarehouseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseMinAggregate_1.WarehouseMinAggregate)
], AggregateWarehouse.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseMaxAggregate_1.WarehouseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseMaxAggregate_1.WarehouseMaxAggregate)
], AggregateWarehouse.prototype, "_max", void 0);
AggregateWarehouse = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWarehouse", {
        isAbstract: true
    })
], AggregateWarehouse);
exports.AggregateWarehouse = AggregateWarehouse;
