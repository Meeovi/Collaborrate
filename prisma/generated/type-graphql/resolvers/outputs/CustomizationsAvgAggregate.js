"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomizationsAvgAggregate = class CustomizationsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomizationsAvgAggregate.prototype, "id", void 0);
CustomizationsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomizationsAvgAggregate", {
        isAbstract: true
    })
], CustomizationsAvgAggregate);
exports.CustomizationsAvgAggregate = CustomizationsAvgAggregate;
