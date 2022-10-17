"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OotoAvgAggregate = class OotoAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OotoAvgAggregate.prototype, "id", void 0);
OotoAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OotoAvgAggregate", {
        isAbstract: true
    })
], OotoAvgAggregate);
exports.OotoAvgAggregate = OotoAvgAggregate;
