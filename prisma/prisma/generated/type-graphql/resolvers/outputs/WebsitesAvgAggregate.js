"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WebsitesAvgAggregate = class WebsitesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WebsitesAvgAggregate.prototype, "id", void 0);
WebsitesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WebsitesAvgAggregate", {
        isAbstract: true
    })
], WebsitesAvgAggregate);
exports.WebsitesAvgAggregate = WebsitesAvgAggregate;
