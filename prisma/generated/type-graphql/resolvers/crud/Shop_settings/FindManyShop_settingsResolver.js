"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyShop_settingsArgs_1 = require("./args/FindManyShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const helpers_1 = require("../../../helpers");
let FindManyShop_settingsResolver = class FindManyShop_settingsResolver {
    async findManyShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Shop_settings_1.Shop_settings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShop_settingsArgs_1.FindManyShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyShop_settingsResolver.prototype, "findManyShop_settings", null);
FindManyShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], FindManyShop_settingsResolver);
exports.FindManyShop_settingsResolver = FindManyShop_settingsResolver;
