"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let WarehouseSumAggregate = class WarehouseSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WarehouseSumAggregate.prototype, "id", void 0);
WarehouseSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WarehouseSumAggregate", {
        isAbstract: true
    })
], WarehouseSumAggregate);
exports.WarehouseSumAggregate = WarehouseSumAggregate;
