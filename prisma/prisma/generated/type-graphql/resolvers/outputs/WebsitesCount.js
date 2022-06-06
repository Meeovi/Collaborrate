"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WebsitesCount = class WebsitesCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WebsitesCount.prototype, "themes", void 0);
WebsitesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WebsitesCount", {
        isAbstract: true
    })
], WebsitesCount);
exports.WebsitesCount = WebsitesCount;
