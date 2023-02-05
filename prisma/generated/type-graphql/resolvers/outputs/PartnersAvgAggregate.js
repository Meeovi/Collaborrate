"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PartnersAvgAggregate = class PartnersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PartnersAvgAggregate.prototype, "id", void 0);
PartnersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PartnersAvgAggregate", {
        isAbstract: true
    })
], PartnersAvgAggregate);
exports.PartnersAvgAggregate = PartnersAvgAggregate;
