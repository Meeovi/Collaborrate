"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsUpdateManyMutationInput_1 = require("../../../inputs/WishlistsUpdateManyMutationInput");
const WishlistsWhereInput_1 = require("../../../inputs/WishlistsWhereInput");
let UpdateManyWishlistsArgs = class UpdateManyWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsUpdateManyMutationInput_1.WishlistsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsUpdateManyMutationInput_1.WishlistsUpdateManyMutationInput)
], UpdateManyWishlistsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereInput_1.WishlistsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereInput_1.WishlistsWhereInput)
], UpdateManyWishlistsArgs.prototype, "where", void 0);
UpdateManyWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWishlistsArgs);
exports.UpdateManyWishlistsArgs = UpdateManyWishlistsArgs;
