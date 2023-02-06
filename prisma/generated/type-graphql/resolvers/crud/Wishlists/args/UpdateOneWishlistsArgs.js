"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsUpdateInput_1 = require("../../../inputs/WishlistsUpdateInput");
const WishlistsWhereUniqueInput_1 = require("../../../inputs/WishlistsWhereUniqueInput");
let UpdateOneWishlistsArgs = class UpdateOneWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsUpdateInput_1.WishlistsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsUpdateInput_1.WishlistsUpdateInput)
], UpdateOneWishlistsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput)
], UpdateOneWishlistsArgs.prototype, "where", void 0);
UpdateOneWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneWishlistsArgs);
exports.UpdateOneWishlistsArgs = UpdateOneWishlistsArgs;
