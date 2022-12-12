"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CollectionsAvgAggregate = class CollectionsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CollectionsAvgAggregate.prototype, "id", void 0);
CollectionsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CollectionsAvgAggregate", {
        isAbstract: true
    })
], CollectionsAvgAggregate);
exports.CollectionsAvgAggregate = CollectionsAvgAggregate;
