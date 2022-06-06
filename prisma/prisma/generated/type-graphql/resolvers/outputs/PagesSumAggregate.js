"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PagesSumAggregate = class PagesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PagesSumAggregate.prototype, "id", void 0);
PagesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PagesSumAggregate", {
        isAbstract: true
    })
], PagesSumAggregate);
exports.PagesSumAggregate = PagesSumAggregate;
