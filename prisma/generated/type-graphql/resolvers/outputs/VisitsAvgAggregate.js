"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisitsAvgAggregate = class VisitsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VisitsAvgAggregate.prototype, "id", void 0);
VisitsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisitsAvgAggregate", {
        isAbstract: true
    })
], VisitsAvgAggregate);
exports.VisitsAvgAggregate = VisitsAvgAggregate;
