"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Core_storeAvgAggregate = class Core_storeAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Core_storeAvgAggregate.prototype, "id", void 0);
Core_storeAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Core_storeAvgAggregate", {
        isAbstract: true
    })
], Core_storeAvgAggregate);
exports.Core_storeAvgAggregate = Core_storeAvgAggregate;
