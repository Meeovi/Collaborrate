"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PluginsAvgAggregate = class PluginsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PluginsAvgAggregate.prototype, "id", void 0);
PluginsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PluginsAvgAggregate", {
        isAbstract: true
    })
], PluginsAvgAggregate);
exports.PluginsAvgAggregate = PluginsAvgAggregate;
