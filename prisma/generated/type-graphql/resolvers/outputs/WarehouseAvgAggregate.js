"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WarehouseAvgAggregate = class WarehouseAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WarehouseAvgAggregate.prototype, "id", void 0);
WarehouseAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WarehouseAvgAggregate", {
        isAbstract: true
    })
], WarehouseAvgAggregate);
exports.WarehouseAvgAggregate = WarehouseAvgAggregate;
