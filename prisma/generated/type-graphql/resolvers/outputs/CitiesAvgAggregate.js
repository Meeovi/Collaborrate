"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CitiesAvgAggregate = class CitiesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CitiesAvgAggregate.prototype, "id", void 0);
CitiesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CitiesAvgAggregate", {
        isAbstract: true
    })
], CitiesAvgAggregate);
exports.CitiesAvgAggregate = CitiesAvgAggregate;
