"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VendorsAvgAggregate = class VendorsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VendorsAvgAggregate.prototype, "id", void 0);
VendorsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VendorsAvgAggregate", {
        isAbstract: true
    })
], VendorsAvgAggregate);
exports.VendorsAvgAggregate = VendorsAvgAggregate;
