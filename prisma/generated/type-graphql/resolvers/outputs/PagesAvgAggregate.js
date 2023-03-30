"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PagesAvgAggregate = class PagesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PagesAvgAggregate.prototype, "id", void 0);
PagesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PagesAvgAggregate", {
        isAbstract: true
    })
], PagesAvgAggregate);
exports.PagesAvgAggregate = PagesAvgAggregate;
