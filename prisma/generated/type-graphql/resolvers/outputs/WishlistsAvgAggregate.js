"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WishlistsAvgAggregate = class WishlistsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WishlistsAvgAggregate.prototype, "id", void 0);
WishlistsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WishlistsAvgAggregate", {
        isAbstract: true
    })
], WishlistsAvgAggregate);
exports.WishlistsAvgAggregate = WishlistsAvgAggregate;
