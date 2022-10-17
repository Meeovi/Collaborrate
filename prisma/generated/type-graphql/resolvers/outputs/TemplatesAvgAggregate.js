"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TemplatesAvgAggregate = class TemplatesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TemplatesAvgAggregate.prototype, "id", void 0);
TemplatesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TemplatesAvgAggregate", {
        isAbstract: true
    })
], TemplatesAvgAggregate);
exports.TemplatesAvgAggregate = TemplatesAvgAggregate;
