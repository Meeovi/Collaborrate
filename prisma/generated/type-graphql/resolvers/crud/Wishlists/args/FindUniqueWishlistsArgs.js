"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsWhereUniqueInput_1 = require("../../../inputs/WishlistsWhereUniqueInput");
let FindUniqueWishlistsArgs = class FindUniqueWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput)
], FindUniqueWishlistsArgs.prototype, "where", void 0);
FindUniqueWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWishlistsArgs);
exports.FindUniqueWishlistsArgs = FindUniqueWishlistsArgs;
