"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountriesSumAggregate = class CountriesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CountriesSumAggregate.prototype, "id", void 0);
CountriesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountriesSumAggregate", {
        isAbstract: true
    })
], CountriesSumAggregate);
exports.CountriesSumAggregate = CountriesSumAggregate;
