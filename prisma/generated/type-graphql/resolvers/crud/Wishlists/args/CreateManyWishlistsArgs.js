"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsCreateManyInput_1 = require("../../../inputs/WishlistsCreateManyInput");
let CreateManyWishlistsArgs = class CreateManyWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsCreateManyInput_1.WishlistsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWishlistsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWishlistsArgs.prototype, "skipDuplicates", void 0);
CreateManyWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWishlistsArgs);
exports.CreateManyWishlistsArgs = CreateManyWishlistsArgs;
