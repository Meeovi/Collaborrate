"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ApitokenAvgAggregate = class ApitokenAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ApitokenAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ApitokenAvgAggregate.prototype, "token", void 0);
ApitokenAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ApitokenAvgAggregate", {
        isAbstract: true
    })
], ApitokenAvgAggregate);
exports.ApitokenAvgAggregate = ApitokenAvgAggregate;
