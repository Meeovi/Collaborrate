"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IntegrationsAvgAggregate = class IntegrationsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntegrationsAvgAggregate.prototype, "id", void 0);
IntegrationsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IntegrationsAvgAggregate", {
        isAbstract: true
    })
], IntegrationsAvgAggregate);
exports.IntegrationsAvgAggregate = IntegrationsAvgAggregate;
