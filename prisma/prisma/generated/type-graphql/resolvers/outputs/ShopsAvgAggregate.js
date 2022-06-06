"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShopsAvgAggregate = class ShopsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ShopsAvgAggregate.prototype, "id", void 0);
ShopsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShopsAvgAggregate", {
        isAbstract: true
    })
], ShopsAvgAggregate);
exports.ShopsAvgAggregate = ShopsAvgAggregate;
