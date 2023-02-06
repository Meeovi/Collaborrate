"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ZonesAvgAggregate = class ZonesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ZonesAvgAggregate.prototype, "id", void 0);
ZonesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ZonesAvgAggregate", {
        isAbstract: true
    })
], ZonesAvgAggregate);
exports.ZonesAvgAggregate = ZonesAvgAggregate;
