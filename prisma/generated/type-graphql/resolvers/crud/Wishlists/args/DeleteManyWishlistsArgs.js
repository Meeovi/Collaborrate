"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsWhereInput_1 = require("../../../inputs/WishlistsWhereInput");
let DeleteManyWishlistsArgs = class DeleteManyWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereInput_1.WishlistsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereInput_1.WishlistsWhereInput)
], DeleteManyWishlistsArgs.prototype, "where", void 0);
DeleteManyWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWishlistsArgs);
exports.DeleteManyWishlistsArgs = DeleteManyWishlistsArgs;
