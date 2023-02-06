"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsCreateInput_1 = require("../../../inputs/WishlistsCreateInput");
let CreateOneWishlistsArgs = class CreateOneWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsCreateInput_1.WishlistsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WishlistsCreateInput_1.WishlistsCreateInput)
], CreateOneWishlistsArgs.prototype, "data", void 0);
CreateOneWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneWishlistsArgs);
exports.CreateOneWishlistsArgs = CreateOneWishlistsArgs;
