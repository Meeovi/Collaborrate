"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CitiesSumAggregate = class CitiesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CitiesSumAggregate.prototype, "id", void 0);
CitiesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CitiesSumAggregate", {
        isAbstract: true
    })
], CitiesSumAggregate);
exports.CitiesSumAggregate = CitiesSumAggregate;
