"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DeepdiveAvgAggregate = class DeepdiveAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DeepdiveAvgAggregate.prototype, "id", void 0);
DeepdiveAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DeepdiveAvgAggregate", {
        isAbstract: true
    })
], DeepdiveAvgAggregate);
exports.DeepdiveAvgAggregate = DeepdiveAvgAggregate;
