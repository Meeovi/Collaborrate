"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesAvgAggregate = class Url_rewritesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesAvgAggregate.prototype, "id", void 0);
Url_rewritesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Url_rewritesAvgAggregate", {
        isAbstract: true
    })
], Url_rewritesAvgAggregate);
exports.Url_rewritesAvgAggregate = Url_rewritesAvgAggregate;
