"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SegmentsAvgAggregate = class SegmentsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SegmentsAvgAggregate.prototype, "id", void 0);
SegmentsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SegmentsAvgAggregate", {
        isAbstract: true
    })
], SegmentsAvgAggregate);
exports.SegmentsAvgAggregate = SegmentsAvgAggregate;
