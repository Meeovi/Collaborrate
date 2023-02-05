"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReturnsAvgAggregate = class ReturnsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReturnsAvgAggregate.prototype, "id", void 0);
ReturnsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReturnsAvgAggregate", {
        isAbstract: true
    })
], ReturnsAvgAggregate);
exports.ReturnsAvgAggregate = ReturnsAvgAggregate;
