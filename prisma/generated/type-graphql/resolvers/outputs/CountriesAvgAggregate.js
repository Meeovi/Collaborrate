"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountriesAvgAggregate = class CountriesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CountriesAvgAggregate.prototype, "id", void 0);
CountriesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountriesAvgAggregate", {
        isAbstract: true
    })
], CountriesAvgAggregate);
exports.CountriesAvgAggregate = CountriesAvgAggregate;
