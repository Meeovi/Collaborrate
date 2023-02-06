"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttributesAvgAggregate = class AttributesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AttributesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AttributesAvgAggregate.prototype, "prod_id", void 0);
AttributesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttributesAvgAggregate", {
        isAbstract: true
    })
], AttributesAvgAggregate);
exports.AttributesAvgAggregate = AttributesAvgAggregate;
