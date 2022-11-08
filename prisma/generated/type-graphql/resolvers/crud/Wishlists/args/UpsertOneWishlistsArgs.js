"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsCreateInput_1 = require("../../../inputs/WishlistsCreateInput");
const WishlistsUpdateInput_1 = require("../../../inputs/WishlistsUpdateInput");
const WishlistsWhereUniqueInput_1 = require("../../../inputs/WishlistsWhereUniqueInput");
let UpsertOneWishlistsArgs = class UpsertOneWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput)
], UpsertOneWishlistsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsCreateInput_1.WishlistsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsCreateInput_1.WishlistsCreateInput)
], UpsertOneWishlistsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsUpdateInput_1.WishlistsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsUpdateInput_1.WishlistsUpdateInput)
], UpsertOneWishlistsArgs.prototype, "update", void 0);
UpsertOneWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneWishlistsArgs);
exports.UpsertOneWishlistsArgs = UpsertOneWishlistsArgs;
