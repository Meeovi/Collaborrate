"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WebhooksAvgAggregate = class WebhooksAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WebhooksAvgAggregate.prototype, "id", void 0);
WebhooksAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WebhooksAvgAggregate", {
        isAbstract: true
    })
], WebhooksAvgAggregate);
exports.WebhooksAvgAggregate = WebhooksAvgAggregate;
