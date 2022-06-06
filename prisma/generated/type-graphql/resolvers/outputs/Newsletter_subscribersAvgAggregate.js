"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Newsletter_subscribersAvgAggregate = class Newsletter_subscribersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersAvgAggregate.prototype, "cust_id", void 0);
Newsletter_subscribersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Newsletter_subscribersAvgAggregate", {
        isAbstract: true
    })
], Newsletter_subscribersAvgAggregate);
exports.Newsletter_subscribersAvgAggregate = Newsletter_subscribersAvgAggregate;
